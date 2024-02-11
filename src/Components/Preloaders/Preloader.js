// Preloader.js
import React, { useEffect, useState } from 'react';
import '../Preloaders/Preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 5000); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="logo-container">
        <img src="https://eisen2k24.online/static/media/website-logo.db480474fee8e4a75511.jpg" alt="Logo" />
      </div>
      <div className="text-container">
        <p>EISEN'24</p>
      </div>
    </div>
  );
};

export default Preloader;
