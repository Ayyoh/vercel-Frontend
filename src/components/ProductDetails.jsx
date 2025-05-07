import React, { useEffect, useState } from 'react'
import { useProductStore } from '../store/product.store'
import { MdDeleteSweep } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";

const ProductDetails = ({ product }) => {
  
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDelete = async () => {
    deleteProduct(product._id)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [updatedProduct, setUpdatedProduct] = useState(product)

  const handleUpdateProduct = async (_id, updatedProduct) => {

    await updateProduct(_id, updatedProduct);
    setIsOpen(false)
  }

  return (
    <div>
        <div className='font-bold bg-[#1E232E] shadow  w-70 h-90 flex flex-col gap-6 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out'>
            <img src={product.image} className='w-full h-40 rounded-t-2xl' alt="" />
            <div className='flex flex-col gap-2 items-start py-2 px-6'>
              <div className='w-full'>
                <h4 className='text-2xl text-white'>{product.name}</h4>
              </div>
              <p className='text-3xl text-white'>${product.price}</p>
              <div className='flex gap-4 mt-2'>
                <button onClick={() => setIsOpen(true)} className="cursor-pointer "><IoIosCreate size={20} className='bg-cyan-400 rounded w-12 h-12 p-2' /></button>
                <button onClick={handleDelete}><MdDeleteSweep size={20} className='bg-red-300 p-2 cursor-pointer rounded w-12 h-12'/></button>
              </div>
            </div>
        </div>
        {isOpen && (
          <div className='flex justify-center items-center'>
              <div className='bg-[#2D3646] w-[30rem] h-[26rem] absolute top-[8rem] right-[45.1rem] z-50'>
                <form className='flex flex-col p-6'>

                  <div className="flex justify-center"><label className="text-3xl font-bold text-cyan-600 mb-2">Update Product</label></div>
                  <label className="text-2xl font-bold text-cyan-600 mb-2">Name</label>
                  <input 
                  type="text" 
                  placeholder='Product Name'
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  className="text-white border border-zinc-400 rounded-md p-2"
                  />

                  <label className="text-2xl font-bold text-cyan-600 mb-2">Price</label>
                  <input 
                  type="Number" 
                  placeholder='Product Price'
                  value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  className="text-white border border-zinc-400 rounded-md p-2"
                  />

                  <label className="text-2xl font-bold text-cyan-600 mb-2">Image</label>
                  <input 
                  type="text" 
                  placeholder='Product URL'
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  className="text-white border border-zinc-400 rounded-md p-2"
                  />

                <div className="flex gap-2 absolute right-10 bottom-6">
                  <button onClick={() => handleUpdateProduct(product._id, updatedProduct)} className='border border-cyan-600 bg-cyan-500 cursor-pointer rounded-md text-lg font-bold p-2 text-white'>Update</button>
                  <button onClick={() => setIsOpen(false)} className='text-xl font-bold p-1 text-white hover:bg-[#465060] rounded-lg transition-all duration-300 cursor-pointer ease-in-out'>Cancel</button>
                </div>
                </form>
              </div>
          </div>
        )}
    </div>
  )
}

export default ProductDetails;