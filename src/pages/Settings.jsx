import { useRef, useState } from "react";
import BottomNav from "../components/BottomNav";
import FormInput from "../components/FormInput";
import TopNav from "../components/TopNav";
import pb from "../utils/pocketbase";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Settings() {

    const { handleSubmit } = useForm();

    const user_data = pb.authStore.record;

    // personal details states
    const [fname, setFname] = useState(user_data.fname);
    const [lname, setLname] = useState(user_data.lname);
    const [phone, setPhone] = useState(user_data.phone);
    const [email, setEmail] = useState(user_data.email);
    const [pswd, setPswd] = useState("");
    const [confirmPswd, setConfrimPswd] = useState("");

    // address states
    const [province, setProvince] = useState(user_data.province);
    const [district, setDistrict] = useState(user_data.district);
    const [address, setAddress] = useState(user_data.address);

    const [avatar, setAvatar] = useState(pb.files.getURL(user_data, user_data.avatar));
    const [profileImg, setProfileImg] = useState();
    function handleAvatarChange(e) {
        const file = e.target.files[0];

        if (file) {
            setProfileImg(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    async function updateProfile() {
        toast.loading("Updating Profile", { id: "update" });

        const update_data = {
            fname: fname,
            lname: lname,
            address: address,
            district: district,
            phone: phone,
            province: province,
            avatar: profileImg
        }

        // return console.log(update_data)

        try {
            await pb.collection("users").update(user_data.id, update_data);

            toast.success("Profile Updated", { id: "update" })
        } catch (err) {
            toast.error("Failed to update profile", { id: "update" })
        }
    }

    return (
        <>
            <Toaster />
            <TopNav variation="simple" title="Settings" />

            <form onSubmit={handleSubmit(updateProfile)} className="mt-[35px] mb-[130px]">
                <div className="relative flex items-center justify-center w-[150px] h-[150px] mx-auto">
                    <img className="object-cover w-full h-full rounded-full shadow-lg" src={avatar} alt="Profile image" width={150} height={150} />
                    <input id="profile_inp" type="file" onChange={handleAvatarChange} hidden />
                    <i onClick={() => document.getElementById("profile_inp").click()} accept="image/*" className="absolute bottom-0 right-2 bi bi-pencil bg-[#4291f9] text-white w-[45px] h-[45px] text-[24px] rounded-full flex items-center justify-center border-[3px] border-white"></i>
                </div>

                <section className="flex flex-col gap-[23px] px-[25px] mt-[40px]">
                    <h3 className="text-[24px] font-semibold">Personal Details</h3>

                    <FormInput label="First Name" id="fname" type="text" placeholder="John" value={fname} setValue={setFname} />
                    <FormInput label="Last Name" id="lname" type="text" placeholder="Doe" value={lname} setValue={setLname} />
                    <FormInput label="Phone Number" id="phone" type="text" placeholder="07********" value={phone} setValue={setPhone} />
                    {/* <FormInput label="Email Address" id="email" type="email" placeholder="you@example.com" value={email} setValue={setEmail} /> */}
                    {/* <FormInput label="Password" id="pswd" type="password" placeholder="************" value={pswd} setValue={setPswd} /> */}
                    {/* <FormInput label="Confirm Password" id="confrim-pswd" type="password" placeholder="************" value={confirmPswd} setValue={setConfrimPswd} /> */}
                </section>

                <hr className="border border-black/20 w-[88%] mx-auto my-[40px]" />

                <section className="flex flex-col gap-[23px] px-[25px]">
                    <h3 className="text-[24px] font-semibold">Address Details</h3>

                    <FormInput label="Province" id="province" type="text" placeholder="Kigali" value={province} setValue={setProvince} />
                    <FormInput label="District" id="district" type="text" placeholder="Kicukiro" value={district} setValue={setDistrict} />
                    <FormInput label="Address Line" id="address" type="text" placeholder="KK9, Nyanza, Gare" value={address} setValue={setAddress} />
                </section>

                <div className="flex items-center justify-center mt-[20px]">
                    <button type="submit" className="w-[90%] transition-all hover:bg-[#f73658]/80 h-[50px] text-[22px] font-semibold bg-[#f73658] text-white rounded-[10px]">Save</button>
                </div>

            </form>

            <BottomNav />
        </>
    )
}
