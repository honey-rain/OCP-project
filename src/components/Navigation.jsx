import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Navigation = () => (


<div className="navigation-bar">
          <p id='ldubgd'>Львівський державний університет безпеки життєдіяльності</p>
          <p><img src={logo} alt="Емблема" className="logo1" /><b>Open community platform</b><img src={logo} alt="Емблема" className="logo2" /></p>
          <nav>
            <ul>
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>
                <Link to="/news">Про університет</Link>
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
)

export default Navigation