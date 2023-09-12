import React, { useEffect, useRef, useState } from 'react'

// logo
import logo from '../assets/bazarkori.png'
// react-icons
import { CiApple } from 'react-icons/ci'
import { ImBooks } from 'react-icons/im'
import { MdBakeryDining } from 'react-icons/md'
import { BiSolidShoppingBags } from 'react-icons/bi'
import { GiClothes } from 'react-icons/gi'
import { MdArrowDropDown } from 'react-icons/md'


// import { Button, Select } from 'semantic-ui-react'

import Dropdown from '../utility/Dropdown'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    let menuRef = useRef()
    const pathName = window.location.pathname;

    const [click, setClick] = useState(false)
    const [icon, setIcon] = useState(<CiApple />)
    const [text, setText] = useState("Grocery")


    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setClick(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.addEventListener('mousedown', handler)
        }
    })

    const activeLinkStyle = {
        fontWeight: 'bold',
        color: '#f00', // Change the color as needed
    };

    return (
        <div className='w-full bg-white flex justify-between items-center h-28 px-7 absolute top-0 left-0'>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt={logo} className='w-48' />
                </Link>
            </div>
            <div className="menu relative">

                <button onClick={() => setClick(!click)} className='bg-white px-4 flex items-center gap-3 text-2xl text-primary rounded  py-2 border border-primary'>
                    {icon}
                    <span>{text}</span>
                    {click ? <MdArrowDropDown className='rotate-180 duration-500' /> : <MdArrowDropDown className='duration-500' />}
                </button>

                <div className='absolute left-0 top-20' ref={menuRef}>
                    {click && <Dropdown setIcon={setIcon} setText={setText} />}
                </div>

            </div>
            <div className="search-bar"></div>
            <div className="menu-items">
                <ul className='flex gap-7 text-lg'>

                    <NavLink to='/shops' className={(state) => state.isActive ? "text-primary font-bold duration-200 border-primary" : null} >Shops</NavLink>

                    <NavLink to='/offer' className={(state) => state.isActive ? "text-primary font-bold duration-200" : null}>Offers</NavLink>

                    <NavLink to='/help' className={(state) => state.isActive ? "text-primary font-bold duration-200" : null}>FAQ</NavLink>

                    <NavLink to="/contact" className={(state) => state.isActive ? "text-primary font-bold duration-200" : null}>Contact</NavLink>

                </ul>
            </div>
            <div className="nav-buttons flex gap-3">
                <button className='bg-primary px-4 py-3 rounded shadow text-[#f7f7f7] font-bold transition-colors hover:bg-primaryHover'> Become a Seller</button>
                <button className='bg-primary px-4 py-3 rounded shadow text-[#f7f7f7] font-bold transition-colors hover:bg-primaryHover' > Join</button>


            </div>
        </div>
    )
}
