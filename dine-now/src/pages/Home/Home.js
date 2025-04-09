import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import RestaurantList from '../../components/RestaurantList';
import RestaurantSearch from '../Search/RestaurantSearch';
import Footer from '../../components/Footer';
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