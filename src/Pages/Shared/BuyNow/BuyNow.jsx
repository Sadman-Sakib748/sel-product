import React, { useState } from "react";

const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);

  // Dummy product data (তুমি API থেকে নিয়ে আসতে পারো)
  const product = {
    name: "Wireless Headphones",
    description:
      "Experience high quality sound with noise cancellation and long battery life.",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f99943f2a6?auto=format&fit=crop&w=600&q=80",
  };

  const handleQuantityChange = (e) => {
    const val = Math.max(1, Number(e.target.value));
    setQuantity(val);
  };

  const handleBuyNow = () => {
    alert(`Thank you for purchasing ${quantity} ${product.name}(s)!`);
    // এখানে তুমি checkout বা payment logic যোগ করতে পারো
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left: Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {product.description}
            </p>

            <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8">
              ${product.price.toFixed(2)}
            </p>

            {/* Quantity selector */}
            <div className="flex items-center space-x-3 mb-10 max-w-xs">
              <label
                htmlFor="quantity"
                className="text-gray-700 dark:text-gray-300 font-medium"
              >
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Buy Now button */}
          <button
            onClick={handleBuyNow}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
