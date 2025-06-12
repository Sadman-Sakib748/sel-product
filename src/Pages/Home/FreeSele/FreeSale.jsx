const FreeSale = () => {
  return (
    <section className="w-full border-t border-b border-gray-300 dark:border-gray-700 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 dark:from-indigo-800 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
            NOVEMBER SALE
          </h2>
          <p className="text-white text-sm md:text-base font-medium opacity-90">
            FREE SHIPPING OVER <span className="underline decoration-yellow-400"> $125 </span> FOR INTERNATIONAL ORDERS
          </p>
        </div>
        <button
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-yellow-500 active:bg-yellow-600 transition"
          aria-label="Shop Now"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default FreeSale;
