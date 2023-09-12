import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Faq = ({ id, qst, ans }) => {
    const [open, setOpen] = useState(false)
    const [openId, setOpenId] = useState(null)

    const handleOpen = (e) => {
        setOpen(!open)

    }


    // console.log(id, openId)

    return (
        <div className='bg-white border rounded-md hover:border-primary shadow-sm max-w-4xl mx-auto mt-10 my-3 cursor-pointer'>
            <div onClick={() => handleOpen(id)} className="qtext-[#444] flex justify-between text-xl font-bold cursor-pointer p-5">
                <p> {qst}</p>
                <RiArrowDownSLine className={`${open ? "rotate-180" : null}`} />
            </div>

            {
                open && <div className="ans mt-6 p-5 pt-0 cursor-text">
                    <p className='text-secondary text-lg'>{ans}</p>
                </div>
            }
        </div>
    )
}

export default Faq