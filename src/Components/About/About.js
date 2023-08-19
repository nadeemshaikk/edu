import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="home1">
      <header className="hero1">
        <div>
        <h1 className="he"><span>My</span>Name Is <span>NA</span>DEEM</h1>
        </div>
        <h2>I'm Front End Deveolper<span>...</span></h2>
      </header>
      <h2><span>EDU</span>CATION</h2>
      <section className="awareness">
        <div className="awareness-card">
          <i className="fas fa-lightbulb"></i>
          <h2>B.Tech</h2>
          <p>Narasaraopeta Engineering College<br></br><br></br>CSE-AI<br></br><br></br><span>C.GPA = 7.8</span></p>
        </div>
        <div className="awareness-card">
          <i className="fas fa-globe"></i>
          <h2>Diploma</h2>
          <p>Govt Polytechinc Krosur<br></br><br></br>Diploma In Civil Engineering<br></br><br></br><span>C.GPA = 7.1</span></p>
        </div>
        <div className="awareness-card">
          <i className="fas fa-users"></i>
          <h2>SSC</h2>
          <p>SKBMMC High School<br></br><br></br>SSC<br></br><br></br><span>C.GPA = 9.3</span></p>
        </div>
      </section>
      <h2><span>SK</span>ILLS</h2>
      <section className="awareness">
        <div className="awareness-card">
          <i className="fas fa-lightbulb"></i>
          <ul>
            <li>HTML</li><br></br><br></br>
            <li>CSS</li><br></br><br></br>
            <li>JavaScript</li><br></br><br></br>
            <li>React.Js</li><br></br><br></br>
            <li>Python</li><br></br><br></br>
            <li>Azure Fundamentals</li>
          </ul>
        </div>
      </section>
      <section className="awareness">
        <div className="awareness-card">
        <h3><span>CER</span>TIFICATIONS</h3>
        <ul>
         <li>Microsoft Certified Azure Fundamentals  AZ-900</li>
         <li>Microsoft Certified Power Platform  PL-900</li>
         <li>Cloud Computing</li>
         <li>AI-ML Virtual Internship</li>
         <li>Salesforce Admin Intern</li>
         </ul>
        </div>
        <div className="awareness-card">
        <h3><span>PRO</span>JECTS</h3>
        <ul>
         <li>Awareness Of Education(React.js)</li>
         <li>Portfolio Website(HTML,CSS)</li>
         <li>Financial Service Cloud(Salesforce)</li>
         </ul>
        </div>
      </section>  
    </div>
  );
};

export default About;
