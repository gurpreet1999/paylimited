import React from 'react'
import home3 from "../../assests/images/home3.png"

import "./Home.scss"

import ContactUs from '../../Component/Contactus/ContactUs'
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs'
import PayrollSolution from '../../Component/PayrollSolution/PayrollSolution'

const Home = () => {
  return (
    <div className="homePage">

       <div className="imageContainer">
      
      <section>
        <h1>
          Simplified Payroll Solutions to Keep Your Business Going
        </h1>



        <main>
          <button className='contractors'>CONTRACTORS</button>
          <div className='frame'>
            <span className='or'>or</span>
          </div>
     
          <button className='agencies'>AGENCIES</button>
        </main>
        </section>
        </div>
       
<main>
<div className='card-container'>

<div className='card'>
  <figure><img src={""} /></figure>
  <section>
    <h1>PAYE Umbrella</h1>
    <p>Discover our services</p>
  </section>
</div>
<div className='card'>
  <figure><img src={""} /></figure>
  <section>
    <h1>Limited Company</h1>
    <p></p>
  </section>
</div>
<div className='card'>
  <figure><img src={""}  /></figure>
  <section>
    <h1>Agency Management</h1>
    <p></p>
  </section>
</div>


</div>
</main>

       
<PayrollSolution/>

<WhyChooseUs/>

<div className='our-services'>

    <figure ><img src={home3}/></figure>
    <main className='right'>
<h1>OUR SERVICES</h1>
<h2>  Optimize your finances for maximum benefit.</h2>
<p>  At 1st Pay Ltd, we're here to help your business thrive and grow. No
          matter what challenges come your way, our team provides expert support
          and guidance every step of the way.</p>

<p>  Our services ensure you maximize your earnings hassle-free. With our
          umbrella company solution, enjoy the perks of contracting without the
          stress of administrative tasks. Get paid promptly, handle taxes
          effortlessly, and stay worry-free. Focus on your contracts and leisure
          time while we take care of the rest.</p>

<button>REQUEST CALL</button>
    </main>


<div className='box3'>
<div className='card'>
    <figure><img></img></figure>
    <h1>PAYE UMBRELLA</h1>
    <p>Many contractors prefer using an umbrella company like Bexbury because
          it's simpler and ensures they're protected by different types of
          insurance like professional indemnity, public liability, and
          employer's liability</p>
          <button>Learn More</button>
  
</div>
<div className='card'>
<figure><img></img></figure>
    <h1>Small Businesses Freedom</h1>
    <p>  If you're a small business owner looking to enhance your work-life
          balance, consider outsourcing payroll and administrative tasks to
          Bexbury. We specialize in ensuring payroll operations, allowing you to
          focus on other aspects of your business without sacrificing your
          personal time.</p>
 <button>Learn More</button>
  
</div>
<div className='card'>
<figure><img></img></figure>
    <h1>Payroll Partnership</h1>
    <p> For agencies, paying your employees on time is key for growth. We
          partner with you and your contractors to make sure everyone gets paid
          promptly and follows the rules. It builds trust and helps your
          business grow.</p>
          <button>Learn More</button>
  
</div>


</div>


</div>



<div className='box4'>

<h1>  Register your interest now & receive a free consultation</h1>

<p> Click here to Register or you can contact us</p>

<section>
<button><span></span><p>REGISTER INTEREST</p></button>
<button><span></span><p>REGISTER INTEREST</p></button>
</section>
</div>


<div className='box'></div>

<ContactUs/>

    </div>





  )
}

export default Home