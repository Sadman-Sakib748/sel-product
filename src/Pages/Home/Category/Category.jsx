import React, { useEffect, useState } from 'react';
import axios from 'axios';
import big from './../../../assets/big.jpg';

const ProductsByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Filter products safely
  const filteredProducts = category
    ? products.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase()
      )
    : [];

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Loading...</p>
      </div>
    );

  if (!category)
    return (
      <p className="text-center text-red-600 dark:text-red-400 font-semibold py-10">
        No category provided.
      </p>
    );

  if (filteredProducts.length === 0)
    return (
      <p className="text-center text-gray-600 dark:text-gray-400 font-medium py-10">
        No products found for <span className="font-semibold">{category}</span>.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        Products in <span className="capitalize">{category}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={item.image || big}
                alt={item.name}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize mt-1">{item.category}</p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-blue-600 dark:text-blue-400 font-extrabold text-lg">${item.price}</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => alert(`Added ${item.name} to cart!`)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
