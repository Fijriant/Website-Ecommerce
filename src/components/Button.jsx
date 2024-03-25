import React, { useState } from 'react';
import './App.css'; // File CSS untuk styling

const LightDarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Tambahkan logika untuk mengubah tema ke mode gelap atau mode terang di sini
    };

    return (
        <div className="light-dark-mode-button">
            <button className="btn" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default LightDarkModeButton;
