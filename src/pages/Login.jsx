import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pb from "../utils/pocketbase";
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm()

    async function login(data) {
        setLoading(true);
        toast.loading("Signing in...", { id: "login" });
        try {
            await pb.collection('users').authWithPassword(data.email, data.password);

            toast.success("Authenticating " + data.email, { id: "login" });
            navigate("/")
        } catch (err) {
            toast.error("Access Denied", { id: "login" });
        } finally {
            setLoading(false);
            // reset();
        }
    }

    return (
        <>
            <Toaster />
            <section className='flex flex-col h-screen gap-[30px] w-[90%] mx-auto pt-[150px]'>
                <h1 className='text-[50px] leading-[45px] font-bold'>Welcome<br />Back!</h1>

                <form onSubmit={handleSubmit(login)} className='flex flex-col gap-[40px]'>
                    <div className='relative flex items-center h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px] bi bi-person-fill'></i>
                        <input disabled={loading} type="text" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Email' {...register('email')} />
                    </div>

                    <div className='relative flex items-center h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px]  bi bi-lock-fill'></i>
                        <input disabled={loading} type="password" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Password' {...register("password")} />
                        <i className='absolute right-[10px] text-[#616161] text-[30px] bi bi-eye'></i>
                    </div>
                    <a href="#" className='relative w-full text-right bottom-6 text-[#f73658] text-[20px] hover:text-[#f73658]/80'>Forgot Password?</a>

                    <button disabled={loading} type='submit' className='relative bottom-7 w-[87%] text-white flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80'>{loading ? "Loading" : "Login"}</button>

                    <span className='text-[20px] mx-auto relative bottom-6'>Don't Have An Account? <Link to="/signup" className='text-[#f73658] font-semibold hover:text-[#f73658]/80'>Sign Up</Link></span>
                </form>

            </section>
        </>
    )
}
