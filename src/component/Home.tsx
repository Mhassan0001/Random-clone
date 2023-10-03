
import './home.css'
import b from './img/h.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Home = () => {
  return (
   <>
      
 <div className="home">



<div className="all">

<p className='firh'>Get ready for the CCFP Exam! <br /> Practice SAMPs and SOOs for the CCFP exam</p><br />
<p className='heading'>SAMPs:</p>
<li className='homeli'>Each quiz contains 20 SAMP style questions</li>

<li className='homeli'>Receive personalised feedback within 24 hours of submission of your quiz</li>

<li className='homeli'>All SAMP questions and answers are based upon the most recent North <br /> American guidelines</li>

<p className='heading'>SOOs (virtual):</p>

<li className='homeli'>15 minute practice virtual SOOs with simulated patients</li>

<li className='homeli'>Each practice SOO consists of 3 different stations</li>

<li className='homeli'>2 topics will be covered in each 15 minute SOO</li>

<li className='homeli'>All SOOs will be marked by family physicians and you will receive a mark and feedback within 24 hours</li>

<button className='homebtn'> <span className='pading'>Sign up Today</span> <span className='arr'><ArrowForwardIcon fontSize='large'/></span></button>

</div>



<div className="imgh">
  <img className='sizeh' src={b} alt="Pic" />
</div>


</div>
   
   </>
  )
}

export default Home