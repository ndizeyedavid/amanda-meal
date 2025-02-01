
export default function SearchBar() {
    return (
        <div className="flex items-center px-3 w-[95%] mx-auto h-[50px] bg-white rounded-md shadow-[0px_2px_9px_0px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-center w-2 h-2 p-3">
                <i className="bi bi-search text-[21px] text-[#8e8e8e]"></i>
            </div>

            <input type="search" name="search" id="search" placeholder="Search any product..." className="w-full h-full px-3 outline-none" />

            <div className="flex items-center justify-center w-2 h-2 p-3">
                <i className="bi bi-mic-fill text-[21px] text-[#8e8e8e]"></i>
            </div>
        </div>
    )
}
