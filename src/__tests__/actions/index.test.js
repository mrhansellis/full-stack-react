import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('all dinos reducer actions', () => {
  it('getAllDinosSuccess should create GET_ALL_DINOS_SUCCESS action', () => {
    const allDinos = "creaturesauraus";
    expect(actions.getAllDinosSuccess(allDinos)).toEqual({
      type: c.GET_ALL_DINOS_SUCCESS,
      allDinos
    });
  });

  it('getAllDinosFailure should create GET_ALL_DINOS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getAllDinosFailure(error)).toEqual({
      type: c.GET_ALL_DINOS_FAILURE,
      error
    });
  });
});