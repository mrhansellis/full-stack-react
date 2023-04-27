import * as c from "../actions/ActionTypes";

const allDinosReducer = (state, action) => {
  switch (action.type) {
    case c.GET_ALL_DINOS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        allDinos: action.allDinos
      };
    case c.GET_ALL_DINOS_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      }
    default:
      throw new Error(`There is no action matching ${action.type}`)
  }
}

export default allDinosReducer;