import React, { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import { useProductStore } from '../store/product.store'

const Homepage = () => {

    const {products, setProducts} = useProductStore();

    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])
  
    return (
        <div>
            <div className="font-bold text-cyan-600 text-3xl flex justify-center">
                <h1 className='mb-6'>Products</h1>
            </div>
            <div className='grid grid-cols-5 gap-20'>
                {products && products.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Homepage;