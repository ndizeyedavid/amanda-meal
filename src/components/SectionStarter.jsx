
export default function SectionStarter({ title, showFilter, setShowFilter }) {
    return (
        <div className="flex items-center justify-between mt-[27px] w-[95%] mx-auto">
            <h3 className="text-[25px] font-bold leading-snug text-center capitalize">{title}</h3>

            <div className="flex items-center gap-[12px]">
                {/* <button className="flex items-center justify-center gap-2 h-6 py-5 px-2 bg-white rounded-md shadow-[1px_1px_16px_0px_rgba(0,0,0,0.2)]">
                    <span className="text-[20px] font-medium leading-none text-center">Sort</span>
                    <i className="bi bi-sort-down text-[19px]"></i>
                </button> */}

                <button onClick={() => setShowFilter(!showFilter)} className={`flex items-center justify-center gap-2 h-6 py-5 px-2  rounded-md shadow-[1px_1px_16px_0px_rgba(0,0,0,0.2)] ${showFilter ? "bg-red-300" : "bg-transparent"}`}>
                    <span className="text-[20px] font-medium leading-none text-center">Filter</span>
                    <i className="bi bi-funnel-fill text-[19px]"></i>
                </button>

            </div>
        </div>
    )
}
