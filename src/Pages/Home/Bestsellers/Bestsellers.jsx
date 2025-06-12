import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { Badge } from "antd"; // You can replace this with a custom badge if you want
import { Plus } from "react-feather";

const Bestsellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/bestsellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 24 },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 12 },
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 2.5, spacing: 16 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 space-y-12 bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 transition-colors">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg text-center">
        Bestsellers
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
        Discover the most popular products loved by our customers.
      </p>
      <div ref={sliderRef} className="keen-slider w-full max-w-7xl">
        {products.map((item, index) => (
          <div
            key={item.id ?? `bestseller-${index}`}
            className="keen-slider__slide px-3"
          >
            <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 group cursor-pointer overflow-hidden">
              <div className="relative h-60 overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-90 dark:brightness-75 group-hover:brightness-110 transition duration-500"
                />
                {item.badge && (
                  <Badge
                    className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded-full shadow-lg z-20
                      ${
                        item.badge === "NEW"
                          ? "bg-purple-600"
                          : "bg-yellow-500"
                      } text-white`}
                  >
                    {item.badge}
                  </Badge>
                )}
                <button
                  className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-gray-900 dark:text-white text-xl font-semibold truncate">
                  {item.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 capitalize mt-1">
                  {item.category}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-yellow-500 dark:text-yellow-400 font-extrabold text-2xl">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
