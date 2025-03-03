import { Trash2 } from "lucide-react";
import pb from "../utils/pocketbase";
import toast from "react-hot-toast";

function renderStatus(status) {
    switch (status) {
        case "completed":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-green-300 text-black text-center text-[19px] font-semibold leading-snug'>Delivered</span>
        case "processing":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-blue-300 text-black text-center text-[19px] font-semibold leading-snug'>Deliverying</span>
        case "cancled":
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-red-400 text-black text-center text-[19px] font-semibold leading-snug'>Cancled</span>
        default:
            return <span className='rounded-[50px] w-fit py-1 px-5 border border-[#cacaca] bg-yellow-300 text-black text-center text-[19px] font-semibold leading-snug'>Pending</span>

    }
}

async function removeOrder(id, order_id, order, price, setDummy) {
    if (confirm(`You are about to remove "${order}" that costs "${price.toLocaleString()} RWF"`)) {
        toast.loading("Removing order...", { id: "delete" });
        try {
            await pb.collection("checkout").delete(id)
            await pb.collection("orders").delete(order_id);

            toast.success("Order removed", { id: "delete" });
        } catch (err) {
            toast.error("Unable to remove order", { id: "delete" });
        } finally {
            setDummy(Math.random());
        }
    }
}

export default function SingleOrder({ id, img, title, status, quantity, price, setDummy, order_id }) {
    return (
        <div className='relative flex border border-gray-600 flex-col gap-[13px] p-3 rounded-md shadow-[0px_6px_14px_-8px_rgba(0,0,0,0.25)]'>
            <Trash2 onClick={() => removeOrder(id, order_id, title, price, setDummy)} className="absolute p-1 overflow-visible text-red-500 rounded-full cursor-pointer right-4 top-3 hover:bg-red-100" size={40} />
            <div className='flex items-center gap-3'>
                <img src={img} className='w-[128px] h-[158px] object-cover shadow-md rounded aspect-square' width={158} height={148} alt="checkout Product image" />

                {/* details */}
                <div className='flex flex-col gap-5'>
                    <h3 className='text-[23px] font-semibold leading-snug'>{title}</h3>
                    {renderStatus(status)}
                </div>

            </div>

            <hr className='border border-[#bbbbbb] rounded-xl' />

            <div className='flex items-center justify-between'>
                <span className='text-lg font-medium leading-snug'>Total Order ({quantity}):</span>
                <span className='text-xl font-bold leading-snug text-right'>{price.toLocaleString()} RWF</span>
            </div>
            <button className="px-5 py-2 rounded-lg font-semibold text-[20px] bg-blue-400 hover:bg-blue-600 ">Track</button>

        </div>
    )
}
