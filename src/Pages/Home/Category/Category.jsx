import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full min-h-screen'>
            <div className="container mx-auto p-4">
                <Link to="/men" className="relative block aspect-[3/4] max-w-md mx-auto overflow-hidden group">
                    <img  
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20195217-qhpXQJe1tUG0oGFfhyCUJ0hIjbh3VH.png"
                        alt="Men's Fashion Category"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Outer border */}
                            <div className="absolute inset-0 border-2 border-white/90" />
                            {/* Inner border */}
                            <div className="px-12 py-4 border border-white/90 m-1">
                                <span className="text-white text-3xl font-medium tracking-widest">MEN</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="container mx-auto p-4">
                <Link to="/women" className="relative block aspect-[3/4] max-w-md mx-auto overflow-hidden group">
                    <img  
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20195217-qhpXQJe1tUG0oGFfhyCUJ0hIjbh3VH.png"
                        alt="Women's Fashion Category"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Outer border */}
                            <div className="absolute inset-0 border-2 border-white/90" />
                            {/* Inner border */}
                            <div className="px-12 py-4 border border-white/90 m-1">
                                <span className="text-white text-3xl font-medium tracking-widest">WOMEN</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="container mx-auto p-4">
                <Link to="/kids" className="relative block aspect-[3/4] max-w-md mx-auto overflow-hidden group">
                    <img  
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20195217-qhpXQJe1tUG0oGFfhyCUJ0hIjbh3VH.png"
                        alt="Kids' Fashion Category"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Outer border */}
                            <div className="absolute inset-0 border-2 border-white/90" />
                            {/* Inner border */}
                            <div className="px-12 py-4 border border-white/90 m-1">
                                <span className="text-white text-3xl font-medium tracking-widest">KIDS</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category;
