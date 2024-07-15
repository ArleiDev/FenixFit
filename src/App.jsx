// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import { UserProvider } from './userContext';

import Login from './pages/Login/Login';
import { User } from '@auth0/auth0-react';
function App() {
    return (
      <UserProvider>
        <Router>
           <Routes>
            <Route path="/Alunos" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Home />} />
           </Routes>
        </Router>
        </UserProvider>
    );
}

export default App;
