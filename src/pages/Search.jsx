import React from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import SearchBar from '../components/SearchBar'
import SingleProduct from '../components/SingleProduct'

export default function Search() {
    return (
        <>
            <TopNav variation="simple" title="Search" />
            <SearchBar />

            <div className='w-[95%] mx-auto mt-[35px] flex flex-col gap-5 mb-[100px]'>
                <SingleProduct size="search" fav={false} title="Double Deluxe Burger" price="15,000" image="/assets/images/products/p-1.webp" />
                <SingleProduct size="search" fav={false} title="Double Deluxe Burger" price="15,000" image="/assets/images/products/p-1.webp" />
                <SingleProduct size="search" fav={false} title="Double Deluxe Burger" price="15,000" image="/assets/images/products/p-1.webp" />
                <SingleProduct size="search" fav={false} title="Double Deluxe Burger" price="15,000" image="/assets/images/products/p-1.webp" />
            </div>

            <BottomNav />
        </>
    )
}
