import React from 'react';
import Header from './Header';
import Banner from './Banner';
import RestaurantList from './RestaurantList';
import RestaurantSearch from './RestaurantSearch';
import Footer from './Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RestaurantSearch />
      <Footer />
    </div>
  );
};

export default Home;