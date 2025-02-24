import React, { useEffect, useState } from "react";

const Feature = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Feature.json") // Ensure this file is inside `public/Feature.json`
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // Flatten the JSON object into a single array and take the first 4 items
          const combinedProducts = [
            ...(data.featured || []),
            ...(data.newProducts || []),
            ...(data.onSale || []),
            ...(data.topRated || []),
          ].slice(0, 4);
          setProducts(combinedProducts);
        }
      })
      .catch((error) => console.error("Error fetching featured data:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Top Picks</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold text-black">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No featured products available.</p>
      )}
    </div>
  );
};

export default Feature;
