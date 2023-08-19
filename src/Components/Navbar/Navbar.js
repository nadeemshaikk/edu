import { Link } from "react-router-dom";
import './Navbar.css'

const Header = () => (

  <nav className="header-container">
  <div className="logo-and-title-container">
    <img
      alt="logo"
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaWR7l0bukP2cNh9S0_7l2L0aj60QLNdM4Q&usqp=CAU"
    />
  </div>

  <ul className="nav-items-list">
  <li className="link-item">
      <Link className="route-link" to="/login">
        Login
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/">
        Home
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/Courses">
      Courses
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/about">
      My_Resume
      </Link>
    </li>
    
  </ul>
</nav>
  
)

export default Header