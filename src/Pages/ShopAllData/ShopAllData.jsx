import React, { useEffect, useState } from 'react';
import axios from 'axios';
import big from './../../assets/touchicon.png';
import Swal from 'sweetalert2';

const ShopAllData = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const handleAddToCart = (product) => {
        const cartItem = {
            productId: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        };

        axios.post("http://localhost:5000/carts", cartItem)
            .then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Added to Cart!",
                        text: `${product.name} has been added to your cart.`,
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Could not add product to cart. Try again.",
                });
            });
    };

    return (
        <div className="md:min-h-screen md:mt-10 flex flex-col justify-start items-center px-6 py-10 space-y-10">
            <h1 className="text-3xl font-bold mt-8">Shop</h1>
            <p className="text-gray-500 mb-6">Showing {products.length} results</p>

            {/* Grid layout for products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {products.map((item) => (
                    <div key={item._id} className="bg-white rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col">
                        <div className="relative w-full h-56 mb-4">
                            <img src={item.image || big} alt={item.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800 text-center">{item.name}</h3>
                            <p className="text-gray-500 text-center">{item.category}</p>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-lg font-bold text-gray-900">${item.price}</span>
                                <button
                                    className="btn text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                                    onClick={() => handleAddToCart(item)}
                                >
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
                ))}
            </div>
        </div>
    );
};

export default ShopAllData;
