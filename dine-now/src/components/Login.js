import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  // State để lưu giá trị của các trường trong form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Xử lý thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý khi nhấn nút đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic đăng nhập (có thể gọi API ở đây)
    console.log('Login submitted:', formData);
    alert('Đăng nhập thành công!');
  };

  // Xử lý đăng nhập bằng Google (giả lập)
  const handleGoogleLogin = () => {
    // Logic đăng nhập bằng Google (có thể tích hợp Google OAuth ở đây)
    console.log('Đăng nhập bằng Google');
    alert('Đăng nhập bằng Google thành công!');
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Đăng nhập
        </button>
        <button type="button" className="google-login-btn" onClick={handleGoogleLogin}>
          Đăng nhập bằng Google
        </button>
        <div className="forgot-password">
          <Link to="/forgot-password">Quên mật khẩu?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;