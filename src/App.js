// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Preloader from './Preloader';  // Import the Preloader component
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  // Simulating content loading with a delay (you can replace this with actual loading logic)
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 5000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={`App ${contentLoaded ? 'content-loaded' : ''}`}>
      <Router>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
