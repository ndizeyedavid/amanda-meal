import { useState } from "react"

export default function OrderOverlay({ title, unitPrice, close }) {

    const [quantity, setQuantity] = useState(1);

    const calcPrice = (unitPrice) => {
        const price = Number(unitPrice.replace(",", "")) * quantity;
        return price;
    }

    return (
        <div className="absolute flex items-center flex-col justify-center bg-[#ffde16]/95 backdrop:blur-[100px] bottom-0 h-full w-full">
            <button className="absolute text-2xl right-3 top-3 float-end" onClick={close}>X</button>

            <div className="flex flex-col items-center gap-3 mt-[30px]">
                <div className="text-center">
                    <h3 className="text-2xl leading-[20px] font-semibold">{title}</h3>
                </div>

                <div className="flex items-center border border-black rounded-[30px] overflow-hidden">
                    <button className="text-[20px] bg-red-300 p-3" onClick={() => quantity != 1 ? setQuantity(quantity - 1) : null}>-</button>
                    <input className="w-[70px] h-full text-center text-[30px] bg-white" value={quantity} disabled />
                    <button className="text-[20px] bg-green-300 p-3" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <div className="flex flex-col items-center justify-center w-full space-y-2 text-center">
                    <p className="text-[20px]">Price: <span className="font-semibold">{calcPrice(unitPrice)} RWF</span></p>

                    <button className="w-full flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80 text-white">Order</button>
                </div>

            </div>

        </div>
    )
}
