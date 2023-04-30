import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewResidentForm = () => {
  const [formData, setFormData] = useState({
    chipped: false
  });

  const handleNewResidentFormSub = async (e) => {
    e.preventDefault();
    
    const response = await fetch("https://localhost:7220/api/v2/residents", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log("Data:", data);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    console.log("formData:", formData);
  }

  const handleRadio = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value === "true" });
  }
  
  return (
    <>
      <form onSubmit={handleNewResidentFormSub}>
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

NewResidentForm.propTypes = {
  handleNewResidentFormSub: PropTypes.func
}

export default NewResidentForm

