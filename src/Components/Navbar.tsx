import { Link } from "react-router";
import { icons } from "../assets";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
interface BgColor {
    bgColor?: string
}

const Navbar = ({bgColor}:BgColor) => {
    const [open, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // cleaner func 
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className={`w-full h-23 ${bgColor && bgColor} fixed top-0 left-0 flex items-center justify-center transition-all duration-300 ease-in-out px-4 z-50 ${scrolled ? "header-bg shadow-xl" : ""}`}>
            <div className="max-w-310 w-full mx-auto">
                <div className="flex items-center justify-between">
                    {/* LOGO WRAPPER  */}
                    <Link to={'/'}>
                        <img src={icons.logo} alt="logo" />
                    </Link>


                    {/* DESKTOP MENU WRAPPER  */}
                    <DesktopMenu />

                    {/* MOBILE MENU WRAPPER  */}
                    <MobileMenu open={open} setOpen={setOpen} />

                    {/* MENU ICON  */}
                    <div className="block md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            <img src={icons.menuIcon} alt="menu icon" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;