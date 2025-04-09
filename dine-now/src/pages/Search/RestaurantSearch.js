import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RestaurantSearch.css';
import restaurant1 from '../images/restaurant1.jpg';
import restaurant2 from '../images/restaurant2.jpg';
import restaurant3 from '../images/restaurant3.jpg';

const RestaurantSearch = () => {
  // Dữ liệu giả lập cho nhà hàng
  const initialRestaurants = [
    { id: 1, name: 'Nhà hàng A', description: 'Món ăn ngon, giá cả hợp lý', image: restaurant1, location: 'TP. HCM', cuisine: 'Món Việt' },
    { id: 2, name: 'Nhà hàng B', description: 'Không gian sang trọng', image: restaurant2, location: 'Hà Nội', cuisine: 'Món Âu' },
    { id: 3, name: 'Nhà hàng C', description: 'Ẩm thực độc đáo', image: restaurant3, location: 'Đà Nẵng', cuisine: 'Món Á' },
  ];

  // State cho tìm kiếm và bộ lọc
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');

  // Lọc danh sách nhà hàng dựa trên tìm kiếm và bộ lọc
  const filteredRestaurants = initialRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter ? restaurant.location === locationFilter : true;
    const matchesCuisine = cuisineFilter ? restaurant.cuisine === cuisineFilter : true;
    return matchesSearch && matchesLocation && matchesCuisine;
  });

  return (
    <div className="restaurant-search">
      <h2>Tìm kiếm nhà hàng</h2>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm nhà hàng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bộ lọc */}
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="location">Vị trí</label>
          <select
            id="location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="TP. HCM">TP. HCM</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="cuisine">Loại món ăn</label>
          <select
            id="cuisine"
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="Món Việt">Món Việt</option>
            <option value="Món Âu">Món Âu</option>
            <option value="Món Á">Món Á</option>
          </select>
        </div>
      </div>

      {/* Danh sách nhà hàng */}
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          <div className="restaurant-cards">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <img src={restaurant.image} alt={restaurant.name} />
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
                <p className="location">Vị trí: {restaurant.location}</p>
                <p className="cuisine">Loại món: {restaurant.cuisine}</p>
                <Link to={`/restaurant/${restaurant.id}`}>
                  <button className="view-btn">Xem chi tiết</button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Không tìm thấy nhà hàng nào.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantSearch;