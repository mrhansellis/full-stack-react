import React from 'react';
import { Link } from 'react-router-dom';

export default function AddSuccess() {
  return(
    <>
      <h1>Dino was successfully added!</h1>
      <button><Link to="/">Home</Link></button> 
    </>
  )
}