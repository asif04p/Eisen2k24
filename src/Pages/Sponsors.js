import React from 'react';
import "../Styles/Sponsors.css";
import TitleSponsor from '../Assets/tata-steels.png'


function Sponsors() {
  return (
    <>
    <h1 className="main-heading"> Sponsors </h1>
    
    <h2 className="title-sponsor-heading">Title Sponsors</h2>
    <div className="title-sponsor-div">
      <img src={TitleSponsor} alt="Title-Sponsor"/>
      <h2> Tata Steel </h2>
    </div>

    <br/>
  
    </>
  )
}

export default Sponsors