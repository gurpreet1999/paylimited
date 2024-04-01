import React from 'react'
import "./PayrollSolution.scss" 
import logo from "../../assests/images/logo.png"

const PayrollSolution = () => {
  return (
    <div className='PayrollSolution'>

  <div className='left'>
<h1>ABOUT US</h1>
<h2>  We provide payroll solutions for contractors and companies.</h2>
<p>   At Payroll Solutions, we're really good at creating special payroll
          plans for both contractors and companies. Our main aim is to help
          businesses easily grow their team. Whether you're a contractor who
          needs flexibility or a company wanting to get bigger, we're here to
          guide you all the way.</p>

<p>   Our personalized approach ensures that you get paid the same day, that
          your tax arrangements are handled professionally, and, most
          significantly, that you don’t have any company responsibilities,
          allowing you to enjoy your contracting and free time.</p>

<div className='grid'>

<div className='card'>
    <div className='content'>Compliance</div>
    <div className='percentage'>100%</div>
</div>
<div className='card'>
    <div className='content'>Speed</div>
    <div className='percentage'>100%</div>
</div>

<div className='card'>
    <div className='content'>Customer Support</div>
    <div className='percentage'>100%</div>
</div>

<div className='card'>
    <div className='content'>  Flexibility and security</div>
    <div className='percentage'>100%</div>
</div>
</div>

<button></button>

  </div>
  <div className='right'>

<img src={logo} ></img>

  </div>






    </div>
  )
}

export default PayrollSolution