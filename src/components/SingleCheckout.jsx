
export default function SingleCheckout() {
    return (
        <div className='flex flex-col gap-[13px] p-3 bg-white rounded-md shadow-[0px_6px_14px_-8px_rgba(0,0,0,0.25)]'>
            <div className='flex gap-3'>
                <img src="/assets/images/products/p-4.webp" className='w-[148px] h-[148px] rounded' alt="checkout Product image" />

                {/* details */}
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-semibold leading-snug text-black'>Double deluxe burgar</h3>
                    <span className='rounded w-fit p-2 border border-[#cacaca] text-center text-black text-xl font-semibold leading-snug'>15,000 RWF</span>
                </div>

            </div>

            <hr className='border border-[#bbbbbb] rounded-xl' />

            <div className='flex items-center justify-between'>
                <span className='text-lg font-medium leading-snug text-black'>Total Order (1):</span>

                <span className='text-xl font-bold leading-snug text-right text-black'>15,000 RWF</span>
            </div>

        </div>
    )
}
