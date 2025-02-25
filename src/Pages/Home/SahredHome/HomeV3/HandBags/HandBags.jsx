
import { Link } from 'react-router-dom';
import bagImage1 from './../../../../../assets/a1.png';
import bagImage2 from './../../../../../assets/b1.png';
import bagImage3 from './../../../../../assets/bags.png';

const HandBags = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/" className="group relative block h-[300px] overflow-hidden">
                    <img src={bagImage1} alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                        <h2 className="text-white text-3xl font-bold tracking-wide mb-2">Shoes</h2>
                        <div className="w-8 h-0.5 bg-white mb-2" />
                        <p className="text-white/90 text-sm tracking-wider">Leather Collection</p>
                    </div>
                </Link>

                <Link to="/" className="group relative block h-[300px] overflow-hidden">
                    <img src={bagImage2} alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                        <h2 className="text-white text-3xl font-bold tracking-wide mb-2">Bags</h2>
                        <div className="w-8 h-0.5 bg-white mb-2" />
                        <p className="text-white/90 text-sm tracking-wider">Italian Style</p>
                    </div>
                </Link>

                <Link to="/" className="group relative block h-[300px] overflow-hidden">
                    <img src={bagImage3} alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                        <h2 className="text-white text-3xl font-bold tracking-wide mb-2">Handbags</h2>
                        <div className="w-8 h-0.5 bg-white mb-2" />
                        <p className="text-white/90 text-sm tracking-wider">For Business People</p>
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default HandBags;
