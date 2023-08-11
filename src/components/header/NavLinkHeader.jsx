/* eslint-disable react/prop-types */
const NavLinkHeader = ({ text }) => {
    return (
        <a href="#" className="group relative py-8">
            <span className="group-hover:text-orange-primary">{text}</span>
            <span className="absolute bottom-0 left-0 block w-full scale-x-0 transition-all duration-500 group-hover:scale-x-100 h-1 group-hover:bg-orange-primary" ></span>
        </a>
    )
}

export default NavLinkHeader;