import bershka from "./../../../../../assets/bershka.png";
import dkny from "./../../../../../assets/dkny.png";
import hm from "./../../../../../assets/hm.png";
import only from "./../../../../../assets/onnly.png";
import rayban from "./../../../../../assets/rayban-150x75.png";
import zara from "./../../../../../assets/zara-150x75.png";
import mango from "./../../../../../assets/mango-300x114.png";
import selected from "./../../../../../assets/selected-300x106.png";

const OurBrand = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen gap-4">
            <div className="flex-1 flex flex-wrap justify-center">
                <img className="w-32 h-32 m-2" src={bershka} alt="Bershka" />
                <img className="w-32 h-32 m-2" src={dkny} alt="DKNY" />
                <img className="w-32 h-32 m-2" src={hm} alt="H&M" />
                <img className="w-32 h-32 m-2" src={only} alt="Only" />
                <img className="w-32 h-32 m-2" src={rayban} alt="Rayban" />
                <img className="w-32 h-32 m-2" src={zara} alt="Zara" />
                <img className="w-32 h-32 m-2" src={mango} alt="Mango" />
                <img className="w-32 h-32 m-2" src={selected} alt="Selected" />
            </div>
            <div className="flex-1">
                <iframe 
                    className="w-full h-80" 
                    loading="lazy" 
                    title="Maison Martin Margiela with H&M" 
                    src="https://player.vimeo.com/video/57306301?dnt=1&amp;app_id=122963" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
};

export default OurBrand;
