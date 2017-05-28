import { Wildcard } from 'wildcard-utils'

export default (initialState, handlers = {}, pcontext) => {
  // compile the regular expression object 
  const wcMatcher = new Wildcard(handlers)
  return (state = initialState, action, context) =>
    {
      if ( ! action || ! action.type ) return state
      const matches = wcMatcher.search(action.type)
      return Object.keys(matches).reduce( (p, c) =>
        matches[c](p, action, { ...pcontext, ...context })
      , state )
    }
}