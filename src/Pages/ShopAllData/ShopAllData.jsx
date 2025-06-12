import React, { useEffect, useState } from 'react';
import axios from 'axios';
import big from './../../assets/touchicon.png';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const ShopAllData = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = async (product) => {
    if (!user?.email) {
      toast.error('Please login to add items to cart.');
      return;
    }

    const cartItem = {
      productId: product._id,
      name: product.title,  // changed to title to match your data
      price: product.price,
      quantity: 1,
      image: product.image || '',
      userEmail: user.email,
    };

    try {
      const res = await axios.post("http://localhost:5000/carts", cartItem);
      if (res.data.insertedId || res.status === 200) {
        toast.success(`${product.title} added to cart!`);
      } else {
        toast.error('Failed to add product to cart.');
      }
    } catch {
      toast.error('Could not add product to cart. Try again.');
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="md:min-h-screen md:mt-10 flex flex-col justify-start items-center px-6 py-10 space-y-10">
        <h1 className="text-3xl font-bold mt-8">Shop</h1>
        <p className="text-gray-500 mb-6">Showing {products.length} results</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg border hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col relative"
            >
              <div className="relative w-full h-56 mb-4">
                <img
                  src={item.image || big}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-grow space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 text-center">{item.title}</h3>
                <p className="text-sm text-gray-600 text-center italic">By {item.author}</p>
                <p className="text-gray-500 text-center capitalize">{item.category}</p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-3">{item.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                  <button
                    className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                    onClick={() => handleAddToCart(item)}
                    aria-label={`Add ${item.title} to cart`}
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
    </>
  );
};

export default ShopAllData;
