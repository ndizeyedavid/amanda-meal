
export default function PromoContainer() {
    return (
        <div className="w-[95%] mx-auto mt-[34px] flex items-center justify-center">
            <div className="w-[100%] h-[189px] rounded-xl flex flex-col items-start px-5 gap-3 justify-center" style={{ backgroundImage: "url('/assets/images/promo.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                <h3 className="text-3xl font-bold leading-snug text-white">50 - 40% OFF</h3>

                <div className="flex flex-col gap-[4px]">
                    <span className="font-normal leading-none text-white">Now in (Cold Drinks)</span>
                    <span className="font-normal leading-none text-white">All Flavours</span>
                </div>

                <button className="inline-flex items-center justify-center h-8 gap-1 p-2 mt-[5px] text-white border border-white rounded-md">
                    Order Now <i className="bi bi-arrow-right"></i>
                </button>

            </div>
        </div>
    )
}
