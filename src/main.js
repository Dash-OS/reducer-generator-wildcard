import { Wildcard } from 'wildcard-utils'

export default 
  function createWildcardReducer(initialState, handlers = {}, ...initialArgs) {
    const wcMatcher = new Wildcard(handlers)
    return (state = initialState, action, ...reducerArgs) => {
      if ( ! action || ! action.type ) return state
      const matches = wcMatcher.search(action.type)
      return Object.keys(matches).reduce(
        (p, c) => matches[c](p, action, ...initialArgs, ...reducerArgs), 
        state 
      )
    }
  }