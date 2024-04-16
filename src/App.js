// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import News from './components/News';
import TelegramBot from './components/TelegramBot';
import Cabinet from './components/Cabinet';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation-bar">
          <p>Open community platform</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>
                <Link to="/news">Новини</Link>
              </li>
              <li>
                <a href="https://t.me/ocp_ldubgd_bot">Телеграм-бот</a> {/* Посилання, що ви згадували */}
              </li>
              <li>
                <Link to="/cabinet">Кабінет</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes> {/* Замінено на Routes */}
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/cabinet" element={<Cabinet />} />
          
          {/* Додайте інші роутери для потрібних компонентів */}
        </Routes> {/* Замінено на Routes */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
