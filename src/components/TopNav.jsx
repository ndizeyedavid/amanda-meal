import { Link, NavLink } from "react-router-dom"
import Logo from "/assets/images/logo/logo.png"

export default function TopNav({ variation, title }) {
    return (

        <>
            {variation == "complex" ?
                // the other one with the logo and porfile picture

                <div className="flex items-center justify-between p-3">
                    {/* Menu */}
                    <Link to="/confirm/order" className="relative flex items-center justify-center w-2 h-2 p-6 rounded-full shadow-lg">
                        <i className="bi bi-basket text-[30px]"></i>
                        <span className="absolute bg-[#ff94a8] -right-2.5 -top-1 w-[20px] h-[20px] rounded-full flex items-center justify-center p-3 font-semibold">2</span>
                    </Link>

                    <img src={Logo} alt="Logo" className="w-[150px] h-[80px] object-contain" />

                    <div className="w-2 h-2 p-6 bg-red-500 rounded-full" style={{ backgroundImage: "url('/assets/images/users/1.png')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
                </div>

                :
                // Me with only a title and a back button
                <div className="flex items-center justify-between p-3">
                    {/* Menu */}
                    <NavLink to="/" className="flex items-center justify-center w-2 h-2 p-6 rounded-full shadow-lg">
                        <i className="bi bi-chevron-left text-[30px]"></i>
                    </NavLink>

                    <h3 className="text-2xl font-semibold leading-snug text-center text-black">{title}</h3>

                    {/* Just sitting doing nothing here */}
                    <div className="w-2 h-2 p-6 bg-red-500 rounded-full" style={{ visibility: "hidden" }} />
                </div>
            }
        </>
    )
}
