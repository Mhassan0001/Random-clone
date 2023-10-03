import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import a from './img/a.jpg';
const Footer = () => {
  return (
     <>
<div className="footer">
    

    <div className="fotimg">
      <img src={a} className='fotsize' alt="" />
    </div>

<div className="cen">
  <p className="vet"></p>
</div>

<p className='fotv'>@2021<br />Copyrights<br />CCFP</p>

<p className='fott'>Terms & Conditions</p>
<p className='contact'>Contact Us</p>


  <div className="cenf1"><button className='btn2'><FacebookIcon fontSize='large'/></button></div>
  <div className="cenf2"><button className='btn3'><InstagramIcon fontSize='large'/></button></div>


</div>
      </>
  )
}

export default Footer