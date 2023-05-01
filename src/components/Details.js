import React, { useEffect, useReducer } from 'react';
import allDinosReducer from '../reducers/all-dinos-reducer';
import { useParams } from 'react-router';
import { getAllDinosFailure, getAllDinosSuccess } from '../actions';

const initialState = {
  isLoaded: false,
  allDinos: [],
  error: null
};

export default function DinoDetails() {
  const [state, dispatch] = useReducer(allDinosReducer, initialState);
  
  const { residentId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7220/api/v2/residents/${residentId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          return res.json()
        }
      })
      .then((jsonifiedResponse) => {
        const action = getAllDinosSuccess(jsonifiedResponse)
        dispatch(action);
      })
      .catch((error) => {
        const action = getAllDinosFailure(error)
        dispatch(action);
      });
  }, [residentId])

  const { error, isLoaded, allDinos } = state;

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Rounding up your dino...</h1>
  } else {
    return (
      <>
        <h1>Details for {allDinos.name}</h1>
        <ul>
          <li>Species: {allDinos.species}</li>
          <li>Gender: {allDinos.sex}</li>
          <li>Chipped: {String(allDinos.chipped)}</li>
          <li>Date arrived: {allDinos.admissionDate.slice(0, 10)}</li>
          <p><strong>Notes:</strong> {allDinos.notes}</p>
        </ul>
      </>
    )
  }
  
}