import React, { useState } from 'react'
import apple from '../assets/apple.jpg'
import { RiAddFill } from 'react-icons/ri'
import { AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SingleProduct = ({ name, price, image, rating, color }) => {


    const [quantity, setQuantity] = useState(0)
    return (
        <>
            <div className='border bg-white p-5 max-h-[33rem] rounded duration-300 hover:translate-y-[-10px]'>

                <Link to={`/product-details/${name}`}>
                    <img src={image} alt="apple" className='w-full h-60 object-cover' />
                    <div className="price flex">
                        <p className='text-slate-700 text-xl font-bold'>${price}</p> <del className='text-lg text-slate-600 ml-5'>${price + 50}</del>
                    </div>
                    <p className='text-2xl font-bold text-slate-800'>{name}</p>
                </Link>

                <div className={`group transition-colors rounded border hover:bg-primary hover:text-white text-[#333] hover:cursor-pointer flex justify-between items-center h-12 mt-8 ${quantity >= 1 ? 'bg-primary text-white' : 'bg-slate-100 text-[#333]'}`}>

                    {
                        quantity >= 1 && <div onClick={() => setQuantity(quantity - 1)} className={`icon {quantity!==0 ? "bg-primary":"!bg-slate-200" } group-hover:bg-[#1f5a52]  h-full flex items-center px-3 rounded`}>
                            <AiOutlineMinus />
                        </div>
                    }

                    <p className=' w-full text-center text-xl'>
                        {quantity ? quantity : "Add"}
                    </p>

                    <div onClick={() => setQuantity(quantity + 1)} className={`icon ${quantity !== 0 ? "bg-primary" : "bg-slate-200"} group-hover:bg-[#1f5a52] h-full flex items-center px-3 rounded transition-colors`}>
                        <RiAddFill />
                    </div>
                </div>
            </div>

        </>

    )
}

export default SingleProduct