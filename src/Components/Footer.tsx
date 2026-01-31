import { Link } from "react-router";
import { icons, socialIcon } from "../assets";

const Footer = () => {
    return (
        <div className="w-full pt-20 footer-bg px-4 md:px-0">
            <div className="max-w-310 w-full mx-auto">
                {/* FOOTER TOP  */}
                <div className="flex flex-col items-center justify-center text-center pb-10">
                    <h2 className="text-[42px] text-[#52483e] font-semibold capitalize leading-[100%] mb-4">sound. presence. purpose.</h2>
                    <p className="max-w-155 w-full text-xl text-[#8b8782] font-normal">Focused on crafting immersive audio experience. We believe sound should not just he heard - it should move you</p>
                    <div className="flex items-center gap-4 mt-8">
                        <Link to={'#'} className="btn-primary">aura pro II</Link>
                        <Link to={'#'} className="btn-primary">Flow II</Link>
                    </div>
                </div>

            </div>
            {/* FOOTER BOTTOM  */}
            <div className="py-4 border-t border-t-[#8b8782]">
                <div className="max-w-310 w-full mx-auto">
                    <div className="flex items-center justify-center sm:justify-between">
                        {/* LOGO WRAPPER  */}
                        <Link to={'/'} className="hidden sm:block"><img src={icons.logo} alt="logo" /></Link>

                        {/* FOOTER RIGHT INFO  */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <p className="text-base text-[#52483e] font-normal">&copy; {new Date().getFullYear()} Resonance. All rights reserved.</p>

                            {/* SOCIAL MEDIA  */}
                            <div className="flex items-center gap-4">
                                <Link to={'#'}><img src={socialIcon.discord} alt="discord" /></Link>
                                <Link to={'#'}><img src={socialIcon.twitter} alt="twitter" /></Link>
                                <Link to={'#'}><img src={socialIcon.meta} alt="meta" /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;