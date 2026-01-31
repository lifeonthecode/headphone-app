import Slider from "react-slick";
import { uiImages } from "../assets";
import SectionHeading from "./SectionHeading";

interface Slide {
    image: string
}

const slides: Slide[] = [
    {
        image: uiImages.everyDetail1
    },
    {
        image: uiImages.everyDetail2
    },
    {
        image: uiImages.everyDetail3
    },
    {
        image: uiImages.everyDetail1
    },
    {
        image: uiImages.everyDetail2
    },
    {
        image: uiImages.everyDetail3
    },
]

const EveryDetails = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="w-full flex flex-col items-center py-10 lg:py-20 px-4 md:px-0">
            {/* SECTION HEADING  */}
            <div className="mb-20">
                <SectionHeading title="Every Detail Matters" subtitle="From the stich to the signal, precision lives here." />
            </div>

            <div className="w-full flex items-center pl-4 md:10 lg:pl-20">
                <div className="every-detail-container w-full">
                    <Slider {...settings}>

                        {
                            slides?.map((item, index) => (
                                <div key={index}>
                                    <div className="px-4">
                                        <img src={item?.image} className="rounded-3xl w-full h-96.5" alt={`every-detail-${index + 1}`} />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default EveryDetails;