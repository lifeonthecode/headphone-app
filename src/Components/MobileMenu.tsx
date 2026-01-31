import { MdClose } from "react-icons/md";
import MenuLinks from "./MenuLinks";

interface MenuProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileMenu = ({open, setOpen}: MenuProps) => {
    return (
        <div className={`block md:hidden fixed top-0 left-0 h-screen w-full transform home-page-gradient py-10 px-6 transition-transform duration-500 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="flex items-center justify-end mb-10">
                <button onClick={() => setOpen(!open)} className="p-3 border-2 border-[#94915b] rounded-full text-2xl text-[#94915b]"><MdClose /></button>
            </div>
            <MenuLinks />
        </div>
    );
};

export default MobileMenu;