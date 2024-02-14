import React from 'react';
import "../Styles/Sponsors.css";


function Sponsors() {
  return (
    <>
    <h1 className="main-heading"> Sponsors </h1>
    <div className="title-sponsor-div"> 
    <h2 className="title-sponsor-heading"> Title Sponsors</h2>
     <p className="title-sponsor-text"> Sponsors details will be displayed on Posters, Banners, etc. 
      <br/> Title sponsor margin: Rs 30000/- or above 
    </p>
    </div>

    <div className="platinum-sponsor-div"> 
      <h2 className="platinum-sponsor-heading">Platinum Sponsors</h2>
      <p className="title-sponsor-text"> Announcement of sponsors in the event, 
      <br/> Platinum sponsor margin: Rs 20000/- or above 
    </p>
    </div>

    <div className="golden-sponsor-div"> 
      <h2 className="golden-sponsor-heading">Golden Sponsors</h2>
      <p className="title-sponsor-text"> Logo with content in Posters and Presentations 
      <br/> Golden sponsor margin: Rs 15000/- or above 
    </p>
    </div>


    <div className="silver-sponsor-div"> 
      <h2 className="silver-sponsor-heading">Silver Sponsors</h2>
      <p className="title-sponsor-text"> Promotions of sponsors in Social Media 
      <br/> Silver sponsor margin: Rs 10000/- or above 
    </p>
    </div>

    </>
  )
}

export default Sponsors