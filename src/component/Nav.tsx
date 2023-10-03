
import a from './img/a.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
const Nav = () => {
  return (
     <>
    <div className="nv">

        <div className="logo">
            <img className='size' src={a} alt="PIC" />
        </div>


        <div className="item">
            
            <li className='cap'>about us</li>
            <li className='cap'>contact us</li>
            <li><button className='login'><span className='pading1'><PersonIcon/></span> Login</button></li>
            <li><button className='reg'><span className='pading'><PersonAddAlt1Icon /></span><span>Register Now</span></button></li>
            <li className='iconl'><ShoppingCartIcon fontSize= 'large' /></li>
        </div>
    </div>
     </>
  )
}

export default Nav