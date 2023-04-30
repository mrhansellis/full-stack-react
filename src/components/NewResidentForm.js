import React from 'react'
import PropTypes from "prop-types";

const NewResidentForm = (props) => {
  function handleNewResidentFormSub(e) {
    e.preventDefault();
    // props.onNewResidentCreation ({
    //   name: e.target.name.value,
    //   species: e.target.name.value,
    //   sex: e.target.sex.value,
    //   chipped: e.target.chipped.value,
    //   notes: e.target.notes.value
    // })
  }
  
  return (
    <>
      <form onSubmit={handleNewResidentFormSub}>
        <label htmlFor="name">Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <br/>
        <label htmlFor="species">Species: </label>
        <input
          type='text'
          name='species'
          placeholder='Species' />
        <br/>
        <label htmlFor="sex">Sex, yes pls: </label>
        <input
          type='text'
          name='sex'
          placeholder='Sex' />
        <br/>
        
        <div id = 'wrapper'>
          <label>Chipped: </label>
          
          <label htmlFor="chipped">True</label>
          <input 
            type='radio'
            name='chipped'
            value='true' />
          <label htmlFor="chipped">False</label>
          <input
            type='radio'
            name='chipped'
            value='false' />
        </div>
        <br/>
        <label>Notes: </label>
        <textarea
          name='notes'
          placeholder='Notes' />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

NewResidentForm.propTypes = {
  handleNewResidentFormSub: PropTypes.func
}

export default NewResidentForm

