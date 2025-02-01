import React from 'react'

export default function ContentRedirecter() {
    return (
        <div className='w-[95%] mx-auto p-4 bg-[#4392f8] rounded-lg mt-[25px] flex justify-between items-center'>
            {/* details */}
            <div className='flex flex-col gap-[10px] text-white'>
                <h3 className='text-2xl font-medium leading-tight'>Deal of the day</h3>
                <p className='flex items-center gap-2 font-normal leading-none text-white'>
                    <i className='bi bi-calendar2-event'></i> 12/1/2025
                </p>
            </div>

            <button className='h-7 px-2.5 py-1.5 rounded border border-white justify-start items-center gap-1 inline-flex text-white'>
                View all
                <i className='bi bi-arrow-right'></i>
            </button>
        </div>
    )
}
