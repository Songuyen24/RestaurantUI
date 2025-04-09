import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Danh sách nhà hàng nổi bật</h1>
      <div className="auth-buttons">
        <Link to="/register">
          <button className="auth-btn">Đăng ký</button>
        </Link>
        <Link to="/login">
          <button className="auth-btn">Đăng nhập</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;