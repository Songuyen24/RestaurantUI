import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: info@restaurantwebsite.com</p>
          <p>Điện thoại: 0123-456-789</p>
          <p>Địa chỉ: 123 Đường Ẩm Thực, TP. HCM</p>
        </div>
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Thông tin</h3>
          <div className="footer-links">
            <Link to="/terms">Điều khoản & Chính sách</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Restaurant Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;