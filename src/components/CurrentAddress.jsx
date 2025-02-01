import { Link } from "react-router-dom";

export default function CurrentAddress() {
    return (
        <div className='relative flex flex-col w-full gap-2 p-4 bg-white rounded-md shadow-lg'>

            <Link to="/checkout" id="central" className="absolute flex items-center justify-center w-[50px] h-[50px] text-center bg-gray-100 text-black rounded-full shadow-2xl top-2 right-3">
                <i className="bi bi-pencil-square text-[25px]" />
            </Link>

            <h4 className='text-xl font-medium leading-snug text-black'>Address:</h4>

            <div className='text-black text-lg font-normal leading-[27px]'>
                <p>KK32, Kamashashi, Kanombe</p>
                <p>Contact: +250 788 836 270</p>
            </div>
        </div>
    )
}
