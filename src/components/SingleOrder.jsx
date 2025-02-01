
function renderStatus(status) {
    switch (status) {
        case "pending":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-yellow-300 text-black text-center text-[19px] font-semibold leading-snug'>Pending</span>
        case "deliverying":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-green-300 text-black text-center text-[19px] font-semibold leading-snug'>Deliverying</span>
        case "cancled":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-red-400 text-black text-center text-[19px] font-semibold leading-snug'>Cancled</span>
    }
}

export default function SingleOrder({ img, title, status, quantity, price }) {
    return (
        <div className='flex flex-col gap-[13px] p-3 bg-white rounded-md shadow-[0px_6px_14px_-8px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center gap-3'>
                <img src={img} className='w-[128px] h-full rounded' width={158} height={148} alt="checkout Product image" />

                {/* details */}
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[23px] font-semibold leading-snug text-black'>{title}</h3>
                    {renderStatus(status)}
                </div>

            </div>

            <hr className='border border-[#bbbbbb] rounded-xl' />

            <div className='flex items-center justify-between'>
                <span className='text-lg font-medium leading-snug text-black'>Total Order ({quantity}):</span>
                <span className='text-xl font-bold leading-snug text-right text-black'>{price}</span>
            </div>
            <button className="px-5 py-2 rounded-lg font-semibold text-[20px] bg-blue-400 hover:bg-blue-600 ">Track</button>

        </div>
    )
}
