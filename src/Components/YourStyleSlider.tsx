import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { productImages } from "../assets";
interface Slide {
    image: string,
    color: string,
}
const slides: Slide[] = [
    {
        image: productImages.headphone1,
        color: '#d8b74b'
    },
    {
        image: productImages.headphone2,
        color: '#94915b'
    },
    {
        image: productImages.headphone3,
        color: '#883d39'
    },
    {
        image: productImages.headphone5,
        color: '#d8b74b'
    },
]

const YourStyleSlider = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        speed: 0,
        cssEase: "linear",
        waitForAnimate: false,
        swipeToSlide: true,
        className: "center",

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
                    slidesToShow: 3,
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
        ]
    };

    return (
        <div className="your-style-slider-container w-full md:min-h-200 h-full">
            <Slider {...settings}>
                {
                    slides?.map((item, index) => (
                        <div key={index} className="your-style-slide">
                            <img src={item.image} alt={`product-${index + 1}`} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default YourStyleSlider;