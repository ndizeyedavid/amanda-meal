
export default function SingleProduct({ size, fav, image, title, price }) {
    return (
        <div className="relative w-full h-fit bg-white rounded-lg shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] overflow-hidden">

            {/* Add to favourite */}
            <button className="absolute bg-[#ff94a8] w-[70px] flex items-center justify-end px-5 h-[40px] left-[-18px] top-[0px] rounded-[0px_0px_20px_0]">
                <i className={`text-[20px] bi bi-heart${fav ? "-fill text-[#ea3030]" : " text-black"}`}></i>
            </button>

            <img src={image} className="w-full h-[196px] object-cover rounded-lg" alt="single Food card" />

            <div className="relative flex flex-col gap-2 p-2 pb-7">
                <h3 className={`leading-tight text-black ${size == "search" ? "text-[22px] font-bold" : "font-medium text-base"}`}>{title}</h3>
                <span className={`leading-none text-black ${size == "search" ? "text-[21px] font-semibold" : "font-medium"}`}>{price} RWF</span>

                <div className="absolute flex items-end justify-end -right-2 -bottom-3">
                    <button className="flex items-start justify-start w-[55px] h-[55px] pr-8 pl-3 bg-[#ffde16] rounded-xl shadow-md">
                        <i className="bi bi-basket text-[25px]"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}
