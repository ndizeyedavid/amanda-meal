import { useState } from "react";
import BottomNav from "../components/BottomNav";
import FormInput from "../components/FormInput";
import TopNav from "../components/TopNav";

export default function Settings() {

    // personal details states
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");

    // address states
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
            <TopNav variation="simple" title="Settings" />

            <div className="mt-[35px] mb-[130px]">
                <div className="relative flex items-center justify-center w-[150px] h-[150px] mx-auto">
                    <img className="object-cover w-full h-full rounded-full shadow-lg" src="/assets/images/users/1.png" alt="Profile image" width={150} height={150} />
                    <i className="absolute bottom-0 right-2 bi bi-pencil bg-[#4291f9] text-white w-[45px] h-[45px] text-[24px] rounded-full flex items-center justify-center border-[3px] border-white"></i>
                </div>

                <section className="flex flex-col gap-[23px] px-[25px] mt-[40px]">
                    <h3 className="text-[24px] font-semibold">Personal Details</h3>

                    <FormInput label="First Name" id="fname" type="text" placeholder="John" value={fname} setValue={setFname} />
                    <FormInput label="Last Name" id="lname" type="text" placeholder="Doe" value={lname} setValue={setLname} />
                    <FormInput label="Phone Number" id="phone" type="text" placeholder="07********" value={phone} setValue={setPhone} />
                    <FormInput label="Email Address" id="email" type="email" placeholder="you@example.com" value={email} setValue={setEmail} />
                    <FormInput label="Password" id="pswd" type="password" placeholder="************" value={pswd} setValue={setPswd} />
                </section>

                <hr className="border border-black/20 w-[88%] mx-auto my-[40px]" />

                <section className="flex flex-col gap-[23px] px-[25px]">
                    <h3 className="text-[24px] font-semibold">Address Details</h3>

                    <FormInput label="Province" id="province" type="text" placeholder="Kigali" value={province} setValue={setProvince} />
                    <FormInput label="District" id="district" type="text" placeholder="Kicukiro" value={district} setValue={setDistrict} />
                    <FormInput label="Address Line" id="address" type="text" placeholder="KK9, Nyanza, Gare" value={address} setValue={setAddress} />
                </section>

                <div className="flex items-center justify-center mt-[20px]">
                    <button className="w-[90%] transition-all hover:bg-[#f73658]/80 h-[50px] text-[22px] font-semibold bg-[#f73658] text-white rounded-[10px]">Save</button>
                </div>

            </div>

            <BottomNav />
        </>
    )
}
