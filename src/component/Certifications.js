import CSSCertificate from '../assets/images/css.jpg';
import HTMLCertificate from '../assets/images/html.jpg';
import ReactJSCertificate from '../assets/images/reactjs.jpg';
import FrontEndCertificate from '../assets/images/Front-end-development.jpg';

function Certifications() {
  return (
    <>
      <div className="certification paddingTop paddingBottom">
        <div className='container'>
        <h2 className="title-sec text-center">Certifications</h2>
        <div className='row mx-0'>
          <div className='col-12 col-md-6 mb-5'>
            <div className='banner html'></div>
            <h5 className='description text-center'>Introduction to HTML'S</h5>
          </div>
          <div className='col-12 col-md-6 mb-5'>
            <div className='banner css'></div>
            <h5 className='description text-center'>Introduction to CSS3</h5>
          </div>
          <div className='col-12 col-md-6'>
            <div className='banner front-end'></div>
            <h5 className='description text-center'>Introduction to Front End Developer</h5>
          </div>
          <div className='col-12 col-md-6'>
            <div className='banner reactjs'></div>
            <h5 className='description text-center'>React - The complete Guide(incl Hooks, React Router, Redux)</h5>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Certifications;
