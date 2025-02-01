import React from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import SearchBar from '../components/SearchBar'
import SectionStarter from '../components/SectionStarter'
import SingleFilter from '../components/SingleFilter'
import PromoContainer from '../components/PromoContainer'
import ContentRedirecter from '../components/ContentRedirecter'
import SingleProduct from '../components/SingleProduct'

export default function Home() {
    return (
        <>
            <TopNav variation="complex" />

            <SearchBar />
            <SectionStarter title="All Products" />

            {/* circular filters */}
            <div className='flex w-[95%] mx-auto mt-[35px] justify-between'>
                {/* single filter */}
                <SingleFilter imgae="/assets/images/filters/drinks.webp" text="Drinks" />
                <SingleFilter imgae="/assets/images/filters/food.jpg" text="Food" />
                <SingleFilter imgae="/assets/images/filters/snacks.jpg" text="Snacks" />
                <SingleFilter imgae="/assets/images/filters/beverage.webp" text="Beverages" />
                <SingleFilter imgae="/assets/images/filters/fruits.jpg" text="fruits" />
            </div>

            <PromoContainer />

            {/* Deal of the day */}
            <ContentRedirecter />

            {/* products */}
            <div className='w-[95%] mx-auto mt-[35px] grid grid-cols-2 gap-y-5 gap-x-3 mb-[100px]'>
                <SingleProduct fav={false} title="Double Deluxe Burger" price="15,000" image="/assets/images/products/p-1.webp" />
                <SingleProduct fav={false} title="Cookies" price="5,000" image="/assets/images/products/p-2.jpg" />
                <SingleProduct fav={false} title="Juice" price="2,000" image="/assets/images/products/p-3.jpg" />
                <SingleProduct fav={false} title="Fried Chicken Legs" price="7,000" image="/assets/images/products/p-6.jpg" />
            </div>


            <BottomNav />
        </>
    )
}
