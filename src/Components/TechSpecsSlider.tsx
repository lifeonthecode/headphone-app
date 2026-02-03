import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { productImages } from "../assets";

interface Slide {
    image: string,
    color: string
};

const slides: Slide[] = [
    {
        image: productImages.headphone1,
        color: "#d8b74b",
    },
    {
        image: productImages.headphone2,
        color: "#94915b",
    },
    {
        image: productImages.headphone3,
        color: "#883d39",
    },
]

const TechSpecsSlider = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        speed: 0,
        cssEase: "linear",
        waitForAnimate: false,
        swipeToSlide: true,

        customPaging: (index: number) => {
            const { color = "#e5e7eb" } = slides[index] || {};
            return (
                <button
                    type="button"
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                />
            );
        },

        responsive: [
            // TABLET 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                }
            },
            // MOBILE 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    dots: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,

                }
            },
        ]
    };
    return (
        <div className="tech-specs-slider-container w-full">
            <Slider {...settings}>
                {
                    slides?.map((item, index) => (
                        <div key={index}>
                            <div className="w-full min-h-105 h-full flex  justify-center">
                                <img src={item?.image} className="max-w-[320px] sm:min-h-90 md:min-h-105 h-full object-cover" alt={`tech-specs-product-${index+1}`} />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default TechSpecsSlider;