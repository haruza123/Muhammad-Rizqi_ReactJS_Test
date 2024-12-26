import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup menu

    // Fungsi untuk menutup navbar
    const handleLinkClick = () => {
        setIsOpen(false); // Tutup menu saat link ditekan
    };

    return (
        <header className="navbar">
            <nav>
                <div className="navbar-header">
                    <h1 className="navbar-logo">MyApp</h1>
                    <button
                        className="hamburger-menu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Hamburger icon */}
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleLinkClick}>About</Link>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <Link to="/posting" onClick={handleLinkClick}>Posting</Link>
                        </li>
                    )}
                    {!isLoggedIn ? (
                        <li>
                            <Link to="/login" onClick={handleLinkClick}>Login</Link>
                        </li>
                    ) : (
                        <li>
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    handleLinkClick(); 
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
