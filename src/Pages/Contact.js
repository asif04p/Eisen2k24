import React from 'react';

function Contact() {
  return (
  
    <>
    <div className="events-container">
      {/* Section 1: Workshop Topics */}
      <div className="section">
        <h1>Website Developers
        </h1>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/AsifImage.jpg'}
            alt="Workshop 1"
          />
          <div className="card-info">
            <h2>Asif Pathan</h2>
            <p> ECE, BITS Vizag</p>
            <p>Contact: 
              <br/>
            asif6302104@gmail.com
              <br/>
              </p>          
          </div>
        </div>
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + '/VivekDevarakonda.jpg'}
            alt="Workshop 2"
          />
          <div className="card-info">
            <h2>Vivek Devarakonda</h2>
            <p> MET, JNTUGV</p>       
            <p> Contact: 
              <br/> 
              vivekdevarakonda123@gmail.com
              <br/> 
              Ph.no: +91- 9441008408 
            </p>      
          </div>
        </div>
        <br/>
        <img src={process.env.PUBLIC_URL + '/dept-1.jpg'} alt="department-students" className="dept-image"/>
        <h2> Thank you each and everyone student of the Metallurgy Department
          <br/> 
          <br/>
          Thanks once again for Visiting Us!!
        </h2>
      </div>
      </div> 
      
    </>
  )
}

export default Contact