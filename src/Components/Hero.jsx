
import React from 'react'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";


function Hero() {
  return (
  <div className="hero max-h-screen bg-base-100 mt-10">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <div className="avatar">
         <div className='rounded-full mb-5 shadow-xl border-solid'>
           <img src="/profilepic.jpg" alt='pic' />
         </div>
        </div>
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6">Hello, My name is Drew Barton I am a Sales Operations Professional in the tech industry. This site is my personal project I am in no way a pro web developer but please enjoy!</p>
      <a href='https://www.linkedin.com/in/d-barton5/' className="mx-2 btn btn-ghost"><p className='mr-1 text-lg'><FaLinkedin /></p> Linkedin</a>
      <a href='https://github.com/drewb73' className="mx-2 btn btn-ghost"><p className='mr-1 text-lg'><FaGithubSquare /></p> GitHub</a>
    </div>
  </div>
</div>
  )
}

export default Hero

