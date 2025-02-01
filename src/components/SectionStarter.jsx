
export default function SectionStarter({ title }) {
    return (
        <div className="flex items-center justify-between mt-[27px] w-[95%] mx-auto">
            <h3 className="text-[25px] font-bold leading-snug text-center text-black">{title}</h3>

            <div className="flex items-center gap-[12px]">
                <button className="flex items-center justify-center gap-2 h-6 py-5 px-2 bg-white rounded-md shadow-[1px_1px_16px_0px_rgba(0,0,0,0.2)]">
                    <span className="text-[20px] font-medium leading-none text-center text-black">Sort</span>
                    <i className="bi bi-sort-down text-[19px]"></i>
                </button>

                <button className="flex items-center justify-center gap-2 h-6 py-5 px-2 bg-white rounded-md shadow-[1px_1px_16px_0px_rgba(0,0,0,0.2)]">
                    <span className="text-[20px] font-medium leading-none text-center text-black">Filter</span>
                    <i className="bi bi-funnel-fill text-[19px]"></i>
                </button>

            </div>
        </div>
    )
}
