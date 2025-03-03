import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import pb from '../utils/pocketbase';

export default function Signup() {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);

    async function registerUser(data) {

        setLoading(true);
        toast.loading("Creating new account", { id: "register" });


        try {
            if (data.password !== data.confirm_password) return toast.error("Passowrd doesn't match", { id: "register" });
            const newUserData = {
                password: data.password,
                passwordConfirm: data.confirm_password,
                email: data.email
            }

            await pb.collection("users").create(newUserData);

            toast.success("Account created. Now Login", { id: "register" });
            navigate("/login");
            reset()
        } catch (err) {
            toast.error("Failed to create new account", { id: "register" });
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <Toaster />
            <section className='flex flex-col gap-[30px] w-[90%] h-screen mx-auto pt-[120px]'>
                <h1 className='text-[50px] leading-[45px] font-bold'>Create an<br />Account</h1>

                <form onSubmit={handleSubmit(registerUser)} className='flex flex-col gap-[40px]'>
                    <div className='relative flex items-center h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px] bi bi-person-fill'></i>
                        <input disabled={loading} type="text" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Email' {...register("email")} />
                    </div>

                    <div className='relative flex items-center h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px]  bi bi-lock-fill'></i>
                        <input disabled={loading} type="password" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Password' {...register("password")} />
                        <i className='absolute right-[10px] text-[#616161] text-[30px] bi bi-eye'></i>
                    </div>

                    <div className='relative flex items-center h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px]  bi bi-lock-fill'></i>
                        <input disabled={loading} type="password" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Confirm Password' {...register("confirm_password")} />
                        <i className='absolute right-[10px] text-[#616161] text-[30px] bi bi-eye'></i>
                    </div>

                    <span className=' relative w-full bottom-2 text-[20px]'>By clicking the <span href="#" className='text-[#f73658]'>Create Account</span> button, you agree to the public offer</span>

                    <button disabled={loading} className='relative bottom-3 w-[87%] text-white flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80'>{!loading ? "Create Account" : "Loading..."}</button>

                    <span className='text-[20px] mx-auto relative bottom-2'>Already have an account? <Link to="/login" className='text-[#f73658] font-semibold hover:text-[#f73658]/80'>Login</Link></span>
                </form>

            </section>
        </>
    )
}
