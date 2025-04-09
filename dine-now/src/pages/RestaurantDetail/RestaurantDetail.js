import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RestaurantDetail.css';
import restaurant1 from '../images/restaurant1.jpg';
import restaurant2 from '../images/restaurant2.jpg';
import restaurant3 from '../images/restaurant3.jpg';
import menuImage from '../images/menu.jpg';

const RestaurantDetail = () => {
  const { id } = useParams(); // Lấy id từ URL

  // Dữ liệu giả lập
  const restaurants = [
    {
      id: 1,
      name: 'Nhà hàng A',
      address: '123 Đường Ẩm Thực, TP. HCM',
      image: restaurant1,
      menu: menuImage,
      reviews: [
        { user: 'Nguyễn Văn A', comment: 'Đồ ăn rất ngon, không gian thoải mái!', rating: 5 },
        { user: 'Trần Thị B', comment: 'Phục vụ tốt nhưng giá hơi cao.', rating: 4 },
      ],
    },
    {
      id: 2,
      name: 'Nhà hàng B',
      address: '456 Đường Ẩm Thực, TP. HCM',
      image: restaurant2,
      menu: menuImage,
      reviews: [
        { user: 'Lê Văn C', comment: 'Không gian sang trọng, rất thích!', rating: 5 },
      ],
    },
    {
      id: 3,
      name: 'Nhà hàng C',
      address: '789 Đường Ẩm Thực, TP. HCM',
      image: restaurant3,
      menu: menuImage,
      reviews: [
        { user: 'Phạm Thị D', comment: 'Ẩm thực độc đáo, đáng thử!', rating: 4 },
      ],
    },
  ];

  // Tìm nhà hàng theo id
  const restaurant = restaurants.find((r) => r.id === parseInt(id)) || {};

  return (
    <div className="restaurant-detail">
      {/* Thông tin nhà hàng */}
      <div className="restaurant-info">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
        <div className="restaurant-details">
          <h1>{restaurant.name}</h1>
          <p className="address">Địa chỉ: {restaurant.address}</p>
          <button className="book-btn">Đặt bàn ngay</button>
        </div>
      </div>

      {/* Thực đơn */}
      <div className="menu-section">
        <h2>Thực đơn</h2>
        <img src={restaurant.menu} alt="Thực đơn" className="menu-image" />
      </div>

      {/* Đánh giá */}
      <div className="reviews-section">
        <h2>Đánh giá</h2>
        {restaurant.reviews && restaurant.reviews.length > 0 ? (
          restaurant.reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="user">{review.user}</p>
              <p className="comment">{review.comment}</p>
              <p className="rating">Đánh giá: {review.rating}/5</p>
            </div>
          ))
        ) : (
          <p>Chưa có đánh giá nào.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;