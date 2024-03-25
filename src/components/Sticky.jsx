import React, { useEffect, useState } from 'react';

const StickyButtons = () => {
    const [showSticky, setShowSticky] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) {
                if (window.scrollY > 100 && localStorage.getItem('stickyClosed') !== 'true') {
                    setShowSticky(true);
                } else {
                    setShowSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => {
        localStorage.setItem('stickyClosed', 'true');
        setShowSticky(false);
    };

    const redirectToGooglePlay = () => {
        window.location.href = 'https://play.google.com/';
    };

    const redirectToAppStore = () => {
        window.location.href = 'https://www.apple.com/id/app-store/';
    };

    return (
        <>
            {showSticky && (
                <div className="sticky-buttons bg-dark text-light p-3" style={{ position: 'sticky', top: '0', zIndex: '999' }}>
                    <p className="navbar-brand fw-bold fs-4" to="/">Download Aplikasi Kami</p>
                    <button className="btn btn-outline-secondary me-2" onClick={redirectToGooglePlay}>Google Play Store</button>
                    <button className="btn btn-outline-secondary me-2" onClick={redirectToAppStore}>Apple App Store</button>
                    <button className="btn btn-outline-secondary me-2" onClick={handleClose}>Close</button>
                </div>
            )}
        </>
    );
};

export default StickyButtons;
