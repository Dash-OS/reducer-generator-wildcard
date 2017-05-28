# reducer-generator-wildcard

A `reducer-generator` which builds a redux-reducer which matches against 
wildcards.

### Installation

```
yarn add reducer-generator-wildcard
```

**or**

```
npm install --save reducer-generator-wildcard
```


### Simple Example

```js
import wildcardReducer from 'reducer-generator-wildcard'

const system = wildcardReducer({ /* initial state */ }, {
  'SYSTEM*': (state, { type, ...action }) => ({
    ...state,
    /* whenever any type starts with SYSTEM */
  })
})
```