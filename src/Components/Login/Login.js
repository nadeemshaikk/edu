import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <section className="boxx">
    <div className="box1">
     <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="box2">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="link-item">
         <Link className="route-link" to="/">
            <button type="submit">Login</button>
         </Link>
        </div>
        </div>
      </form>
    </div>
    </div>
    </section>
  );
};

export default Login;
