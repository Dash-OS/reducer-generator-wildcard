# reducer-generator-wildcard

A `reducer-generator` which builds a redux-reducer which matches against 
wildcards.

### Simple Example

```js
import wildcardReducer from 'reducer-generator-wildcard'

const system = wildcardReducer({}, {
  'SYSTEM*': (state, { type, ...action }) => ({
    ...state,
    /* whenever any type starts with SYSTEM */
  })
})
```