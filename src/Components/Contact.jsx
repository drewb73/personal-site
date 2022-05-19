import React, { useState } from 'react';


function Contact() {
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const onChange = e => setMessage(e.target.value)
    const handleChange = e => setSubject(e.target.value)

    const data = {
        email: 'bartondrew5@gmail.com',
    }

  return (
    <div className='container text-center mt-5'>
        <h1 className='text-center text-2xl font-bold mt-8'>Contact Me!</h1>
        <form className='w-auto'>
         <input type='text' placeholder='Subject' value={subject} onChange={handleChange} className='input input-bordered input-md mt-3 w-96' />
         <br></br>
         <textarea placeholder='Message' value={message} onChange={onChange} className='textarea textarea-bordered mt-3 w-96 justify-center' ></textarea>
         <br></br>
         <a href={`mailto:${data.email}?Subject=${subject}&body=${message}`}><button className='btn btn-primary' type='button'>Send Email</button></a>
        </form>
    </div>
  )
}

export default Contact