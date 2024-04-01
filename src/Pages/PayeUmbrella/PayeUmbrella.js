import React from 'react'
import IncomeTaxCalculator from '../../Component/IncomeTaxCalculator/IncomeTaxCalculator'


const PayeUmbrella = () => {
  return (
    <div className='PayeUmbrella'  >


<div className='imageBox'>

<h1>FOR CONTRACTOR</h1>
<h2>PAYE UMBRELLA</h2>

</div>


<div className='box1'>
<div className='left'><img></img></div>
<div className='right'>

<h1>UMBRELLA SOLUTIONS</h1>
<h2>   The Benefits of Umbrella Companies for Contractors</h2>
<p> If you're a contractor, using an umbrella company to get paid can be
          really simple. Here's how it works:</p>
<p> When you sign up with an umbrella company, you become their employee
          right away. This means you don't have to deal with setting up your own
          business or handling complicated paperwork. All you have to do is
          submit your timesheets, and the umbrella company takes care of the
          rest.</p>
<p>  They'll make sure all your taxes, like income tax and National
          Insurance, are sorted out. And the good part is, you don't need to
          worry about IR35 laws either, because this setup usually keeps you
          outside of them.</p>
<p>  So basically, using an umbrella company makes getting paid as a
          contractor a breeze. You can focus on your work, and they handle all
          the tricky stuff for you.</p>

</div>


<div className='box'>
<h1>  How Does an Umbrella Company Work?</h1>
<div className='card'>
<div className='left'><img></img></div>
<div className='right'><h1>Contract Signing with Recruitment Agency</h1>
<p>After securing a contract role, the umbrella company, acting as your employer, signs a contract with your recruitment agency.</p></div>

</div>
<div className='card'>
<div className='left'><img></img></div>
<div className='right'><h1>Employment Contract Signing</h1>
<p>You then sign a contract of employment with the umbrella company.</p></div>

</div>
<div className='card'>
<div className='left'><img></img></div>
<div className='right'><h1>  Timesheet Submission and Approval</h1>
<p>Once you've worked for the agreed time period, you fill out a timesheet and have it approved by your manager. Then, you submit it to both your recruitment agency and the umbrella company..</p></div>

</div>
<div className='card'>
<div className='left'><img></img></div>
<div className='right'><h1>Invoicing and Billing</h1>
<p>The umbrella company invoices the recruitment agency, which in turn bills the end-client.</p></div>

</div>
<div className='card'>
<div className='left'><img></img></div>
<div className='right'><h1>Payroll Processing and Salary Payment</h1>
<p>After receiving payment from the agency, the umbrella company processes your payroll. They deduct various expenses such as employment taxes, their fee, personal taxes, and potentially pension contributions. Then, they pay you a salary.</p></div>

</div>


</div>



<div className='box'>


<div className='left'><IncomeTaxCalculator/></div>
<div className='right'></div>

</div>



<div className='box'>

<div className='upper'>

<h1>OTHER SOLUTIONS</h1>
<h2>Know your payment options</h2>
<p>  Contractors work under two main payroll structures – umbrella companies
        and limited companies. Both have their benefits and drawbacks, but a
        contractor’s individual circumstances will usually mean that one offers
        more advantages over the other. Changing legislation, as well as the
        length and value of a contractor’s typical assignments, are just some of
        the things that need to be taken into consideration when choosing
        between payroll structures.</p>

</div>

<div className='down'>

<div>Discover your Options</div>

<div className='cardContainer'>

<div className='card'>
<h1>Limited Company</h1>
<p> One of the most important things is to pick a tour operator or
            trekking agency. We will help you.</p>
<button>Read More</button>
</div>

<div className='card'>
<h1>Request a Callback</h1>
<p>One of the most important things is to pick a tour operator or
            trekking agency. We will help you.</p>
<button>Read More</button>
</div>

</div>


</div>



</div>

</div>


    </div>
  )
}

export default PayeUmbrella