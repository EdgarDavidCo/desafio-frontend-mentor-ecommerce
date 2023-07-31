import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import ClosedIcon from "@/components/icons/ClosedIcon";
import { useState } from "react";


const MainHeader = () => {
const [navClass, setNavClass] = useState("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");

const handleOpenMenu = () => {
setNavClass("absolute top-0 left-0 flex h-full w-4/5 p-8 font-bold md:static flex-col gap-y-[21px] bg-white md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0")
}
const handleCloseMenu = () => {
    setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0")
}

    return (
        <header className="container mx-auto flex items-center gap-8 px-4">
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <img src={LogoSneakers} alt="logo sneakers" className="mr-auto mb-1 h-5 md:mr-0" />
            <nav className={navClass}>
            <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                <ClosedIcon />
            </button>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={AvatarImage} alt="image-avatar" className="w-10" />
            </div>
        </header>
    )
}

export default MainHeader;