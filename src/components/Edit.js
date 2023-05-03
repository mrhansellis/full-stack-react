import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import * as url from './../urls';

const EditResidentForm = () => {
  const [formData, setFormData] = useState({
    chipped: false
  });
  
  const { residentId } = useParams();
  const navigate = useNavigate();
  
  const handleEditResidentForm = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${url.ResidentPostCall}/${residentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        residentId: Number(residentId)
      })
      
    });
    console.log(formData);
    navigate('/');
    return response;
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleRadio = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value === "true" });
  }

  return (
    <>
      <form onSubmit={handleEditResidentForm}>
        
        <label htmlFor="name">Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name' 
          onChange={handleChange} />
        <br/>
        <label htmlFor="species">Species: </label>
        <input
          type='text'
          name='species'
          placeholder='Species' 
          onChange={handleChange} />
        <br/>
        <label htmlFor="sex">Sex, yes pls: </label>
        <input
          type='text'
          name='sex'
          placeholder='Sex' 
          onChange={handleChange} />
        <br/>
        <div id = 'wrapper'>
          <label>Chipped: </label>
          
          <label htmlFor="chipped">True</label>
          <input 
            type='radio'
            name='chipped'
            value='true'
            checked={formData.chipped}
            onChange={handleRadio} />
          <label htmlFor="chipped">False</label>
          <input
            type='radio'
            name='chipped'
            value='false'
            checked={!formData.chipped}
            onChange={handleRadio} />
        </div>
        <br/>
        <label>Notes: </label>
        <textarea
          name='notes'
          placeholder='Notes' 
          onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <Link to="/">Return Home</Link>
    </>
  )
}

EditResidentForm.protoTypes = {
  handleEditResidentForm: PropTypes.func
}

export default EditResidentForm;