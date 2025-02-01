import React from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import CurrentAddress from '../components/CurrentAddress'
import SingleCheckout from '../components/SingleCheckout'

export default function ConfirmOrder() {
    return (
        <>
            <TopNav variation="simple" title="Shopping Cart" />

            {/* Delivery Address */}
            <div className='flex flex-col gap-[10px] w-[95%] mx-auto mt-[35px]'>
                <h3 className='flex items-center gap-2 text-xl font-semibold leading-snug text-black'>
                    <i className='bi bi-geo-alt'></i>
                    Delivery Address
                </h3>

                {/* address */}
                <CurrentAddress />

            </div>

            {/* shopping list */}
            <div className='flex flex-col gap-[10px] w-[95%] mx-auto mt-[35px]'>
                <h3 className='flex items-center gap-2 text-xl font-semibold leading-snug text-black'>Shopping List</h3>

                <SingleCheckout />
                <SingleCheckout />

            </div>

            <div className='mb-[100px] flex items-center justify-between  p-[20px] border-t-2 border-black mt-[25px] rounded-lg'>

                <div className='flex flex-col gap-1'>
                    <span className='text-[#f73658] font-semibold text-lg'>Total:</span>
                    <span className='text-black font-bold text-[23px]'>30,000 RWF</span>
                </div>

                <button className='w-[150px] h-12 text-center text-white text-[20px] font-semibold bg-[#f73658] rounded-[5px]'>Checkout</button>
            </div>


            <BottomNav />
        </>
    )
}
