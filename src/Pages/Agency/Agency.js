import React from 'react'
import ContactUs from '../../Component/Contactus/ContactUs'
import CompanyServices from '../../Component/CompanyServices/CompanyServices'

import agency2 from "../../assests/images/agency2.png"

const Agency = () => {
  return (
    <div className='agency'>


 <div className='imageBox'>


<h1>Helping Brand Grows</h1>
<h2>   Proficient in Consulting & Business Guidance!</h2>
<p>  We provide you with the peace of mind to grow your agency with a
            payroll you can trust.</p>
<section> 

    <button>SERVICES</button>
    <button>SERVICES</button>
</section>


 </div>

<div className='box1'>

<div className='aboutCompany'>

<h1>our approach</h1>
<h2>About Our Company</h2>
<p> .</p>


            <p> We blend financial planning expertise with top-notch investment
            management for contractors. Our service guarantees timely payments
            and friendly support for any payroll questions.</p>

            <p> Our transparent, compliant, and reliable umbrella service lets
            everyone focus on what they do best. We ensure contractors get paid
            accurately and on time, so they can concentrate on their work. Our
            simple onboarding process means contractors can start working in
            just a few hours.</p>

</div>
<div className='ceo'>

<div className='icon'></div>
<p>With Bexbury’s payroll services, I’ve been able to see a bright
            future ahead of me! It’s easy to get in touch with someone who can
            give you some advice. Most importantly all my staff are happy</p>
<figure><img src={agency2}/></figure>
<div>
    <h1>Alison Cooper</h1>
    <p>EARLY YEAR’S AGENCY</p>
</div>

</div>

</div>


<div className='box2'>


<h1>  Reliable Payroll Solutions</h1>
<p> At 1st pay ltd, we help contractors and freelancers get paid smoothly
          and on time. We work hard to make sure you feel confident and
          worry-free about your earnings.</p>
<p>Ensuring timely and accurate payment for your employees is crucial for
          your agency's success. We collaborate closely with you and your
          contractors to ensure prompt payment and strict adherence to
          regulations. Your peace of mind and smooth operations are our top
          priorities.</p>

<main>

<div className='card'>

<figure><img/></figure>

<div><h1>Compliance Assurance</h1>
<p> We promise to keep you up-to-date on regulations, ensuring your
          business complies and giving you peace of mind</p></div>

</div>
<div className='card'>

<figure><img/></figure>

<div><h1>Timely Payroll</h1>
<p> With regular payment runs; we keep your business working and your
          staff happy.</p></div>

</div>
<div className='card'>

<figure><img/></figure>

<div><h1>Payroll Partnership</h1>
<p>   We will work closely with you to ensure that the service we give fits
          your requirement.</p></div>

</div>


 
</main>

</div>


<div className='imageBox2'>

  <section>
    <div><h1>Request a Callback?</h1>
    <p>  Find out how we can help you with our free consultations</p></div>
  <button>REQUEST A CALLBACK</button>
    </section>
</div>






<CompanyServices/>
<ContactUs/>

    </div>
  )
}

export default Agency