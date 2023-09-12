import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

import SubCategory from '../components/SubCategory'

const Category = ({ icon, text, childs, setSingleItem }) => {

    // console.log(childs)

    const [openSub, setOpenSub] = useState(false)

    const handleSubCategory = (e) => {
        setOpenSub(!openSub)
        setSingleItem(e)
    }

    return (
        <div>
            <div onClick={() => handleSubCategory(text)} className='flex text-xl items-center  py-4 justify-between px-2 cursor-pointer hover:bg-[#f7f7f7] gap-1 bg-white group'>
                <div className='text-[#111111] group-hover:text-primary'>{icon}</div>
                <div className=' w-[90%] text-left text-[#555] font-bold pl-2 group-hover:text-primary'>{text}</div>
                <RiArrowDownSLine size={25} className={`${openSub ? "rotate-180" : null} group-hover:text-primary`} />
            </div>

            {openSub && <div className='w-full duration-500 transition-opacity bg-white'>
                <ul className='ml-10 text-[18px] font-bold text-[#666] mb-3 flex flex-col gap-2'>
                    {/* <li>Fruits</li>
                    <li>Vegetable</li> */}
                    <SubCategory childs={childs} setSingleItem={setSingleItem} />
                </ul>
            </div>}
        </div>
    )
}

export default Category

