// Footer.js
import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footer.css";

function Footer() {
  
  const openInstagram = () => {
    window.open('https://www.instagram.com/eisen24_/', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:eisen2k24@gmail.com';
  };

  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={openInstagram} />
        <EmailIcon onClick={sendEmail} />
      </div>
      <p>&copy; All rights reserved to EISEN 2K24.</p>
    </div>
  );
}

export default Footer;
