// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import Container from './components/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CardProject/>} />
          <Route path="/task" element={<Container/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
