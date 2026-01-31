import { uiImages } from "../assets";


const Banner = () => {
    return (
        <div className="w-full h-112.5 sm:h-172 md:min-h-200 lg:min-h-234 flex flex-col justify-center items-center relative pointer-events-none">
            <div className="max-w-310 w-full mx-auto">
                <div className="banner-container flex flex-col w-full items-center">
                    <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[140px] xl:text-[180px] text-[#52483e] font-semibold capitalize leading-[100%] relative z-20">Resonance</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[140px] xl:text-[180px] font-semibold capitalize leading-[100%] banner-second-title relative z-0">Aura Pro II</h1>
                </div>
            </div>
            <div className="banner-bg w-full h-full absolute top-0 left-0 z-10">
                <img src={uiImages.heroImage} className="w-full h-full object-contain object-bottom md:object-center" alt="hero image" />
            </div>
        </div>
    );
};

export default Banner;