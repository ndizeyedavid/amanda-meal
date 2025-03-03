import React from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from "../components/TopNav"
import SearchBar from "../components/SearchBar"
import SectionStarter from "../components/SectionStarter"
import SingleProduct from '../components/SingleProduct'
export default function Favourite() {
    return (
        <>
            <TopNav variation="complex" />

            <SearchBar />
            <SectionStarter title="5 items" />

            {/* products */}
            <div className='w-[95%] mx-auto mt-[35px] grid grid-cols-2 gap-y-5 gap-x-3 pb-[100px]'>
                <SingleProduct fav={true} title="Fried Chicken Legs" price="7,000" image="/assets/images/products/p-6.jpg" />
                <SingleProduct fav={true} title="Pilau with eggs" price="1,500" image="/assets/images/products/p-5.jpg" />
                <SingleProduct fav={true} title="Fine Salad pure organic" price="2,300" image="/assets/images/products/p-7.jpg" />
                <SingleProduct fav={true} title="Pancakes" price="6,000" image="/assets/images/products/p-4.webp" />
                <SingleProduct fav={true} title="Cookies" price="5,000" image="/assets/images/products/p-2.jpg" />

            </div>

            <BottomNav />
        </>
    )
}
