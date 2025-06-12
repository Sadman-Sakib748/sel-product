import React, { useEffect, useState } from "react";

const Feature = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Feature.json") // Your data source in public folder
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // Combine arrays with _source for unique keys
          const combinedProducts = [
            ...(data.featured || []).map((p) => ({ ...p, _source: "featured" })),
            ...(data.newProducts || []).map((p) => ({ ...p, _source: "newProducts" })),
            ...(data.onSale || []).map((p) => ({ ...p, _source: "onSale" })),
            ...(data.topRated || []).map((p) => ({ ...p, _source: "topRated" })),
          ].slice(0, 4);
          setProducts(combinedProducts);
        }
      })
      .catch((error) => console.error("Error fetching featured data:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-indigo-600 pb-3 text-gray-900 dark:text-indigo-300 transition-colors">
        Top Picks
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={`${product._source}-${product.id ?? index}`}
              className="bg-gradient-to-tr from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-pointer border border-indigo-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-t-xl h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover filter brightness-95 dark:brightness-75 transition duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col h-40 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 capitalize mt-1">
                    {product.category}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-indigo-800 dark:text-indigo-400">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No featured products available.</p>
      )}
    </div>
  );
};

export default Feature;
