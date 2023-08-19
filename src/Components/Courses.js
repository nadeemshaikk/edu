import React from 'react';
import './course.css';
const Courses = () => {
  return (
    <div className="course">
      <h1><span>Cou</span>rses</h1>
      <section className="awareness1">

          <div className='card'>
            <div className='imgbox'>
              <img src="10th.jpg" alt="10th"></img>
            </div>
            <div className="content">
            <h2>10th SSC</h2>
            <p>students have 3 options: intermediate college, diploma, or ITI. Intermediate colleges offer general
             education diploma, diploma courses offer specialized education diploma, and ITI courses offer specialized trade training.</p>
            </div>
          </div>
          <div className='card'>
            <div className='imgbox'>
              <img src="12th.jpg" alt="12th"></img>
            </div>
            <div className="content">
            <h2>Intermediate </h2>
            <p>Inter courses are offered in science, commerce, and humanities. Popular choices 
            include MPC, BiPC, CEC, and HEC. The best course for you depends on your interests and goals.</p>
            </div>
          </div>
          <div className='card'>
            <div className='imgbox'>
              <img src="sbtet.png" alt="degree"></img>
            </div>
            <div className="content">
            <h2>Diploma </h2>
            <p>Diploma courses are offered in a variety of fields and can help you gain the skills and knowledge you need to enter 
            the workforce or pursue further studies. The best course for you depends on your interests and goals</p>
            </div>
          </div>
    </section><br></br>
    <section className="awareness1">

          <div className='card'>
            <div className='imgbox'>
              <img src="btech.jpg" alt="b.tech"></img>
            </div>
            <div className="content">
            <h2>B.Tech</h2>
            <p>.Tech. is a 4-year undergraduate engineering degree program that prepares students for careers in engineering.
             It is a highly respected and valued degree that can lead to high-paying jobs.</p>
            </div>
          </div>
          <div className='card'>
            <div className='imgbox'>
              <img src="pharma.jpg" alt="pharma"></img>
            </div>
            <div className="content">
            <h2>pharmacy </h2>
            <p>Inter courses are offered in science, commerce, and humanities. Popular choices 
            include MPC, BiPC, CEC, and HEC. The best course for you depends on your interests and goals.</p>
            </div>
          </div>
          <div className='card'>
            <div className='imgbox'>
              <img src="degree.jpg" alt="degree"></img>
            </div>
            <div className="content">
            <h2>Degree</h2>
            <p>A degree is an academic award granted to students who have successfully completed a course of study
             at a college or university. Degrees can be valuable assets for students who are looking for a good job 
             or want to develop their skills and knowledge in a particular field.</p>
            </div>
          </div>
    </section>
    
    </div>
  );
};

export default Courses;
