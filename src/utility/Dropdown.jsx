import React from 'react'

import { CiApple } from 'react-icons/ci'
import { ImBooks } from 'react-icons/im'
import { MdBakeryDining } from 'react-icons/md'
import { BiSolidShoppingBags } from 'react-icons/bi'
import { GiClothes } from 'react-icons/gi'
import { MdArrowDropDown } from 'react-icons/md'


const menuItems = [
    {
        key: 1,
        icon: <CiApple />,
        text: "Grocery",
        value: "Grocery",
    },
    {
        key: 2,
        icon: <MdBakeryDining />,
        text: "Bakery",
        value: "Bakery"
    },
    {
        key: 3,
        icon: <CiApple />,
        text: "Makeup",
        value: "Makeup"
    },
    {
        key: 4,
        icon: <BiSolidShoppingBags />,
        text: "Bags",
        value: "Bags"
    },
    {
        key: 5,
        icon: <GiClothes />,
        text: "Clothing",
        value: "Clothing"
    },
    {
        key: 6,
        icon: <CiApple />,
        text: "Furniture",
        value: "Furniture"
    },
    {
        key: 7,
        icon: <CiApple />,
        text: "Daily Needs",
        value: "Daily Needs"
    },
    {
        key: 8,
        icon: <ImBooks />,
        text: "Books",
        value: "Books"
    },
]


const Dropdown = ({setIcon,setText}) => {

    const handleItem = (item) => {
        // console.log(setIcon)
        // console.log(setText)
        setText(item.text)
        setIcon(item.icon)
    }

    return (
        <div className=' px-4 w-[15rem] py-1 h-[20rem] overflow-y-scroll rounded shadow bg-white '>
            {
                menuItems?.map((item, index) => {
                    return <div key={index} onClick={() => handleItem(item)} className='bg-white px-4 flex items-center gap-3 text-2xl text-secondary rounded  py-1 hover:text-primary hover:cursor-pointer my-3'>
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                })
            }
        </div>
    )
}

export default Dropdown