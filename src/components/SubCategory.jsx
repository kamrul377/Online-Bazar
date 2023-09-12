import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SubCategory = ({ childs, setSingleItem }) => {

    const [active, setActive] = useState(false)
    const handleSubCategoryClick = (item) => {
        setSingleItem(item)
        setActive(true)
    }
    // console.log(childs)
    return (
        <div>
            {
                childs?.map((item, i) => {
                    return <div key={i} className='bg-white pl-2'>
                        <Link onClick={() => handleSubCategoryClick(item)} className={`hover:text-primary`}> → {item} </Link>
                    </div>
                })
            }

        </div>
    )
}

export default SubCategory