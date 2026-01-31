import Banner from "../Components/Banner";
import DeepMind from "../Components/DeepMind";
import DreamLike from "../Components/DreamLike";
import EveryDetails from "../Components/EveryDetails";
import Navbar from "../Components/Navbar";
import YourStyle from "../Components/YourStyle";


const Home = () => {
    return (
        <div className="home-page-gradient">
            {/* NAVBAR  */}
            <div>
                <Navbar/>
            </div>

            {/* BANNER COMPONENT  */}
            <div>
                <Banner/>
            </div>

            {/* YOUR STYLE COMPONENT  */}
            <div>
                <YourStyle/>
            </div>

            {/* DEEP MIND COMPONENT  */}
            <div>
                <DeepMind/>
            </div>

            {/* EVERY DETAILS COMPONENT  */}
            <div>
                <EveryDetails/>
            </div>

            {/* DREAM LIKE COMPONENT  */}
            <div>
                <DreamLike/>
            </div>
        </div>
    );
};

export default Home;