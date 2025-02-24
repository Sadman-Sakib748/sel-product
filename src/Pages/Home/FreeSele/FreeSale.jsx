const FreeSale = () => {
  return (
    <div className="w-full border-2">
      <div className="w-full bg-white border-b">
        <div className="mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">NOVEMBER SALE</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              FREE SHIPPING OVER $125 FOR INTERNATIONAL ORDERS
            </p>
          </div>
          <button className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-sm">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeSale;
