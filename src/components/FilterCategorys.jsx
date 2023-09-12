import React, { useState } from 'react'
import { CiApple } from 'react-icons/ci'
import { BsCupHot } from 'react-icons/bs'
import { GiAnglerFish } from 'react-icons/gi'
import { GiBowlOfRice } from 'react-icons/gi'
import { GiVacuumCleaner } from 'react-icons/gi'
import { GiCookingPot } from 'react-icons/gi'
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md'
import { GiHealthPotion } from 'react-icons/gi'


import Category from '../components/Category'

const category = [
    {
        id: 1,
        icon: <CiApple size={20} />,
        text: "Fruits & Vegetables",
        childs: [
            "Fruits", "Vegetables"
        ]
    },
    {
        id: 2,
        icon: <BsCupHot size={20} />,
        text: "Meat & Fish",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 3,
        icon: <GiAnglerFish size={20} />,
        text: "Snacks",
        childs: [
            "Nuts & Biscuits", "Chocolates", "Crisps", "Noodles & Pasta", "Sauce", "Soup"
        ]
    },
    {
        id: 4,
        icon: <GiVacuumCleaner size={20} />,
        text: "Pet Care",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 5,
        icon: <GiBowlOfRice size={20} />,
        text: "Home & Cleaning",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 6,
        icon: <CiApple size={20} />,
        text: "Dairy",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 7,
        icon: <GiHealthPotion size={20} />,
        text: "Cooking",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 8,
        icon: <CiApple size={20} />,
        text: "Breakfast",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 9,
        icon: <MdOutlineEmojiFoodBeverage size={20} />,
        text: "Beverage",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
    {
        id: 10,
        icon: <GiCookingPot size={20} />,
        text: "Health & Beauty",
        childs: [
            "Fresh Fish", "Meat"
        ]
    },
]

const FilterCategorys = ({ setSingleItem }) => {

    const [openSubCategory, setOpenSubCategory] = useState(false)


    return (
        <>
            <div className='bg-white sticky top-0 left-0 w-[23rem] p-3 max-h-screen overflow-y-scroll'>
                {
                    category?.map((c, i) => {
                        return (
                            <Category key={i} icon={c.icon} text={c.text} childs={c.childs} setSingleItem={setSingleItem} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default FilterCategorys