import webpack from 'webpack'
import BabiliPlugin from 'babili-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  new LodashModuleReplacementPlugin({
    paths: true
  }),
  ...process.env.NODE_ENV === 'production'
    ? [
      // new BabiliPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
    ]
    : []
]