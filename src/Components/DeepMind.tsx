import Slider from "react-slick";
import { uiImages } from "../assets";

interface Slide {
    description: string,
    image: string,
    color: string,
}

const slides: Slide[] = [
    {
        description: 'Deep lows. lush mids. Airy highs. All perfectly in balance',
        image: uiImages.deepLow,
        color: 'linear-gradient(180deg, #D2CDC6 0%, #F2EBE3 100%)',

    },
    {
        description: 'Deep lows. lush mids. Airy highs. All perfectly in balance',
        image: uiImages.deepLow,
        color: 'linear-gradient(180deg, #D2CDC6 0%, #F8BF93 100%)',
    },
    {
        description: 'Deep lows. lush mids. Airy highs. All perfectly in balance',
        image: uiImages.deepLow,
        color: 'linear-gradient(180deg, #D2CDC6 0%, #F2EBE3 100%)',

    },
    {
        description: 'Deep lows. lush mids. Airy highs. All perfectly in balance',
        image: uiImages.deepLow,
        color: 'linear-gradient(180deg, #D2CDC6 0%, #F8BF93 100%)',
    },
]

const DeepMind = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "10%",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "5%",
                }
            }
        ]
    };
    return (
        <div className="w-full md:py-10 lg:py-20 pl-4 md:pl-10 lg:pl-20 flex items-center justify-end overflow-hidden">
            <div className="deep-mind-slider-container w-full h-120 ">
                <Slider {...settings}>

                    {
                        slides?.map((item, index) => (
                            <div key={index}>
                                <div className="h-125 md:h-120 flex flex-col md:flex-row md:items-center justify-between px-10 pt-10 md:pt-0 gap-10 md:gap-0" style={{
                                    background: item?.color

                                }}>
                                    <div className="max-w-93 w-full">
                                        <h3 className="text-2xl md:text-3xl text-[#3b3b3b] font-medium leading-10.5">{item.description}</h3>
                                    </div>
                                    <div>
                                        <img src={item.image} alt={item.description} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default DeepMind;