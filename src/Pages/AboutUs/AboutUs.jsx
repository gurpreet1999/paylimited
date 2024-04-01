import React from 'react'
import PayrollSolution from '../../Component/PayrollSolution/PayrollSolution'
import about2 from "../../assests/images/about2.png"
import "./AboutUs.scss"

const AboutUs = () => {
  return (
    <div className='AboutUs' >

<div className='imageBox'>

<main>
<h1>ABOUT US</h1>
<h2>  Stop Payroll Headaches, Start Growing Your Business</h2>
</main>

    </div>

<PayrollSolution/>


<div className='approach'>
<h1>Our Approach</h1>

<section className='cardContainer'>
<div className='card'>

<h1>STEP 1</h1>
<h2>Assessment</h2>
<p>  Our team initiates the process by thoroughly analyzing your current
          incoming and payment arrangements.</p>

</div>
<div className='card'>

<h1>STEP 2</h1>
<h2>Strategy Development</h2>
<p>   We suggest a well-thought-out action plan to ensure you have all-round
          coverage.</p>

</div>

<div className='card'>

<h1>STEP 3</h1>
<h2>Execution</h2>
<p> We handle all your paperwork and regular payments according to our
          agreement,</p>

</div>
</section>

</div>



<div className='box2'>

<h1>  WHY YOU SHOULD CHOOSE BEXBURY SERVICES</h1>
<main>
<div className='card'>
    <h1>SUPPORT</h1>
    <p> Our team takes a personalized approach to address your specific
          payroll needs.</p>
</div>
<div className='card'>
    <h1>COMPLIANCE</h1>
    <p> Rest assured, Payroll Solutions follows all rules, handling payroll
          complexities for you.</p>
</div>
<div className='card'>
    <h1>Decades of Excellence</h1>
    <p>  With almost two decades of experience, we've specialized in providing
          professional and trustworthy accounting services, as well as effective
          umbrella employment solutions.</p>
</div>
</main>
</div>

<div className='box4'>

<h1>NEW TO CONTRACTING</h1>
<h2>  Maximizing Your Contracting Journey</h2>
<figure><img src={about2}/></figure>
<p>  Jump into the world of contracting for a thrilling ride filled with
        chances to grow and succeed. Contracting isn't just about making money;
        it's about learning new things and getting better at what you do. Here's
        how you can make your contracting experience even better:</p>

<div className='grid'>
    <div><span></span><h1>Be Happy</h1></div>
    <div><span></span><h1>Be Independent</h1></div>
    <div><span></span><h1>Decision-Making</h1></div>
    <div><span></span><h1>Empower Yourself</h1></div>
    <div><span></span><h1>Get Paid What You Deserve</h1></div>
    <div><span></span><h1>Make Your Own Choices</h1></div>
  
    




</div>
<button>DISCOVER YOUR OPTIONS</button>
</div>

       
<main className='blackBox' >
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

    </div>
  )
}

export default AboutUs