import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "/assets/images/logo/logo.png"
import { useEffect, useState } from "react"
import pb from "../utils/pocketbase"

export default function TopNav({ refreshCart, variation, title }) {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false)
    const [orderCount, setOrderCount] = useState(0);
    function handleLogout() {
        if (confirm("Do you want to logout?")) {
            pb.authStore.clear();
            navigate("/start");
        }
    }

    useEffect(() => {
        async function fetch_data() {
            try {
                const cart_orders = await pb.collection("orders").getFullList({
                    filter: `user_id='${pb.authStore.record.id}' && checked_out = false`

                });
                setOrderCount(cart_orders.length);
            } catch (err) {
                console.error(err.message)
            }
        }

        fetch_data()
    }, [refreshCart])

    function getUname() {
        if (!pb.authStore.record.fname) {
            return "user_" + pb.authStore.record.id;
        } else {
            return pb.authStore.record.fname + " " + pb.authStore.record.lname
        }
    }

    return (

        <>
            {variation == "complex" ?
                // the other one with the logo and porfile picture

                <div className="flex items-center justify-between p-3">
                    {/* Menu */}
                    <Link to="/confirm/order" className="relative flex items-center justify-center w-2 h-2 p-6 rounded-full shadow-lg">
                        <i className="bi bi-basket text-[30px]"></i>
                        {orderCount != 0 && <span className="absolute bg-[#ff94a8] -right-2.5 -top-1 w-[20px] h-[20px] rounded-full flex items-center justify-center p-3 font-semibold">{orderCount}</span>}
                    </Link>

                    <img src={Logo} alt="Logo" className="w-[150px] h-[80px] object-contain" />

                    <div className="relative">
                        <div onClick={() => setOpen(!open)} className="w-2 h-2 p-6 border-2 rounded-full shadow-lg hover:border-red-500" style={{ backgroundImage: `url('${pb.files.getURL(pb.authStore.record, pb.authStore.record.avatar)}')`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />

                        {open &&
                            <div className="absolute right-0 z-50 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                                <div className="px-4 py-3 text-center border-b">
                                    <p className="text-sm font-semibold">{getUname()}</p>
                                    <p className="text-xs text-gray-500">{pb.authStore.record.email}</p>
                                </div>
                                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    Settings
                                </Link>
                                <Link to="/feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    Feedback
                                </Link>
                                <div className="border-t">
                                    <button onClick={() => handleLogout()} className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-50">
                                        {/* <button className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-50"> */}
                                        Sign out
                                    </button>
                                </div>
                            </div>}
                    </div>

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
