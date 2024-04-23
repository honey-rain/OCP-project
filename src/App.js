// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import News from './components/News';
import Cabinet from './components/Cabinet';
import LetterPage from './components/LetterPage'
import Footer from './components/Footer';
import './App.css';
// import ProfileMenu from './components/ProfileMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation-bar">
          <p><b>Open community platform</b></p>
          <nav>
            <ul>
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>
                <Link to="/news">Новини</Link>
              </li>
              <li>
                <a href="https://t.me/ocp_ldubgd_bot">Телеграм-бот</a> 
              </li>
              <li>
                <Link to="/cabinet">Кабінет</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <ProfileMenu /> */}

        <Routes> 
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/news" exact element={<News />} />
          <Route path="/cabinet" exact element={<Cabinet />} />
          <Route path="/pages">
            <Route path=":id" element={<LetterPage />} />
          </Route>

        </Routes> 

        <Footer />
      </div>
    </Router>
  );
}

export default App;
