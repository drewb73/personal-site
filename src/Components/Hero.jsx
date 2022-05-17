
import React from 'react'


function Hero() {
  return (
    <div className="hero max-h-screen bg-base-100">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="avatar">
  <div className='rounded-full mb-5 shadow-xl border-solid'>
    <img src="/profilepic.jpg" alt='pic' />
  </div>
</div>
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6">Hello, My name is Drew Barton I am a Sales Operations Professional in the tech industry. This site is my personal project I am in no way a pro web developer but please enjoy!</p>
      <button className="mx-2 btn btn-ghost">Linkedin</button>
      <button className="mx-2 btn btn-ghost">GitHub</button>
    </div>
  </div>
</div>
  )
}

export default Hero

