import { useEffect, useState } from "react"
import pb from "../utils/pocketbase"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromoContainer() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetch_promo() {
            const results = await pb.collection("promos").getFullList();

            setData(results[0]);
        }

        fetch_promo();
    }, [])

    return (
        <div className="w-[95%] mx-auto mt-[34px] flex items-center justify-center">
            <div className="w-[100%] h-[189px] rounded-xl flex flex-col items-start px-5 gap-3 justify-center" style={{ backgroundImage: `url('${pb.files.getURL(data, data.promo_image)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                <h3 className="text-3xl font-bold leading-snug text-white">{data.title}</h3>

                <div className="flex flex-col gap-[4px]">
                    <span className="font-normal leading-none text-white w-[250px]">{data.description}</span>
                </div>

                <Link to={data.promo_link} className="flex items-center justify-center h-8 gap-2 p-2 mt-[5px] text-white border border-white rounded-md">
                    {data.promo_button} <ArrowRight size={20} />
                </Link>

            </div>
        </div>
    )
}
