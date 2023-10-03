import './comment.css'
const Comment = () => {
  return (
   <>
<div className="comment">

<div className="firstCom">

<p className='firc1'>
Question 1: At which Left ventricular ejection fraction would you consider referral for an ICD? List one.
</p>
<div className="linecomm">
<p className='linec1'></p>
</div>
<textarea  className='message' placeholder="Enter your answer"></textarea> 

 <p className='sec2'>
 Question 2: Based on the type of heart failure that this patient has, list 3 medications that would have a mortality benefit.</p>

  <div className="linecomm2">
  <p className='linec1'></p>
  </div>
  <textarea  className='message2' placeholder="Enter your answer"></textarea> 

<p className='th3'>
Question 3: What lifestyle changes/ interventions should be considered in patients with heart failure? List 4.</p>
<div className="linecomm3">
<p className='linec1'></p>
</div>
<textarea  className='message3' placeholder="Enter your answer"></textarea> 

<button className='lastbtn'>Submit</button>


</div>
</div>

   </>
  )
}

export default Comment