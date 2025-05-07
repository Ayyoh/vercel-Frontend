import React from 'react'
import { Link } from 'react-router-dom';
import { LuClipboardPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <div>
        <div className='shadow bg-[#1e232e] w-full h-20 flex justify-center items-center'>
            <div className='font-bold text-2xl flex gap-300 text-cyan-600'>
                <Link to='/'>
                    <h1>Products Store</h1>
                </Link>
                <Link to='/create'>
                    <h1><LuClipboardPlus size={40}/></h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;