# reducer-generator-wildcard

A [`reducer-generator`](https://github.com/search?utf8=%E2%9C%93&q=topic%3Areducer-generator&type=Repositories) 
which builds a redux-reducer which matches against wildcard types.

> Under the hood this utilizes our package [wildcard-utils](https://github.com/Dash-OS/wildcard-utils) which 
> allows us to match strings against objects of wildcards.

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
import createWildcardReducer from 'reducer-generator-wildcard'

// match any types that start with SYSTEM
const system = createWildcardReducer(
  { /* initial state */ }, 
  {
    // match any types that begin with SYSTEM
    'SYSTEM*': (state, { type, ...action }) => ({
      ...state,
      isOnline: action.isOnline !== undefined
        ? action.isOnline
        : state.isOnline,
    }),
  },
  /* You may pass extra args that will be passed to the reducer(s) */
)
```