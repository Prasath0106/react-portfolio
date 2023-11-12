import MyPhoto from '../assets/images/myphoto.jpeg';
import LinkedIn from '../assets/images/linkedin.png';
import GitHub from '../assets/images/github.png';
import Message from '../assets/images/email.png';
import Phone from '../assets/images/call.png';
import {Link} from "react-router-dom";



function Contact() {
  return (
    <>
      <div className="footer-section paddingTop paddingBottom h-100 align-items-center d-flex">
        <div className='container'>
        <div className="row footer-sec">
          <div className="col-12 col-md-3 text-center myphoto">
              <img src={MyPhoto} alt="" /> 
          </div>
          <div className="col-12 col-md-6">
            <h4 className='text-center'>Address</h4>
            <div className='address-sec'>
            <p>182, poonthottam, Anaipalayam, <br />Near RD appartment, <br />College Road, <br />Tirupur-641 603</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h4 className='text-center'>Contact</h4>
            <ul className='list-unstyled d-flex align-items-center justify-content-center'>
              <li><Link to="https://www.linkedin.com/in/prasath-ravi-b0022b248/" target="_blank"><img className='me-3' src={LinkedIn} alt="" /></Link>  </li>
              <li><Link to="https://github.com/Prasath0106" target="_blank"><img className='me-3' src={GitHub} alt="" /></Link></li>
              <li><Link to="mailto:prasathravi0106@gmail.com" ><img className='me-3' src={Message} alt="" /></Link></li>
              <li><Link to="tel:9003947097" target="_blank"><img  src={Phone} alt="" /></Link></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
