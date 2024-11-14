import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact-wrap bg-white">
        <h3 className='text-center'>Contact Us</h3>
        <form action="">
          <div className="form-box">
            <label htmlFor="#" className="form-label">Name</label>
            <input type="text" placeholder='Type here' className="form-control" required />
          </div>
          <div className="form-box">
            <label htmlFor="Email" className="form-label">Name</label>
            <input type="email" placeholder='Email' className="form-control" required />
          </div>
          <div className="form-box">
            <label htmlFor="#" className="form-label">Your message</label>
            <textarea name="" className='form-control' placeholder='Type here' id=""></textarea>
          </div>
          <div className="w-100 text-center">
            <button type='submit' className='btn text-center bg-primary'>Contact Us</button>
          </div>
        </form>
      </div>
    </div>
  )
}
