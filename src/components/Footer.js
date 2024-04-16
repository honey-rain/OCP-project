import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <div>
            Адреса: вулиця Клепарівська, 35, Львів, Львівська область, 79000 
          </div>
          <div>
            Наша електронна пошта: <a href="mailto:ldubgd.gov.press@ldubgd.edu.ua">ldubgd.gov.press@ldubgd.edu.ua</a>
          </div>
          <div>
            Пошта Університету: <a href="mailto:ldubzh.lviv@dsns.gov.ua">ldubzh.lviv@dsns.gov.ua</a>
          </div>
          <div>
            Пошта Ректора Університету: <a href="mailto:rektorldubgd@ldubgd.edu.ua">rektorldubgd@ldubgd.edu.ua</a>
          </div>
        </div>
        <div className="footer-column">
          <div>
            Контактні телефони: <a href="tel:0322330088">0322 330 088</a>
          </div>
          <div style={{ display: 'flex' }}>
            <a href="https://www.instagram.com/official_page_ldubgd?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==">
              <img src="/img/Instagram.png" alt="Instagram" style={{ width: '15%', margin: '0 10px' }} />
            </a>
            <a href="https://www.facebook.com/ldubgd">
              <img src="/img/Facebook.png" alt="Facebook" style={{ width: '15%', margin: '0 10px' }} />
            </a>
            <a href="https://ldubgd.edu.ua/">
              <img src="/img/Google.png" alt="Google" style={{ width: '15%', margin: '0 10px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
