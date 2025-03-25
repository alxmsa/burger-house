/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './style/App.css'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </Router>
  </React.StrictMode>
)
