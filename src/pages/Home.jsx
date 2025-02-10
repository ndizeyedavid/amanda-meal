import React, { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import SearchBar from '../components/SearchBar'
import SectionStarter from '../components/SectionStarter'
import SingleFilter from '../components/SingleFilter'
import PromoContainer from '../components/PromoContainer'
import ContentRedirecter from '../components/ContentRedirecter'
import SingleProduct from '../components/SingleProduct'
import pb from '../utils/pocketbase'
import { Toaster } from 'react-hot-toast'

export default function Home() {

    const [products, setProducts] = useState([]);
    const [refreshCart, setRefreshCart] = useState(0)

    useEffect(() => {
        async function fetch_data() {
            const fetch_products = await pb.collection("products").getFullList();

            setProducts(fetch_products);
            // console.log(fetch_products)
        }

        fetch_data();
    }, [])

    return (
        <>
            <Toaster />

            <TopNav refreshCart={refreshCart} variation="complex" />

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
                {products.map((data, index) => (
                    <SingleProduct id={data.id} setRefreshCart={setRefreshCart} key={index} title={data.product_name} price={data.product_price} image={pb.files.getURL(data, data.product_image)} />
                ))}

            </div>


            <BottomNav />
        </>
    )
}
