import React, { useEffect } from 'react';
import gsap from 'gsap';
import "../Preloaders/Preloader.css";

const Preloader = () => {
  useEffect(() => {
    // Text to be typed
    const textToType = "E I S E N' 2 4";

    // Create a timeline
    const tl = gsap.timeline({ repeat: 0, onComplete: completeAnimation });

    // Split the text into characters
    const chars = textToType.split("");

    // Append each character to the timeline with a typing effect
    chars.forEach((char, index) => {
      tl.to("#preloader", { textContent: textToType.substring(0, index + 1), duration: 0.5, ease: "power1.inOut" });
    });

    function completeAnimation() {
      // You can perform any action after the typing animation completes
      console.log("Preloader animation complete!");
      // For example, you can navigate to the main page using react-router or perform other actions
    }
  }, []); // Run only once when the component mounts

  return (
    <div id="preloader" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
      {/* Initial text content, this will be updated by GSAP */}
      Loading...
    </div>
  );
};

export default Preloader;
