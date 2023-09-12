import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {

    const [file, setFile] = useState(null)
    const [fileShow, setFileShow] = useState(null)
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        color: '',
        rating: '',
        category: '',

    })
    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('description', product.description)
    formData.append('color', product.color)
    formData.append('rating', product.rating)
    formData.append('category', product.category)
    formData.append('image', file)

    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                [name]: value
            }
        })
    }
    const handleFile = (e) => {
        setFile(e.target.files[0])
        setFileShow(URL.createObjectURL(e.target.files[0]))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            await axios.post('http://localhost:3004/products', formData).then((res) => {
                console.log(res.data.message)
                toast.success(res.data.message)

                setProduct({
                    name: '',
                    price: '',
                    description: '',
                    color: '',
                    rating: '',
                    category: '',
                })
                setFile(null)
                setFileShow(null)
                setLoading(false)


            }).catch((error) => {
                console.log(error.message)
            })

        } catch (error) {
            console.log("error while trying to post")
        }
    }

    return (
        <div className='bg-white h-screen w-full flex justify-center items-center shadow rounded '>

            <div className='bg-whtie border w-2/3 p-8 hover:border-purple-900 dura'>
                <h1 className='text-3xl font-bold text-center '>Dashboard</h1>
                {loading && <h1> loading.. </h1>}
                <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-3 my-4
                '>
                    <input onChange={handleChange} value={product.name} type="text" placeholder='name: ' name='name' required />

                    <input onChange={handleChange} value={product.price} type="text" placeholder='Price: ' name='price' required />

                    <input onChange={handleChange} value={product.description} type="text" placeholder='Description: ' name='description' />

                    <input onChange={handleChange} value={product.color} type="text" placeholder='Color: ' name='color' required />

                    <input onChange={handleChange} value={product.rating} type="text" placeholder='Rating: ' name='rating' required />

                    <input onChange={handleChange} value={product.category} type="text" placeholder='Category: ' name='category' required />

                    <input onChange={handleFile} type="file" name="image" id="" required />
                    {
                        file && <img src={fileShow} alt="" className='h-20 w-20 object-cover rounded-full ring-2' />
                    }
                    <button className='bg-purple-700 hover:bg-purple-900 transition-colors px-10 py-3 text-white rounded'>{loading ? <p className='cursor-not-allowed'>creating..</p> : 'Create Product'}</button>
                </form>
            </div>


            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        </div>
    )
}

export default Dashboard