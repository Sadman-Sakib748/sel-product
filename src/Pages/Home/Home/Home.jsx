// Home.jsx
import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../Trending/Trending';
import Category from '../Category/Category';
import FreeSale from '../FreeSele/FreeSale';
import Bestsellers from '../Bestsellers/Bestsellers';
import Feature from '../Feature/Feature';
import Brands from '../Brands/Brands';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Banner />

      <div className="max-w-7xl mx-auto space-y-16 mt-10">
        <section id="trending">
          <Trending />
        </section>

        <section id="category">
          <Category />
        </section>

        <section id="freesale">
          <FreeSale />
        </section>

        <section id="bestsellers">
          <Bestsellers />
        </section>

        <section id="feature">
          <Feature />
        </section>

        <section id="brands">
          <Brands />
        </section>
      </div>
    </div>
  );
};

export default Home;
