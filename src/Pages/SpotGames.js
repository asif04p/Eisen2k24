import React from 'react';
import "../Styles/SpotGames.css";
import { Link } from 'react-router-dom';


function SpotGames() {
  return (
    <>
    <h1 className="main-heading">Spot Games</h1>
    <div className="outer-div"> 
    <div className="card">
    <img
      src="https://m.media-amazon.com/images/M/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Free Fire</h2>
      <p> Entry Fees: 200/- Per Squad</p>
      <p> <b>Prize Money:</b>
        <br/>
        Win: 1000/-
        <br/>
        Per Kill: 15/- 
        </p> 
        <br/>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src="https://image.api.playstation.com/vulcan/ap/rnd/202312/1402/44b6bfcd7956199bd50eb156219292e80b76a108d6ac4c6e.jpg"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Pubg</h2>
      <p> Entry Fees: 250/- Per Squad</p>
      <p> <b>Prize Money:</b>
        <br/>
        Win: 1100/-
        <br/>
        Per Kill: 15/- 
        </p>
        <br/>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src={process.env.PUBLIC_URL + '/makemefamous.jpg'}
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Make Me Famous</h2>
      <p> Entry Fees: 50/- </p>
      <p> Prize Money: 800/- </p><br/>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src="https://m.media-amazon.com/images/I/91DJcqsV6wL._AC_UF1000,1000_QL80_.jpg"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Treasure Hunt</h2>
      <p> Entry Fees: 200/- Per Squad</p>
      <p> Prize Money:
        <br/>
        Win: 1000/-
        </p>
        <br/>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src="https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Quiz</h2>
      <p> Entry Fees: 40/-</p> 
      <p> Prize: Gift </p>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src="https://m.media-amazon.com/images/I/51pf3y8-IpL._AC_UF1000,1000_QL80_.jpg"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Rubics Cube</h2>
      <p> Entry Fees: 40/-</p>
      <p> Prize: Gift</p>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  <div className="card">
    <img
      src="https://img.freepik.com/free-vector/casino-games-design_24908-60957.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais"
      alt="Workshop 1"
    />
    <div className="card-info">
      <h2>Lottery</h2>
      <p> Entry Fees: 30/-</p>
      <p> Prize: Free Trip to Vizag (or) Araku</p>
    <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
      <button className="registration-button">Register</button>
    </Link>
    </div>
  </div>
  </div>

  </>
  )
}

export default SpotGames