import React, {useReducer, useEffect} from 'react';
import allDinosReducer from "./../reducers/all-dinos-reducer";
import { getAllDinosFailure, getAllDinosSuccess  } from './../actions/index';
import { Link } from "react-router-dom";
import * as url from './../urls';

const initialState = {
  isLoaded: false,
  allDinos: [],
  error: null
};

export default function Shelter() {
  // const section
  const [state, dispatch] = useReducer(allDinosReducer, initialState);

  // useEffect

  useEffect(() =>{
    fetch(url.ResidentsCall)  
    
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
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
  },[])
  
  const { error, isLoaded, allDinos } = state;

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...herding all dinos...</h1>;
  } else {
    return (
      <>
        <h1>Residents</h1>
        
          <ul>
            {allDinos.map((residents, index) =>
              //<div onClick={() => /*handleDinoDetailClick*/(residents.id)}>
                <li key={index}>
                  <h3>{residents.name}</h3>
                  <Link to={`/details/${residents.residentId}`}>View Detail</Link>
                </li>
              //</div>
            )}
          </ul>
        
        <Link to="/form">Add New Dino</Link>
      </>
    )
  }
  
  
}
