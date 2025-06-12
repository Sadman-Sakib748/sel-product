import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'react-feather';
import big from './../../../assets/big.jpg';

const Trending = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const swiperRef = useRef(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const categories = ['All', 'Women', 'Men', 'Kids'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="md:min-h-screen md:mt-10 flex flex-col justify-start items-center px-6 py-10 space-y-12 relative bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white drop-shadow-lg mb-2">
        Trending
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-center text-lg font-light">
        Most trendy clothes
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-400'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <div className="relative w-full max-w-6xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
        >
          {filteredProducts.slice(0, 10).map((item) => (
            <SwiperSlide key={item._id} className="p-2">
              <div className="bg-gradient-to-tr from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700 hover:scale-[1.03] transform transition-transform duration-300 relative flex flex-col overflow-hidden">
                <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={item.image || big}
                    alt={item.name}
                    className="w-full h-full object-cover filter brightness-95 hover:brightness-110 transition duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md z-10">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="capitalize text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-extrabold text-xl">
                      ${item.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg px-5 py-2 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
          <button
            className="p-3 bg-gray-200/90 hover:bg-gray-300 text-gray-800 rounded-full shadow-lg transition dark:bg-gray-700/70 dark:hover:bg-gray-600/90 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => swiperRef.current.swiper.slidePrev()}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
          <button
            className="p-3 bg-gray-200/90 hover:bg-gray-300 text-gray-800 rounded-full shadow-lg transition dark:bg-gray-700/70 dark:hover:bg-gray-600/90 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => swiperRef.current.swiper.slideNext()}
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
