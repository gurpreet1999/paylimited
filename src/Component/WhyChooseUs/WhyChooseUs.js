import React from 'react'
import home2 from "../../assests/images/home2.png"
import compliance from "../../assests/images/complaince.png"
import security from "../../assests/images/security.png"
import speed from "../../assests/images/speed.png"
import support from "../../assests/images/support.png"
import  "./WhyChooseUs.scss"

const WhyChooseUs = () => {
  return (
    <div className='WhyChooseUs'  >

 <div className='right'>

<img src={home2}></img>

 </div>

 <div className='left'>

<h1>BENEFITS</h1>
<h2>   Why Choose 1st Pay LTD Solutions?</h2>

<div className='grid'>



<div className='card'>
    <figure > <img src={support}/> </figure>
    <div className='content'>
        <h1>Customer Support</h1>
        <p>     Our team takes a personalized approach to address your specific
          payroll needs.</p>
    </div>
</div>

<div className='card'>
<figure > <img src={compliance} />   </figure>
    <div className='content'>
        <h1>Compliance Assurance</h1>
        <p>   Rest assured, Payroll Solutions follows all rules, handling payroll
          complexities for you.</p>
    </div>
</div>

<div className='card'>
<figure > <img src={security}  />   </figure>
    <div className='content'>
        <h1> Flexibility and Security:</h1>
        <p> Umbrella solutions offer freedom of independent work with full-time
          security</p>
    </div>
</div>

<div className='card'>
<figure > <img src={speed}  />   </figure>
    <div className='content'>
        <h1>Speedy Service</h1>
        <p>Payroll ensures same-day payments for fast access to your earnings.</p>
    </div>
</div>



</div>



 </div>



    </div>
  )
}

export default WhyChooseUs