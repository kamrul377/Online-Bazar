import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { Skeleton } from '@mui/material'
import Loading from '../utility/Loading'

const serverUrl = 'https://bazar-kori.vercel.app'

const AllProducts = ({ singleItem }) => {

    const [allProducts, setAllProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true)

        const getAllProducts = async () => {
            await axios.get(`${serverUrl}/products`).then((res) => {
                setAllProducts(res.data)
                setLoading(true)
            }).catch((err) => {
                setError(err)
            })
        }

        getAllProducts()


    }, [singleItem])

    // console.log(allProducts)

    return (

        <>
            <div className='bg-background pt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* {singleItem} */}


                {
                    allProducts && allProducts.map((products, i) => {

                        return (
                            <div key={i}>
                                <SingleProduct {...products} />
                            </div>
                        )
                    })

                }

            </div>

        </>
    )
}

export default AllProducts