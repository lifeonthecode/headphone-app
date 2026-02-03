import { icons, productImages } from "../assets";
import CompareInfo from "../Components/CompareInfo";
import Navbar from "../Components/Navbar";
import SectionHeading from "../Components/SectionHeading";


const auraInfo = {
    title: 'Aura Pro II',
    image: productImages.headphone1,
    price: 320,
    info: [
        {
            icon: icons.cpu,
            title: 'R1 Chip'
        },
        {
            icon: icons.speaker,
            title: '2x more Active Noise Cancellation'
        },
        {
            icon: icons.userSound,
            title: 'Personalized Spatial Audio'
        },
        {
            icon: icons.equalizer,
            title: 'Lossless Audio'
        },
        {
            icon: icons.minus,
            title: 'None'
        },
        {
            icon: icons.minus,
            title: 'None'
        },
        {
            icon: icons.batteryCharging,
            title: 'Up to 17 hours of listening'
        },
        {
            icon: icons.microphone,
            title: '5 microphones total'
        },
    ]
}
const flowInfo = {
    title: 'Flow II',
    image: productImages.headphone8,
    price: 320,
    info: [
        {
            icon: icons.cpu,
            title: 'R1 Chip'
        },
        {
            icon: icons.speaker,
            title: '2x more Active Noise Cancellation'
        },
        {
            icon: icons.minus,
            title: 'None'
        },
        {
            icon: icons.ear,
            title: 'Hearing Test and Hearing Protection'
        },
        {
            icon: icons.handTap,
            title: 'Touch sensor'
        },
        {
            icon: icons.batteryCharging,
            title: 'Up to 17 hours of listening'
        },
        {
            icon: icons.drop,
            title: 'Water resistant'
        },
        {
            icon: icons.microphone,
            title: 'Dual beamforming microhone'
        },
    ]
}


const Compare = () => {
    return (
        <div className="w-full pt-23 bg-[#d8d8d8] pb-20">

            {/* NAVBAR  */}
            <Navbar />

            {/* SECTION HEADING  */}
            <div className="pb-10">
                <SectionHeading title="compare resonance model" subtitle="Get help choosing. Chat with a Specialist." />
            </div>

            {/* COMPARE CONTENT  */}
            <div className="max-w-310 w-full mx-auto ">
                <div className="w-full flex justify-between gap-0 md:gap-6">
                    <div className="w-full">
                        <CompareInfo item={auraInfo} />
                    </div>
                    <div className="w-full">
                        <CompareInfo item={flowInfo} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Compare;