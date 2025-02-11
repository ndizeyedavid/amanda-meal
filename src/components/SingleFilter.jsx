import { Link } from "react-router-dom";

export default function SingleFilter({ path, imgae, text }) {
    return (
        <Link to={path} className='flex flex-col items-center justify-center gap-2'>
            <img src={imgae} className='object-cover bg-white border-2 rounded-full w-14 h-14' alt="Filter img" />
            <span className='text-center text-[#21003d] text-[16px] font-normal leading-none'>{text}</span>
        </Link>
    )
}
