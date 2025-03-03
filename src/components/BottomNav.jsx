import { NavLink } from "react-router-dom"
import IsLoggedIn from "../utils/sessionVerifier"

function Icon({ name }) {
    return (
        <div>
            <i className={`bi bi-${name} text-[30px]`} />
        </div>
    )
}

export default function BottomNav() {

    IsLoggedIn();

    return (
        <div id="bottom-nav" className="fixed bottom-[-1px] flex items-center justify-around w-full h-[76px] shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.1)]">
            {/* single link */}
            <NavLink to="/" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="house-door" />
                <span className="text-xs font-medium leading-none tracking-wide text-center ">Home</span>
            </NavLink>

            <NavLink to="/favourite" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="heart" />
                <span className="text-xs font-normal leading-none tracking-wide text-center ">Favourite</span>
            </NavLink>

            <NavLink to="/orders" id="central" className="relative flex items-center justify-center w-[70px] h-[70px] text-center rounded-full shadow-md -top-3">
                <Icon name="receipt" />
            </NavLink>

            <NavLink to="/search" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="search" />
                <span className="text-xs font-normal leading-none tracking-wide text-center ">Search</span>
            </NavLink>


            <NavLink to="/settings" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="gear" />
                <span className="text-xs font-normal leading-none tracking-wide text-center ">Settings</span>
            </NavLink>
        </div>
    )
}
