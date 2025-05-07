import React, { useState } from 'react'
import { useProductStore } from '../store/product.store'

const Create = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    })

    const { createProduct } = useProductStore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        createProduct(newProduct)
            setNewProduct({
                name:'',
                price:'',
                image:"",
            })
        
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-70'>
                <form className='flex flex-col gap-2'>

                    <label className='text-cyan-600 font-bold text-2xl'>Name:</label>
                    <input 
                    type="text"
                    placeholder='Product Name'
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className='border border-zinc-400 text-white rounded p-1'
                    maxLength={18}
                    />

                    <label className='text-cyan-600 font-bold text-2xl'>Price:</label>
                    <input 
                    type="Number"
                    placeholder='Product Price'
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className='border border-zinc-400 text-white rounded p-1'
                    />

                    <label className='text-cyan-600 font-bold text-2xl'>Image:</label>
                    <input 
                    type="text"
                    placeholder='Product URL'
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value  })}
                    className='border border-zinc-400 text-white rounded p-1'
                    />

                    <button onClick={handleSubmit} className=''><strong className='border border-zinc-400 rounded text-cyan-600 hover:bg-[#1E232E] cursor-pointer p-1'>Add product</strong></button>
                </form>
            </div>
        </div>
    )
}

export default Create;