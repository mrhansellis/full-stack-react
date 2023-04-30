import React from 'react';
import Shelter from './Shelter.js';
import './../App.css';
import NewResidentForm from './NewResidentForm.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shelter />} />
        <Route path="/form" element={<NewResidentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
