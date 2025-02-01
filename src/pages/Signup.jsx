import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <section className='flex flex-col gap-[30px] w-[90%] mx-auto mt-[120px]'>
                <h1 className='text-[50px] leading-[45px] font-bold'>Create an<br />Account</h1>

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

                    <div className='relative flex items-center bg-[#f3f3f3] h-[57px] border-2 border-[#b5b5b5] rounded-xl'>
                        <i className='absolute left-[8px] text-[#616161] text-[30px]  bi bi-lock-fill'></i>
                        <input type="password" className='w-full text-[20px] outline-none h-full pl-[50px] bg-transparent' placeholder='Confirm Password' />
                        <i className='absolute right-[10px] text-[#616161] text-[30px] bi bi-eye'></i>
                    </div>

                    <span className='text-black/70 relative w-full bottom-2 text-[20px]'>By clicking the <span href="#" className='text-[#f73658]'>Register</span> button, you agree to the public offer</span>

                    <button className='relative bottom-3 w-[87%] text-white flex items-center justify-center rounded-lg text-[20px] font-semibold mx-auto h-[50px] bg-[#f73658] transition-all hover:bg-[#f73658]/80'>Create Account</button>

                    <span className='text-[20px] mx-auto relative bottom-2'>Already have an account? <Link to="/login" className='text-[#f73658] font-semibold hover:text-[#f73658]/80'>Login</Link></span>
                </form>

            </section>
        </>
    )
}
