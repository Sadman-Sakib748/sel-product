import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Trending = () => {
    const [products, setProducts] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching footer data:", error));
    }, []);

    return (
        <div className="md:min-h-screen md:mt-10 flex flex-col justify-start items-center px-6 py-10 space-y-10 relative">
            <h1 className="text-3xl font-bold mt-8 text-center">Trending</h1>
            <p className="text-gray-500 mb-6 text-center">Most trendy clothes</p>

            {/* Swiper Slider */}
            <div className="relative w-full">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2.5, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className="p-4">
                            <div className="bg-white rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col">
                                <div className="relative w-full h-56 mb-4">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800
                                     text-center">{item.name}</h3>
                                    <p className="text-gray-500 text-center">{item.category}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-lg font-bold text-gray-900">${item.price}</span>
                                        <button className="btn text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
                                            +
                                        </button>
                                    </div>
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full absolute top-2 right-2">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <button
                        className="swiper-button-prev p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button
                        className="swiper-button-next p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trending;
