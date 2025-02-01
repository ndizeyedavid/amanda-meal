import BottomNav from "../components/BottomNav";
import SingleOrder from "../components/SingleOrder";
import TopNav from "../components/TopNav";

export default function Orders() {
    return (
        <>
            <TopNav variation="simple" title="Orders" />

            <div className="mt-[35px] flex flex-col gap-5 mb-[150px]">
                <SingleOrder img="/assets/images/products/p-4.webp" title="Sweet curly Pancakes" status="pending" quantity="2" price="9,000 RWF" />
                <SingleOrder img="/assets/images/products/p-1.webp" title="Double deluxe burgar" status="deliverying" quantity="5" price="24,000 RWF" />
                <SingleOrder img="/assets/images/products/p-7.jpg" title="Seasoned Fruit Salad" status="cancled" quantity="1" price="2,500 RWF" />
            </div>

            <BottomNav />
        </>
    )
}
