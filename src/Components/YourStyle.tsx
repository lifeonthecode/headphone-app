import SectionHeading from "./SectionHeading";
import YourStyleSlider from "./YourStyleSlider";
const YourStyle = () => {
    return (
        <div className="w-full py-20 px-4 md:px-0">
            <div className="section-heading mb-6">
                <SectionHeading title="your style. your sound" subtitle="Studio-grade acoustics that dissolve distractions and awaken clarity." />
            </div>


            {/* SLIDER CONTAINER  */}
            <div className="overflow-hidden">

                <YourStyleSlider />
            </div>
        </div>
    );
};

export default YourStyle;