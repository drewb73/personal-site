import React, { useState } from 'react';


function Contact() {
    const [formData, setFormData] =useState({
      message:'',
      subject:''
    })

    const {message, subject} = formData

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }
    
    const data = {
        email: 'bartondrew5@gmail.com',
    }

  return (
    <div className='container text-center mt-5'>
        <h1 className='text-center text-2xl font-bold mt-8'>Contact Me!</h1>
        <form className='w-auto'>
         <input type='text' placeholder='Subject' value={subject} name='subject' onChange={onChange} required className='input input-bordered input-md mt-3 w-96' />
         <br></br>
         <textarea placeholder='Message' value={message} name='message' onChange={onChange} required className='textarea textarea-bordered mt-3 w-96 justify-center' ></textarea>
         <br></br>
         <a href={`mailto:${data.email}?Subject=${subject}&body=${message}`}><button className='btn bg-gray-500' type='button'>Send Email</button></a>
        </form>
    </div>
  )
}

export default Contact