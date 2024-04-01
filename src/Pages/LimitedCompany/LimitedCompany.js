import React from 'react'

import limitedcompany2 from "../../assests/images/limitedcompany2.png"
import PayrollSolution from '../../Component/PayrollSolution/PayrollSolution'

import "./LimitedCompany.scss"
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs'

const LimitedCompany = () => {
  return (
    <div className='LimitedCompany' >

  <div className='imageBox'>
    <section>
    <p>Your job your decisions</p>
    <h1>Limited Company</h1>
    </section>


  </div>


<div className='box1'>

<figure><img  src={limitedcompany2}/></figure>

<div className='right'  ><h1>Limited Company</h1>
<h2>   Unlock Tax Savings with Your Limited Company Journey</h2>
<p> For many contractors, running a Limited Company is a smart way to save
          on taxes. Whether you're new to contracting or have used umbrella
          companies before, starting your own limited company could be the best
          option for you.</p>
<p> There are different ways to set up a limited company, but getting help
          from a specialist contractor accountant can make things a lot easier.
          They'll handle a lot of the paperwork and admin tasks for you</p>
<p> Discover the simplicity and benefits of running your own Limited
          Company with the guidance of our expert contractor accountants.</p></div>


</div>

<WhyChooseUs/>

<div className='box2'>

<div className='left'>
<h1>CONTRACTOR CHOICE</h1>
<h2>Unlock the Freedom and Flexibility of Contracting with a Limited
          Company</h2>

<p> Take control of your contracting career and maximize your earning
            potential with a limited company. Here's why it might be the perfect
            fit for you:</p>

<ul>
<li><span>Boost Your Take-Home Pay</span><p>A smart combination of salary and dividends can significantly
            lower your tax burden compared to being a sole trader. Dividends are
            subject to lower rates and avoid National Insurance, putting more
            money directly in your pocket.</p></li>
<li><span>Become a Credible Busines</span><p> s: Clients and agencies often view limited companies as more
            established and trustworthy. This can open doors to more lucrative
            contracts and solidify your professional image.</p></li>
<li><span>   Grow Your Contracting Empire</span><p>A limited company provides a solid foundation for growth. You can
            easily take on employees, expand your service offerings, and build a
            successful contracting business.</p></li>

</ul>
</div>
<div className='right'>
<h1>our service</h1>
<div className='card'>
  <h1>informative</h1>
  <p>100%</p>
</div>
<div className='card'>
  <h1>compliance</h1>
  <p>100%</p>
</div>
<div className='card'>
  <h1>Efficiency</h1>
  <p>100%</p>
</div>
<div className='card'>
  <h1>customer support</h1>
  <p>100%</p>
</div>

</div>

</div>


<div className='box3'>

<h1>Contact</h1>
<h2>Get in Touch</h2>

  <main>



<div>

  <label>First Name</label>
  <input/>
</div>

<div>

  <label>Last Name</label>
  <input/>
</div>

</main>


<div>

  <label>Email</label>
  <input/>
</div>
<div>

  <label>Subject</label>
  <input/>
</div>
<div>

  <label>Your Message</label>
  <input/>
</div>
<button>Submit Form</button>

</div>

    </div>
  )
}

export default LimitedCompany