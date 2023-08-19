import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1 className="he"><span>Awaren</span>ess Of Ed<span>ucat</span>ion</h1>
        <p>Unlock the Power of Education and Change the World</p>
      </header>

      <section className="awareness">
        <div className="awareness-card">
          <i className="fas fa-lightbulb"></i>
          <h2>Education Equality</h2>
          <p>Advocate for equal access to education for all individuals, regardless of their background or circumstances.</p>
        </div>
        <div className="awareness-card">
          <i className="fas fa-globe"></i>
          <h2>Global Education Initiatives</h2>
          <p>Discover and support initiatives that promote education and literacy around the world.</p>
        </div>
        <div className="awareness-card">
          <i className="fas fa-users"></i>
          <h2>Community Engagement</h2>
          <p>Engage with local communities to foster a culture of lifelong learning and educational empowerment.</p>
        </div>
      </section>
      <section className="testimonial">
        <h2><span>WHY</span> EDUCATION</h2>
        <div className="testimonial-card">
         
          <p>
            <ul>
            <li>Education helps people develop critical thinking skills and learn how to solve problems.</li>
            <li>Education helps people acquire knowledge and skills that are essential for getting a job and succeeding in their careers.</li>
            <li>Education helps people become more informed citizens and participate in the democratic process.</li>
            <li>Education can help promote peace and understanding between different cultures.</li>
            <li>Education can help break the cycle of poverty and improve the quality of life for individuals and families</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="testimonial">
        <h3><span>Join</span> the <span>Edu</span>cation <span>Rev</span>olution</h3>
        <div className="testimonial-card">
         
          <p>"Education is the key that unlocks endless possibilities. Let's work together to ensure everyone has that key."</p>
          <h4>Emily Johnson</h4>
        </div>
        <div className="testimonial-card">
          
          <p>"Through education, we can break the cycle of poverty and create a brighter future for generations to come."</p>
          <h4>Michael Davis</h4>
        </div>
      </section>
    </div>
  );
};

export default Home;
