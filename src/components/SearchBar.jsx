import { useForm } from "react-hook-form"

export default function SearchBar({ setSearch, search }) {

    const { register, handleSubmit } = useForm();

    function searching(data) {
        setSearch(data.search_txt);
    }

    return (
        <form onSubmit={handleSubmit(searching)} className="flex items-center px-3 w-[95%] mx-auto h-[50px] bg-white rounded-md shadow-[0px_2px_9px_0px_rgba(0,0,0,0.4)]">
            <button type="submit" className="flex items-center justify-center w-2 h-2 p-3">
                <i className="bi bi-search text-[21px] text-[#8e8e8e]"></i>
            </button>

            <div className="w-full h-full">
                <input type="search" name="search" id="search" placeholder="Search any product..." defaultValue={search} className="w-full h-full px-3 outline-none" {...register("search_txt")} />
            </div>

            <div className="flex items-center justify-center w-2 h-2 p-3">
                <i className="bi bi-mic-fill text-[21px] text-[#8e8e8e]"></i>
            </div>
        </form>
    )
}
