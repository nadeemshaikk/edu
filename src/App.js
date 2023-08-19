import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="Courses" element={<Courses />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
