import { NavLink } from "react-router-dom"

function Icon({ name }) {
    return (
        <div>
            <i className={`bi bi-${name} text-[30px]`} />
        </div>
    )
}

export default function BottomNav() {
    return (
        <div className="fixed bottom-0 flex items-center justify-around w-full h-[76px] bg-white shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.1)]">
            {/* single link */}
            <NavLink to="/" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="house-door" />
                <span className="text-xs font-medium leading-none tracking-wide text-center text-black">Home</span>
            </NavLink>

            <NavLink to="/favourite" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="heart" />
                <span className="text-xs font-normal leading-none tracking-wide text-center text-black">Favourite</span>
            </NavLink>

            <NavLink to="/orders" id="central" className="relative flex items-center justify-center w-[70px] h-[70px] text-center bg-white rounded-full shadow-md -top-3">
                <Icon name="receipt" />
            </NavLink>

            <NavLink to="/search" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="search" />
                <span className="text-xs font-normal leading-none tracking-wide text-center text-black">Search</span>
            </NavLink>


            <NavLink to="/settings" className="flex flex-col items-center justify-center text-center gap-[2px]">
                <Icon name="gear" />
                <span className="text-xs font-normal leading-none tracking-wide text-center text-black">Settings</span>
            </NavLink>
        </div>
    )
}
