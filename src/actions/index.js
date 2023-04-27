import * as c from './ActionTypes';

export const getAllDinosSuccess = (allDinos) => ({
  type: c.GET_ALL_DINOS_SUCCESS,
  allDinos
});

export const getAllDinosFailure = (error) => ({
  type: c.GET_ALL_DINOS_FAILURE,
  error
});