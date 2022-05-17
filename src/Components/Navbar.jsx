import React from 'react'
import {GiBubbles} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar bg-base-300 shadow-lg '>
        <div className='flex-1'>
            <p className='mr-3 ml-4 text-3xl'><GiBubbles /></p>
            <a href='/' className='normal-case text-xl font-bold'>Drew Barton</a>
        </div>
        <div className='flex-none'>
            <div className='menu menu-horizontal p-0'>
                <a href='/' className='btn btn-ghost text-xl font-bold'>Home</a>
                <Link to='/about' className='btn btn-ghost text-xl font-bold pl-2'>About</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar