import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar bg-base-300 shadow-lg '>
        <div className='flex-1'>
            <p className='mr-3 ml-4 text-3xl'><FaLaptopCode /></p>
            <a href='/' className='normal-case text-xl font-bold'>Drew Barton</a>
        </div>
        <div className='flex-none'>
            <div className='menu menu-horizontal p-0'>
                <a href='/' className='btn btn-ghost text-xl'>Home</a>
                <Link to='/about' className='btn btn-ghost text-xl pl-2'>About</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar