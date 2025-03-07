import React, { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import SearchBar from '../components/SearchBar'
import SingleProduct from '../components/SingleProduct'
import pb from '../utils/pocketbase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader } from 'lucide-react'
import Empty from '../components/Empty'

export default function Search() {

    let search_query = "";
    if (window.location.href.split("?")[1] != undefined) {
        search_query = window.location.href.split("?")[1].split("=")[1] || "";
    }


    const [search, setSearch] = useState(search_query);
    const [products, setProducts] = useState([]);
    const [refreshCart, setRefreshCart] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function search_product() {
            setLoading(true);
            try {
                const fetch_products = await pb.collection("products").getFullList({
                    filter: `product_name ~ "${search}"`
                });

                setProducts(fetch_products);
            } catch (err) {
                // toast.error("Failed to search product");
                console.error(err)
            } finally {
                // console.log("done")
                setLoading(false);
            }
        }

        search_product();
    }, [search])

    return (
        <>
            <Toaster />
            <TopNav refreshCart={refreshCart} variation="simple" title="Search" />
            <SearchBar search={search} setSearch={setSearch} />

            <div className='w-full h-screen'>
                <div className='w-[95%] mx-auto mt-[35px] flex flex-col gap-5 pb-[100px]'>
                    {loading && <div className='flex items-center justify-center h-[700px]'><Loader color='red' id='spin' size={100} /></div>}

                    {products.length == 0 && <Empty title="No products available" text="Check back later or try searching again." />}

                    {products.map((data, index) => (
                        <SingleProduct key={index} id={data.id} setRefreshCart={setRefreshCart} title={data.product_name} price={data.product_price} image={pb.files.getURL(data, data.product_image)} />
                    ))}
                </div>
            </div>

            <BottomNav />
        </>
    )
}
