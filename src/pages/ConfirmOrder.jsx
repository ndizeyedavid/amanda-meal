import React, { useEffect, useState } from 'react'
import BottomNav from '../components/BottomNav'
import TopNav from '../components/TopNav'
import CurrentAddress from '../components/CurrentAddress'
import SingleCheckout from '../components/SingleCheckout'
import pb from '../utils/pocketbase'
import { data } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Empty from '../components/Empty'

export default function ConfirmOrder() {

    const [orders, setOrders] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [dummy, setDummy] = useState(0);
    useEffect(() => {

        function calcTotal(orders) {
            let total = 0;
            orders.forEach(order => {
                // setOrderTotal(orderTotal + order.price)
                total += order.price;
            });

            setOrderTotal(total)
        }

        async function fetch_orders() {
            const all_orders = await pb.collection("orders").getFullList({
                filter: `user_id = "${pb.authStore.record.id}" && checked_out = false`,
                expand: "user_id,product_id"
            });

            // console.log(all_orders)
            setOrders(all_orders);

            calcTotal(all_orders);
        }
        fetch_orders()
    }, [dummy])

    async function submitOrder() {
        toast.loading("Proceding to checkout", { id: "checkout" });
        try {

            const userId = pb.authStore.record.id;

            const orders = await pb.collection("orders").getFullList({
                filter: `user_id = "${userId}"`,
            });

            for (const order of orders) {
                await pb.collection("orders").update(order.id, {
                    checked_out: true,
                });

                await pb.collection("checkout").create({
                    order_id: order.id,
                    status: "pending",
                });
            }


            toast.success("Order Submitted", { id: "checkout" });
        } catch (err) {
            toast.error("Failed to proceed to checkout", { id: "checkout" })
        } finally {
            setDummy(Math.random())
        }
    }

    return (
        <>
            <Toaster />
            <TopNav variation="simple" title="Shopping Cart" />

            {/* Delivery Address */}
            <div className='flex flex-col gap-[10px] w-[95%] mx-auto mt-[35px]'>
                <h3 className='flex items-center gap-2 text-xl font-semibold leading-snug '>
                    <i className='bi bi-geo-alt'></i>
                    Delivery Address
                </h3>

                {/* address */}
                <CurrentAddress />

            </div>

            {/* shopping list */}
            <div className='flex flex-col gap-[10px] w-[95%] mx-auto mt-[35px]'>
                <h3 className='flex items-center gap-2 text-xl font-semibold leading-snug '>Shopping List</h3>
                {orders.length === 0 && <Empty title="Cart empty" text="Try adding menu items to cart" />}
                {orders.map((data, index) => (
                    <SingleCheckout key={index} img={pb.files.getURL(data.expand.product_id[0], data.expand.product_id[0].product_image)} title={data.expand.product_id[0].product_name} price={data.expand.product_id[0].product_price} quantity={data.quantity} total={data.price} />
                ))}

            </div>

            <div className='pb-[190px] flex items-center justify-between  p-[20px] border-t-2 border-black mt-[25px] rounded-lg'>

                <div className='flex flex-col gap-1'>
                    <span className='text-[#f73658] font-semibold text-lg'>Total:</span>
                    <span className=' font-bold text-[23px]'>{orderTotal.toLocaleString()} RWF</span>
                </div>

                <button onClick={() => submitOrder()} disabled={orders.length === 0} className='w-[150px] h-12 text-center text-white text-[20px] font-semibold bg-[#f73658] rounded-[5px]'>Checkout</button>
            </div>


            <BottomNav />
        </>
    )
}
