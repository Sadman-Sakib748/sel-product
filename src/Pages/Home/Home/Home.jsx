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
        <div>
            <Banner></Banner>
            <div className='max-w-6xl mx-auto'>
            <Trending></Trending>
            <Category></Category>
            <FreeSale></FreeSale>
            <Bestsellers></Bestsellers>
            <Feature></Feature>
            <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;