import React from 'react'
import bg from '../assets/image.png'
import slide1 from '../assets/offer-1.png'
import slide2 from '../assets/offer-2.png'
import slide3 from '../assets/offer-3.png'
import slide4 from '../assets/offer-4.png'

import Products from '../components/Products'



const HomePage = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className='bg-background w-screen h-screen flex items-center justify-center flex-col gap-10 bg-cover bg-no-repeat bg-center border-b'>

                <p className='text-[#1f2937] font-bold text-7xl'>Groceries Delivered in 90 Minute</p>
                <p className='text-[#333] text-xl'>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>

                <div className="search flex justify-between rounded-xl w-[60%]">
                    <input type="search" name="" placeholder='Search your products from here' id="" className='w-full text-xl py-5 px-3 rounded-s-xl outline-none border focus:border-primary' />

                    <button className='bg-primary text-[#f7f7f7] px-12 py-5 font-bold text-xl rounded-e-xl hover:bg-primaryHover'> Search </button>
                </div>


            </div>

            <Carosel />

            <Products />

        </>
    )
}

export default HomePage


const Carosel = () => {
    return (
        <div className='bg-white p-10 grid grid-cols-3 gap-5 row-end-auto border-b'>
            <img src={slide1} alt="" />
            <img src={slide2} alt="" />
            <img src={slide3} alt="" />
            
        </div>
    )
}