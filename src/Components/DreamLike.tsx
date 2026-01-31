import { Link } from "react-router";
import { uiImages } from "../assets";


const DreamLike = () => {
    return (
        <div className="w-full min-h-200.75 md:min-h-223.5 relative flex items-center justify-center">

            <div className="flex items-center justify-center flex-col relative text-center md:text-start z-10">
                <h1 className="text-6xl text md:text-[86px] text-white font-semibold capitalize leading-20 md:leading-[120%] mb-3">dreamlike sound</h1>
                <p className="text-2xl text-white font-normal mb-6">staring at $320 - available</p>
                <Link to={'#'} className="btn-primary">
                    buy now
                </Link>
            </div>

            <img src={uiImages.dreamLike} className="absolute top-0 left-0 w-full h-full object-cover object-center" alt="dream like" />
        </div>
    );
};

export default DreamLike;