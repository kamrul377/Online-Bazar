import React, { useState } from 'react'
import FilterCategorys from './FilterCategorys'
import AllProducts from './AllProducts.jsx'



const Products = () => {
  const [singleItem, setSingleItem] = useState("Fruits & Vegetables")

  // console.log(singleItem)


  return (
    <div className='flex'>
      <FilterCategorys setSingleItem={setSingleItem} />
      <AllProducts singleItem={singleItem} />
    </div>
  )
}

export default Products