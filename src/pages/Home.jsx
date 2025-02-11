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
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    // const [products, setProducts] = useState([]);
    const [groupedProducts, setGroupedProducts] = useState({});
    const [refreshCart, setRefreshCart] = useState(0)
    const [search, setSearch] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    if (search != "") {
        navigate("/search?q=" + search)
    }

    useEffect(() => {
        async function fetch_data() {
            const fetch_products = await pb.collection("products").getFullList({
                filter: "available = true"
            });

            // Group products by category attribute
            const groupedProducts = fetch_products.reduce((acc, product) => {
                const categoryName = product.product_category || "Uncategorized"; // Default if no category

                if (!acc[categoryName]) {
                    acc[categoryName] = [];
                }

                acc[categoryName].push(product);
                return acc;
            }, {});

            setGroupedProducts(groupedProducts);
            // console.log(groupedProducts);

        }

        fetch_data();
    }, [])

    return (
        <>
            <Toaster />

            <TopNav refreshCart={refreshCart} variation="complex" />

            <SearchBar search={search} setSearch={setSearch} />
            <SectionStarter showFilter={showFilter} setShowFilter={setShowFilter} title="All Products" />

            {/* circular filters */}
            <div className={`flex w-[95%] mx-auto mt-[35px] justify-between ${!showFilter && "hidden"}`}>
                {/* single filter */}
                <SingleFilter path="/filter/food" imgae="/assets/images/filters/food.jpg" text="Food" />
                <SingleFilter path="/filter/snacks" imgae="/assets/images/filters/snacks.jpg" text="Snacks" />
                <SingleFilter path="/filter/drinks" imgae="/assets/images/filters/beverage.webp" text="Beverages" />
                <SingleFilter path="/filter/fruits" imgae="/assets/images/filters/fruits.jpg" text="fruits" />
            </div>

            <PromoContainer />

            {/* Deal of the day */}
            {/* <ContentRedirecter /> */}

            {/* products */}
            <section className='w-[95%] mx-auto mt-[35px] mb-[100px]'>

                {Object.keys(groupedProducts).length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    Object.entries(groupedProducts).map(([category, products]) => (
                        <div key={products.id} className='my-10'>

                            <div className='flex items-center justify-between'>
                                <h3 className='mb-4 text-3xl font-bold'>{category}</h3>
                                <Link to={"/filter/" + category.toLocaleLowerCase()} className='text-[#ff627f] text-xl hover:underline'>See More</Link>
                            </div>

                            <div className='grid grid-cols-2 gap-y-5 gap-x-3'>
                                {products.map((data, index) => (
                                    <SingleProduct key={index} id={data.id} setRefreshCart={setRefreshCart} title={data.product_name} price={data.product_price} image={pb.files.getURL(data, data.product_image)} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </section>


            <BottomNav />
        </>
    )
}
