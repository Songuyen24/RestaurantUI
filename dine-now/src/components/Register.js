import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  // State để lưu giá trị của các trường trong form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  // Xử lý thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý khi nhấn nút gửi OTP
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic gửi OTP (có thể gọi API ở đây)
    console.log('Form submitted:', formData);
    alert('OTP đã được gửi đến số điện thoại của bạn!');
  };

  return (
    <div className="register-container">
      <h2>Đăng ký</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Họ tên</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nhập họ tên"
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Gửi OTP
        </button>
      </form>
    </div>
  );
};

export default Register;