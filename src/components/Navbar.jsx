import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }
        setIsDarkMode(!isDarkMode);
    };
    
    

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-${isDarkMode ? 'dark' : 'dark'} py-3 shadow-sm fixed-top`}>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Vogue Venture</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/products">Produts</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            {/* Tombol Light/Dark mode ditempatkan di sebelah kanan navbar */}
                            <button className="btn btn-outline-secondary ms-2 me-2" onClick={toggleDarkMode}>
                                {isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                            <NavLink to="/login" className="btn btn-outline-secondary">
                                <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-secondary ms-2">
                                <i className="fa fa-user-plus me-2"></i>Register</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-secondary ms-2">
                                <i className="fa fa-shopping-cart me-2"></i>Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
