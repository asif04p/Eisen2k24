import React from 'react';
import Jntugvsmalllogo from '../Assets/jntugv-logo.jpg';
import JntugvLogo from '../Assets/about-image.jpg';
// import PersonOne from '../Assets/personone.png';
// import PersonTwo from '../Assets/persontwo.png';
// import PersonThree from '../Assets/personthree.png';
// import PersonFour from '../Assets/persronfour.png';
// import PersonFive from '../Assets/personfive.png';
// import PersonSix from '../Assets/personsix.png';
// import PersonSeven from '../Assets/personseven.png';
// import PersonEight from '../Assets/personeight.png';
// import PersonNine from '../Assets/personnine.png';
// import PersonTen from '../Assets/personten.png'; 
import BrochureFile from '../Assets/Brochure.pdf'; // Update with the correct relative path
import '../Styles/About.css';


function About() {
  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = BrochureFile;
    link.download = 'Eisen_Brochure.pdf'; // Change the name as needed
    link.click();
  };

  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${JntugvLogo})` }}>
      </div>
      <div className="aboutBottom">
        <h1> About Us </h1>
        <p>
          Eisen is an annual technical event hosted by the{' '}
          <b> Department of Metallurgical Engineering at JNTU-GV </b> and is commonly known
          as the "Material Festival". This event is a platform for students to showcase
          their technical prowess and creativity through various competitions, workshops,
          and lectures, as well as to celebrate our culture and diversity through cultural events.
          This year, we are proud to announce the inclusion of a national symposium as part of Eisen.
          The symposium will bring together several eminent speakers from IIT's, industries,
          government, and organizations.
        </p>
        <br/>
        <button onClick={handleDownloadBrochure}>Download Brochure</button>
        <br />
        {/* New section about JNTUGV University */}
        <div className="newSection">
          <h2>JNTUGV University</h2>
          <img src={Jntugvsmalllogo} alt="University Logo" className='jntugv-image' />
          <p>
            JNTU College of Engineering, Vizianagaram was established in the year 2007 as a
            constituent College of JNTU Hyderabad. JNTU Hyderabad was trifurcated into three
            Universities by the Andhra Pradesh Act No. 30 of 2008 and since 24th August 2008, the
            College has become the constituent college of JNTU Kakinada. Vide University Act No.22 of 2021,
            JNTU Kakinada is bifurcated and Jawaharlal Nehru Technological University Gurajada, Vizianagaram
            come into existence as a separate University vide G.O.Ms.No.3, dated: 12-01-2022.
            The university is spread across six districts i.e Vizianagaram, Visakhapatnam, Srikakulam,
            Parvathipuram Manyam, Alluri Sitharama Raju, and Anakapalli. There are 2 constituent colleges
            and 37 affiliated colleges under its jurisdiction, catering education in different Engineering,
            Pharmacy, and Management departments.
          </p>
        </div>
        <div className="aboutDepartment">
          <h2>Department of Metallurgy Engineering</h2>
          <p>Materials development has always 
              been the backbone of overall growth of 
              society. in view of heavy demand for 
              the metallurgists from various 
              metallurgical indst.,RINL,Jindal 
              strips,Ferro Alloys 
              corporation,Hindhustan zinc,Tata steel 
              ltd,synergies doo ray automotives 
              limited etc., In 2011 12 Jan JNTU has 
              introduced the dept. of METALLURGICAL 
              ENGINEERING
              It is developing progressivelyy with 
              respect to academics, and 
              infracture.The department have 
              sophisticated equipment and factulty 
              members are actively involved in the 
              research.
              The students of the Department being 
              have an active participation in various 
              professional activities with their keen 
              interest ; The department has started a 
              student chapter of <b> INDIAN INSTITUTE OF 
              METALS (IIM)</b></p>  
        </div>
        <br/>
        <br/>
        
        {/* <div className="personsInvolved">
          <h2 className="PersonsInvolvedh2">Persons Who Involved in Making It Work</h2>
          
          <div className="personSection">
            
            <div className="personCard">
            <img src={PersonOne} alt="Person 1" />
              <h3>Person 1</h3>
              <p>Role: Engineer</p>
            </div>
            
            <div className="personCard">
            <img src={PersonTwo} alt="Person 2" />
              <h3>Person 2</h3>
              <p>Role: Designer</p>
            </div>
           
            <div className="personCard">
            <img src={PersonThree} alt="Person 3" />
              <h3>Person 3</h3>
              <p>Role: Project Manager</p>
            </div>
            
            <div className="personCard">
            <img src={PersonThree} alt="Person 3" />
              <h3>Person 3</h3>
              <p>Role: Project Manager</p>
            </div>
          </div>
         
          <div className="personSection">
           
            <div className="personCard">
            <img src={PersonFour} alt="Person 4" />
              <h3>Person 4</h3>
              <p>Role: Developer</p>
            </div>
            
            <div className="personCard">
            <img src={PersonFive} alt="Person 5" />
              <h3>Person 5</h3>
              <p>Role: Researcher</p>
            </div>
            
            <div className="personCard">
            <img src={PersonSix} alt="Person 6" />
              <h3>Person 6</h3>
              <p>Role: Analyst</p>
            </div>
            
            <div className="personCard">
            <img src={PersonSix} alt="Person 6" />
              <h3>Person 6</h3>
              <p>Role: Analyst</p>
            </div>
          </div>
         
          <div className="personSection">
            
            <div className="personCard">
            <img src={PersonSeven} alt="Person 7" />
              <h3>Person 7</h3>
              <p>Role: Tester</p>
            </div>
            
            <div className="personCard">
            <img src={PersonEight} alt="Person 8" />
              <h3>Person 8</h3>
              <p>Role: Coordinator</p>
            </div>
           
            <div className="personCard">
            <img src={PersonNine} alt="Person 9" />
              <h3>Person 9</h3>
              <p>Role: Support Staff</p>
            </div>
            <div className="personCard">
            <img src={PersonTen} alt="Person 10" />
              <h3>Person 10</h3>
              <p>Role: Coordinator</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
