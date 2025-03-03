import { motion } from "framer-motion"

import { useState } from "react"
import { useForm } from "react-hook-form";
import pb from "../utils/pocketbase";
import toast from "react-hot-toast";
import { Banknote, Wallet } from "lucide-react";

export default function OrderOverlay({ id, title, unitPrice, close, setRefreshCart }) {

    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit } = useForm();

    const overlayVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            scale: 0.8,
            opacity: 0
        }
    };

    const fillVariants = {
        initial: { height: 0 },
        animate: {
            height: "100%",
            transition: { duration: 0.2, ease: "easeOut" }
        }
    };

    const calcPrice = (unitPrice) => {
        const price = Number(unitPrice) * quantity;
        return price.toLocaleString();
    }

    async function addOrder(data) {
        const orderDetails = {
            user_id: pb.authStore.record.id,
            product_id: [
                id
            ],
            quantity: quantity,
            price: quantity * unitPrice
        }

        try {
            toast.loading("Adding order to cart", { id: "order" });

            await pb.collection("orders").create(orderDetails);

            toast.success("Product Added To Cart", { id: "order" });
        } catch (err) {
            toast.error("Failed to add order to cart", { id: "order" })
        } finally {
            close();
            setRefreshCart(Math.random())
        }

    }

    return (
        <motion.div
            className="absolute bottom-0 w-full h-full"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                variants={fillVariants}
                className="absolute bottom-0 w-full bg-[#1f2020]/95 backdrop-blur-[100px] origin-bottom"
            />

            <motion.form
                variants={overlayVariants}
                onSubmit={handleSubmit(addOrder)}
                className="relative flex flex-col items-center justify-center w-full h-full"
            >
                <button type="button" className="absolute text-2xl text-white right-3 top-3 float-end" onClick={close}>X</button>

                <div className="flex flex-col items-center gap-3 mt-[30px]">
                    <div className="text-center">
                        <h3 className="text-2xl leading-[20px] text-white font-semibold">{title}</h3>
                    </div>

                    <div className="flex items-center border border-black rounded-[30px] overflow-hidden">
                        <button type="button" className="text-[20px] bg-red-300 p-3" onClick={() => quantity != 1 ? setQuantity(quantity - 1) : null}>-</button>
                        <input id="quantity" className="w-[70px] h-full text-center text-[30px]" value={quantity} readOnly />
                        <button type="button" className="text-[20px] bg-green-300 p-3" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full space-y-5 text-center">
                        {/* <input type="hidden" value={calcPrice(unitPrice)} readOnly {...register("total")} /> */}
                        <p className="text-[20px] text-white flex items-center gap-2"><Wallet size={30} /> <span className="font-semibold">{calcPrice(unitPrice)} RWF</span></p>

                        <button type="submit" className="w-full flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80 text-white">Order</button>
                    </div>

                </div>

            </motion.form>
        </motion.div>
    )
}
