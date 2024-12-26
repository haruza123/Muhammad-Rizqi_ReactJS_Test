import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './src/components/Login';
import Home from './src/components/Home';
import About from './src/components/About';
import Posting from './src/components/Posting';
import ProtectedRoute from './src/routes/ProtectedRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/about" element={<About />} />
                <Route path="/posting" element={<ProtectedRoute isLoggedIn={isLoggedIn} component={Posting} />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
