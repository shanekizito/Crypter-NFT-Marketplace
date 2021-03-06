import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
