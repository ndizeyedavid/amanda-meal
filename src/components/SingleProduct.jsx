import { useState } from "react";
import OrderOverlay from "./OrderOverlay";

export default function SingleProduct({ id, size, fav, image, title, price, setRefreshCart }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full h-fit border border-gray-700 rounded-lg shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] overflow-hidden">

            {/* Add to favourite */}
            {fav &&
                <button className="absolute bg-[#ff94a8] w-[70px] flex items-center justify-end px-5 h-[40px] left-[-18px] top-[0px] rounded-[0px_0px_20px_0]">
                    <i className={`text-[20px] bi bi-heart${fav ? "-fill text-[#ea3030]" : " "}`}></i>
                </button>
            }

            <img src={image} className="w-full h-[196px] object-cover rounded-lg aspect-square" alt={image + " Image"} />

            <div className="relative flex flex-col gap-2 p-2 pb-7">
                <h3 className={`leading-tight  ${size == "search" ? "text-[22px] font-bold" : "font-bold text-2xl"}`}>{title}</h3>
                <span className={`leading-none  ${size == "search" ? "text-[21px] font-semibold" : "font-medium text-lg"}`}>{price.toLocaleString()} RWF</span>

                <div className="absolute flex items-end justify-end -right-2 -bottom-3">
                    <button id="cart" onClick={() => setOpen(true)} className="flex items-start justify-start w-[55px] h-[55px] pr-8 pl-3 bg-[#ffde16] rounded-xl shadow-md">
                        <i className="bi bi-basket text-[25px]"></i>
                    </button>
                </div>
            </div>

            {/* Order overlay */}
            {open ? <OrderOverlay id={id} title={title} unitPrice={price} close={() => setOpen(false)} setRefreshCart={setRefreshCart} /> : null}

        </div>
    )
}
