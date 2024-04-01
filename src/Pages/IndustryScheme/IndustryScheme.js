import React from 'react'
import CIS2 from "../../assests/images/CIS2.png"


const IndustryScheme = () => {
  return (
    <div className='IndustryScheme' >


<div className='imageBox'>
<h1>Construction Industry Scheme</h1>

</div>

<div className='box1'>
    <div className='left'><h1>Understanding the Construction Industry Scheme (CIS) and Contractor Responsibilities</h1><p>The Construction Industry Scheme (CIS) sets out how contractors handle payments to subcontractors and other entities. Contractors must join the scheme, take tax from subcontractors' payments, and send these deductions to HMRC. They do this while keeping in mind the tax status of the subcontractors.</p></div>
    <div  className='right' ><img  src={CIS2}/></div>
</div>


<div className='box2'>

<h1>The Difference Between Contractors and Subcontractors</h1>
<p>In many instances, businesses fall under both categories, which means you must register as both and follow the appropriate rules for each respective role.</p>

<div>

<ul>
<h1>Contractor</h1>
<li>Business, Person or Other Entity Paying Subtractors.</li>
<li>Registered with Construction Industry Scheme</li>
<li>If your average spend is above £1m over 3 years</li>


</ul>
<ul>
<h1>Contractor</h1>
<li>Work for a business, person or entity registered.</li>
<li>Registered under CIS</li>
<li>Can use employees or subcontractors</li>


</ul>
</div>

</div>


<div className='box3'>

<div className='left'>

<h1>Simplified Payment Deductions</h1>

<p>Contractors must ensure subcontractors undergo verification procedures prior to commencing work. Subsequently, during deduction processes, contractors are mandated to</p>

<ul>

<li>Verification of Subcontractors</li>
<li>Deduction Calculation</li>
<li>Deduction Process</li>
<li>Transaction Recording</li>
<li>Payment Execution to Subcontractor</li>
<li>Issuance of Pay Statement:</li>
<li>Remittance to HMRC:</li>

</ul>

<h2>KEEPS RECORDS</h2>
<h3>WHAT IS THE VAT REVERSE CHARGE UNDER THE CONSTRUCTION INDUSTRY SCHEME</h3>

<section>

    <h1>WANT MORE INFORMATION ON YOUR OPTIONS?</h1>
    <button>Contact Us</button>
</section>

</div>
<div className='right'>

<p>Navigating the complexities of tax systems isn't typically a requirement for construction workers, but in today's landscape, understanding the nuances of the Construction Industry Scheme (CIS) is essential, particularly when working with subcontractors.</p>
<p>The CIS serves as a tool for HMRC to ensure that tax obligations within the construction sector are met. For contractors, this means adhering to regulations that mandate the deduction of tax at the source from subcontractors' income, akin to the PAYE system.</p>
<p>Staying compliant with CIS requirements not only fosters a smoother operational workflow but also mitigates the risk of potential penalties and legal complications down the line. Therefore, familiarizing oneself with CIS procedures and maintaining compliance is paramount for both contractors and subcontractors alike within the construction industry.
</p>
</div>


</div>

<div className='box4'>

<div className='left'>
<h1>GET IN TOUCH</h1>
<p>Feel free to get in touch & I'll get back to you.</p>



<h1>GENERAL INFORMATION</h1>

<div ><span></span><p>020 8609 8488</p></div>
<div ><span></span><p>hello@1stpayltd.co.uk</p></div>
<div ><span></span><p>167-169 Great Portland Street 5th Floor London W1W 5PF</p></div>
</div>


<div className='right'>
  <img/>
</div>


</div>

    </div>
  )
}

export default IndustryScheme