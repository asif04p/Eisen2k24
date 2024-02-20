import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Events.css'; 

function Events() {
  return (
    <div className="events-container">
      {/* Section 1: Workshop Topics */}
      <div className="section">
        <h1>Workshop Topics</h1>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/3DPrinting.jpg'}
            alt="Workshop 1"
          />
          <div className="card-info">
            <h2>3D Printing (or) Additive Manufacturing</h2>
            <p>3D printing or additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model. It can be done in a variety of processes in which material is deposited, joined or solidified under computer control, with the material being added together, typically layer by layer.</p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScaUbWiRmG1zmevJa-euGX6BzXl8r-CPoSXGlhQhi_a8D3WLg/viewform?usp=sf_link" target="_blank">
            <button className="registration-button">Register</button>
          </Link>
          </div>
        </div>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/CyberSecurity.png'}
            alt="Workshop 2"
          />
          <div className="card-info">
            <h2>Cyber Security</h2>
            <p> Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScfQYklbFqnsypWK70J-5kufBQhDdklxXiXQ8LNHodsNigODA/viewform?usp=sf_link" target="_blank">
            <button className="registration-button">Register</button>
          </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Technical Events */}
      <div className="section">
        <h1>Technical Events</h1>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/PaperPresentation.png'}
            alt="Technical Event 1"
          />
          <div className="card-info">
            <h2>Paper Presentation</h2>
            <p>A paper presentation is a type of academic presentation where you orally present the findings of a research paper to an audience. It's essentially a way to summarize your research and its key takeaways in a concise and engaging way, using visuals and spoken language to complement the written paper.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc8MiHUBJOrL-fq_YgpBjn-NnBl2038xQM_MlOqnDocP3_HmQ/viewform?usp=sf_link" target="_blank">
            <button className="registration-button">Register</button>
          </Link>
          </div>
        </div>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/metallography.png'}
            alt="Technical Event 2"
          />
          <div className="card-info">
            <h2>Metallography Contest</h2>
            <p>Metallography is the study of the microstructure of metals and alloys. It involves the examination of a metal or alloy's microstructure using various techniques like optical microscopy, electron microscopy, and other analytical methods. Metallography helps in understanding the properties and behavior of metals, especially in relation to their mechanical, thermal, and processing characteristics.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScaSa9ucytPcoU6srw7fOlCrJ3onHvOExDWqHfnNzilAA7-ww/viewform?usp=sf_link" target="_blank">
            <button className="registration-button">Register</button>
          </Link>
          </div>
        </div>
        
        {/* New Card in Technical Events */}
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/PosterPresentation.png'}
            alt="New Technical Event"
          />
          <div className="card-info">
            <h2>Poster Presentation</h2>
            <p>A poster session or poster presentation is the presentation of research by an individual or group for a class or academic/professional conference. At a conference, the work is usually peer-reviewed. A room is reserved for poster sessions where researchers accompany a poster illustrating their methods and outcomes.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScL1UYrq-rGxe5jmifEc0I6dILSFdRqHkTkB9gOO5G28zoeuQ/viewform?usp=sf_link" target="_blank">
            <button className="registration-button">Register</button>
          </Link>
          </div>
        </div>
      </div>

      {/* Section 3: Talks by Eminent Persons */}
      <div className="section">
        <h1>Talks by Eminent Persons</h1>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/persontwo.jpg'}
            alt="Talk 1"
          />
          <div className="card-info">
            <h2>3D Printing</h2>
            <p> <b> Powders for additive manufacturing</b> <br/>
            <br/>
            Dr Kishore nath, Scientist G or H. From Missiles cluster, Hyderabad</p> 
          </div>
        </div>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/personone.png'}
            alt="Talk 2"
          />
          <div className="card-info">
            <h2>Steels in Automotive Industries.</h2>
            <p>
Dr. Suryanarayana Reddy
Zonal Head PAG - Product Technology Group
Tata Steel Limited </p>
          </div>
        </div>
        </div>
      </div>
);
}

export default Events;
