import Navbar from "../Components/Navbar";
import TechSpecsDescription from "../Components/TechSpecsDescription";
import TechSpecsSlider from "../Components/TechSpecsSlider";


const techDescription = [
    {
        title: 'Audio Technology',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Intelligence',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Power',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Controls',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Built For The Elements',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Battery',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'connectivity',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Materials',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ]
    },
    {
        title: 'Sustainability & Materials',
        description: [
            {
                content: 'custom-turned 40mm Resonance tm driver for deep bass.'
            },
            {
                content: 'Ultra-low distortion signal processing.'
            },
            {
                content: 'Adaptive Sound Sculpting TM - real-time EQ.'
            },
            {
                content: 'Spatial Audio calibration with dynamic head tracking.'
            },
            {
                content: 'Natural Voice Isolation for calls, focus, and immersive listening.'
            },
            {
                content: 'Pressure-balancing acoustic vents for long-wear comfort.'
            },
        ],
        color: 'linear-gradient(180deg, #D2CDC6 0%, #F2EBE3 100%)',
    },
]


const TechSpecs = () => {
    return (
        <div className="w-full h-full bg-[#d8d8d8] pt-23">
            {/* NAVBAR  */}
            <div className="relative z-50">
                <Navbar />
            </div>

            <div className="max-w-310 w-full mx-auto px-4 md:px-0">

                {/* TECH SPESC BANNER WRAPPER  */}
                <div className="w-full py-10 md:py-20 flex flex-col md:flex-row md:justify-between">
                    <div className="max-w-75 w-full">
                        <h1 className="text-3xl text-[#52483e] font-semibold capitalize">color</h1>
                    </div>

                    {/* TECH SPECS SLIDER  */}
                    <TechSpecsSlider />
                </div>
            </div>

            <div className="flex flex-col">
                {
                    techDescription?.map((item, index, arr) => (
                        <TechSpecsDescription item={item} index={index} isLast={arr.length - 1} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default TechSpecs;