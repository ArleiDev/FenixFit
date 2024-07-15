// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';
function App() {
    return (
        <Router>
           <Routes>
            <Route path="/Alunos" element={<Login />} />
            <Route path="/" element={<Home />} />
           </Routes>
        </Router>
    );
}

export default App;
