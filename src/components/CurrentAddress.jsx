import { Link } from "react-router-dom";
import pb from "../utils/pocketbase";

export default function CurrentAddress() {

    const user_data = pb.authStore.record;

    return (
        <div className='relative flex flex-col w-full gap-2 p-4 bg-transparent border border-white rounded-md shadow-xl'>

            <Link to="/settings" id="central" className="absolute flex items-center justify-center w-[50px] h-[50px] text-center bg-gray-100 text-black rounded-full shadow-2xl top-2 right-3">
                <i className="bi bi-pencil-square text-[25px]" />
            </Link>

            <h4 className='text-xl font-medium leading-snug '>Address:</h4>

            <div className=' text-lg font-normal leading-[27px]'>
                <p>{user_data.address || "N/A"}</p>
                <p>Contact: {user_data.phone || "N/A"}</p>
            </div>
        </div>
    )
}
