// root.js
import React, { useState, useEffect } from 'react';
import backgroundImageDesktop from '../Assets/home-screen.jpg'; // Desktop image
import backgroundImageMobile from '../Assets/mobile-responsive-image.jpg'; // Mobile image
import '../Styles/root.css'; // Import the CSS file
import {Link} from 'react-router-dom';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-03-06T00:00:00'); // Set your target date and time

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImage = window.innerWidth < 768 ? backgroundImageMobile : backgroundImageDesktop;

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 style={{ marginBottom: '20px' }}>Countdown to the Biggest Event!!</h1>
      <div>
        <div className="timer-box">
          <div className="timer-text">{countdown.days}</div>
          <div className="timer-label">Days</div>
        </div>
        <div className="timer-box">
          <div className="timer-text">{countdown.hours}</div>
          <div className="timer-label">Hours</div>
        </div>
        <div className="timer-box">
          <div className="timer-text">{countdown.minutes}</div>
          <div className="timer-label">Minutes</div>
        </div>
        <div className="timer-box">
          <div className="timer-text">{countdown.seconds}</div>
          <div className="timer-label">Seconds</div>
        </div>
      </div>
      <br/>
      <h2> For more information, you can visit our Home page. Click on the below button!</h2>
      <Link to="/home">  
        <button className="button-home">Home</button>
        </Link>
    </div>
  );
};

export default CountdownTimer;
