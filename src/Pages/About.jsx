import React from 'react'


function About() {
    return (
        <div className="card w-100 bg-gray-200 shadow-xl">
        <div className="card-body">
          <h1 className='text-6xl mb-4'>Drews Personal Site</h1>
          <p className='text-2xl mb-2'>A React Personal App using Tailwinds CSS and daisyUI for styling and UI</p>
          <p className='text-lg text-gray-500'>
            Version: <span className='text-black'>1.3.1</span>
          </p>
          <p className='text-lg text-gray-400'>
        Layout and Design By:
        <p className='text-black-300'>
          Drew Barton
        </p>
      </p>
        </div>
      </div>
    )
  }

export default About