import allDinosReducer from "../../reducers/all-dinos-reducer";
import * as c from "./../../actions/ActionTypes"

describe('allDinosReducer', () => {
  
  let action;
  
  const initialState = {
    isLoaded: false,
    allDinos: [],
    error: null
  };

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        allDinosReducer(initialState, {type: null})
      }
    ).toThrowError("There is no action matching null");
  });

  test("successful fetch should change isLoaded to true and update allDinos",
  () => {
    const allDinos = "creaturesauraus";
    action = {
      type: c.GET_ALL_DINOS_SUCCESS,
      allDinos
    };

    expect(allDinosReducer(initialState, action)).toEqual({
      isLoaded: true,
      allDinos: "creaturesauraus",
      error: null
    })
  })

  test("failing to get allDinos should change isLoaded to true and add an error message", () => {
    const error = 'An error';
    action = {
      type: c.GET_ALL_DINOS_FAILURE,
      error
    };

    expect(allDinosReducer(initialState, action)).toEqual({
      isLoaded: true,
      allDinos: [],
      error: 'An error'
    });
  });
});