import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/main.scss'; 
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes >
      <Route path = "/" element = { <HomePage/> }/> 
    </Routes >
  );
}

export default App;
