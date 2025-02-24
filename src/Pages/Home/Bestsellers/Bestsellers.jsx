import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { Badge } from "antd"; // Assuming you're using Ant Design's Badge component
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
        rtl: false, // Adjusted RTL as it may not be necessary, change back if needed
        slides: { perView: 4, spacing: 20 }, // Increased spacing between slides
        breakpoints: {
            "(max-width: 640px)": {
                slides: { perView: 1.2, spacing: 10 },
            },
            "(min-width: 641px) and (max-width: 1024px)": {
                slides: { perView: 2.5, spacing: 15 },
            },
            "(min-width: 1025px)": {
                slides: { perView: 4, spacing: 20 },
            },
        },
    });

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 space-y-10">
            <h1 className="text-3xl font-bold text-center mt-8">Bestsellers</h1>
            <p className="text-gray-500 mb-6 text-center">Most popular products</p>
            <div ref={sliderRef} className="keen-slider w-full flex justify-center">
                {products.map((item) => (
                    <div key={item.id} className="keen-slider__slide relative group max-w-sm mx-4 my-6">
                        <div className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300 p-4">
                            <div className="relative h-56">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                />
                            </div>
                            {item.badge && (
                                <Badge
                                    className={`absolute text-[10px] flex justify-center items-center top-4 left-1/2 transform -translate-x-1/2 z-10 rounded-full w-[30px] h-[30px] ${item.badge === "NEW" ? "bg-purple-500" : "bg-black"
                                        } text-white`}
                                >
                                    {item.badge}
                                </Badge>
                            )}
                            <button className="absolute my-8 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Plus className="w-4 h-4" />
                            </button>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-500">{item.category}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
