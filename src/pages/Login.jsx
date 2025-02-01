import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    return (
        <>
            <section className='flex flex-col gap-[30px] w-[90%] mx-auto mt-[150px]'>
                <h1 className='text-[50px] leading-[45px] font-bold'>Welcome<br />Back!</h1>

                <form className='flex flex-col gap-[40px]'>
                    <div className='relative flex items-center bg-[#f3f3f3] h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px] bi bi-person-fill'></i>
                        <input type="text" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Username or Email' />
                    </div>

                    <div className='relative flex items-center bg-[#f3f3f3] h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px]  bi bi-lock-fill'></i>
                        <input type="password" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Password' />
                        <i className='absolute right-[10px] text-[#616161] text-[30px] bi bi-eye'></i>
                    </div>
                    <a href="#" className='relative w-full text-right bottom-6 text-[#f73658] text-[20px] hover:text-[#f73658]/80'>Forgot Password?</a>

                    <button type='button' onClick={() => navigate("/")} className='relative bottom-7 w-[87%] text-white flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80'>Login</button>

                    <span className='text-[20px] mx-auto relative bottom-6'>Don't Have An Account? <Link to="/signup" className='text-[#f73658] font-semibold hover:text-[#f73658]/80'>Sign Up</Link></span>
                </form>

            </section>
        </>
    )
}
