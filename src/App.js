import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Posting from './components/Posting';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className="content">
                <Routes>
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posting" element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Posting} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <footer>
                <p>&copy; 2024 React Programming Test. All rights reserved.</p>
            </footer>
        </Router>
    );
}

export default App;
