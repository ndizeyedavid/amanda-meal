import { Toaster } from "react-hot-toast"
import TopNav from "../components/TopNav"
import SearchBar from "../components/SearchBar"
import SectionStarter from "../components/SectionStarter"
import SingleFilter from "../components/SingleFilter"
import PromoContainer from "../components/PromoContainer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import pb from "../utils/pocketbase"
import SingleProduct from "../components/SingleProduct"
import BottomNav from "../components/BottomNav"
import Empty from "../components/Empty"

function Filter() {
    const { category } = useParams();
    const [refreshCart, setRefreshCart] = useState(0);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetch_products() {
            const results = await pb.collection("products").getFullList({
                filter: `product_category ~ "${category}"`
            })

            setProducts(results);
        }

        fetch_products();
    }, [category])

    return (
        <>
            <Toaster />

            <TopNav refreshCart={refreshCart} variation="complex" />

            <SearchBar />
            <SectionStarter title={products.length + " items"} />

            {/* circular filters */}
            <div className='flex w-[95%] mx-auto mt-[35px] justify-between'>
                {/* single filter */}
                <SingleFilter path="/filter/food" imgae="/assets/images/filters/food.jpg" text="Food" />
                <SingleFilter path="/filter/snacks" imgae="/assets/images/filters/snacks.jpg" text="Snacks" />
                <SingleFilter path="/filter/drinks" imgae="/assets/images/filters/beverage.webp" text="Beverages" />
                <SingleFilter path="/filter/fruits" imgae="/assets/images/filters/fruits.jpg" text="fruits" />
            </div>

            {/* <PromoContainer /> */}
            <section className='w-[95%] mx-auto mt-[35px] mb-[100px]'>
                <div className='my-10'>
                    <div className='flex items-center justify-between'>
                        <h3 className='mb-4 text-3xl font-bold capitalize'>{category}</h3>
                    </div>

                    {products.length === 0 && <Empty title={`No "${category}" available`} text="We sorry to say that this product isn't ready yet, but be sure to check soon" />}

                    <div className='grid grid-cols-2 gap-y-5 gap-x-3'>
                        {products.map((data, index) => (
                            <SingleProduct key={index} id={data.id} setRefreshCart={setRefreshCart} title={data.product_name} price={data.product_price} image={pb.files.getURL(data, data.product_image)} />
                        ))}
                    </div>

                </div>
            </section>

            <BottomNav />
        </>
    )
}

export default Filter
