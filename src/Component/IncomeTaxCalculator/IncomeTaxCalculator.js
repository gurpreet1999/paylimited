import React from 'react'

const IncomeTaxCalculator = () => {
  return (
    <div className='IncomeTaxCalculator'  >
 <h1>Income tax calculator</h1>

<p>Enter your salary and find out how much income tax and National Insurance you'll pay in the chosen tax year.</p>

<form>

<div>

<label>Tax Year:</label>
<input></input>


</div>

<div>

<label>Enter Your Current Salary:</label>
<input></input>


</div>

</form>


    <button>Calculate</button>


    </div>
  )
}

export default IncomeTaxCalculator