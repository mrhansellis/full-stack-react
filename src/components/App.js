import React from 'react';
import Shelter from './Shelter.js';
import Details from './Details.js';
import Added from './Added.js';
import Edit from './Edit.js';
import './../App.css';
import NewResidentForm from './NewResidentForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shelter />} />
        <Route path="/form" element={<NewResidentForm />} />
        <Route path="/details/:residentId" element={<Details />} />
        <Route path="/addsuccess" element={<Added />} />
        <Route path="/editform/:residentId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
