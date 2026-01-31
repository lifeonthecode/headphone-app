import { Link, NavLink } from "react-router";

interface Links {
    page: string,
    link: string
}


const MenuLinks = () => {
    const links: Links[] = [
        {
            page: 'Home',
            link: '/'
        },
        {
            page: 'Tech Specs',
            link: '/tech-specs'
        },
    ];
    return (
        <nav className="flex flex-col md:flex-row md:items-center gap-10  menu-list">
            {
                links?.map((item, index) => (
                    <NavLink to={item.link} key={index} className={({ isActive }) => ` text-base font-normal capitalize menu-link-gradient ${isActive ? 'border-b-4 border-b-[#94915b]' : 'border-none'}`}>{item.page}</NavLink>
                ))
            }

            <Link to={'/compare'} className="text-white text-base font-normal capitalize btn-secondary">compare</Link>
        </nav>
    );
};

export default MenuLinks;