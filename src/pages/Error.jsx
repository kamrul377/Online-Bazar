import React from 'react'
import error from '../assets/error.png'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='h-screen w-full bg-white flex justify-center items-center flex-col' >

            <img src={error} alt="" className='w-1/2' />
            <Link to={'/'} className='text-[#333]  hover:text-black text-2xl my-3 underline'> Go to home </Link>

        </div>
    )
}

export default Error