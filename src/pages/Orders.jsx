import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import SingleOrder from "../components/SingleOrder";
import TopNav from "../components/TopNav";
import pb from "../utils/pocketbase";
import Empty from "../components/Empty";

export default function Orders() {

    const [orders, setOrders] = useState([]);
    const [dummy, setDummy] = useState([]);
    useEffect(() => {
        async function fetch_orders() {
            const fetched_orders = await pb.collection("checkout").getFullList({
                expand: "order_id,order_id.user_id,order_id.product_id"
            });

            setOrders(fetched_orders)
            // console.log(fetched_orders[0].expand.)
        }

        fetch_orders()
    }, [dummy]);

    return (
        <>
            <TopNav variation="simple" title="Orders" />

            <div className="mt-[35px] flex flex-col gap-5 pb-[150px] w-[95%] mx-auto">
                {orders.length === 0 && <Empty title="No items purchased yet" text="Check your cart and proceed to checkout" />}
                {orders.map((data, index) => (
                    <SingleOrder key={index} setDummy={setDummy} id={data.id} order_id={data.order_id} img={pb.files.getURL(data.expand.order_id.expand.product_id, data.expand.order_id.expand.product_id.product_image)} title={data.expand.order_id.expand.product_id.product_name} status={data.status} quantity={data.expand.order_id.quantity} price={data.expand.order_id.price} />
                ))}

            </div>

            <BottomNav />
        </>
    )
}
