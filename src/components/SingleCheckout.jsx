
export default function SingleCheckout({ img, title, price, quantity, total }) {
    return (
        <div className='flex flex-col gap-[13px] p-3 border border-gray-700 rounded-md shadow-[0px_6px_14px_-8px_rgba(0,0,0,0.06)]'>
            <div className='flex gap-3'>
                <img src={img} className='w-[148px] h-[148px] rounded object-cover' alt={title} />

                {/* details */}
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-semibold leading-snug'>{title}</h3>
                    <span className='rounded w-fit p-2 border border-[#cacaca] text-center text-xl font-semibold leading-snug'>{price.toLocaleString()} RWF</span>
                </div>

            </div>

            <hr className='border border-[#bbbbbb] rounded-xl' />

            <div className='flex items-center justify-between'>
                <span className='text-lg font-medium leading-snug'>Total Order ({quantity}):</span>

                <span className='text-xl font-bold leading-snug text-right'>{total.toLocaleString()} RWF</span>
            </div>

        </div>
    )
}
