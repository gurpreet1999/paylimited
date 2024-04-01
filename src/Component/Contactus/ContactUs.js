import React from 'react'
import "./ContactUs.scss"

const ContactUs = () => {
  return (
    <div className='Contactus'>


  <div className='left'>
    <h1>CONTACT US</h1>
    <p> To start your journey towards hassle-free payroll, call to speak
              to a consultant or register to receive a callback.</p>
    <main><button><span></span><p>REGISTER INTEREST</p></button>
<button><span></span><p>REGISTER INTEREST</p></button></main>
    <p>  If you have another query please feel free to fill in our contact
              form.</p>
  </div>
  <div className='right'>

<main>
  <section>
    <label>First Name</label>
    <input></input>
</section>
<section>
    <label>Last Name</label>
    <input></input>
</section>
</main>
<section> <label>Email </label>
    <input></input></section>

<section> <label>Subject</label>
    <input></input></section>

<section> <label>Your Message</label>
    <input></input></section>

<button>Submit Form</button>

  </div>


    </div>
  )
}

export default ContactUs