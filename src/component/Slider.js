import Carousel from 'react-bootstrap/Carousel';
import HTMLImg1 from '../assets/images/html/html1.png'
import HTMLImg2 from '../assets/images/html/html2.png'
import HTMLImg3 from '../assets/images/html/html3.png'
import HTMLImg4 from '../assets/images/html/html4.png'
import HTMLImg5 from '../assets/images/html/html5.png'

import CSSImg1 from '../assets/images/css/css1.png';
import CSSImg2 from '../assets/images/css/css2.png';
import CSSImg3 from '../assets/images/css/css3.png';
import CSSImg4 from '../assets/images/css/css4.png';
import CSSImg5 from '../assets/images/css/css5.png';
import CSSImg6 from '../assets/images/css/css6.png';
import CSSImg7 from '../assets/images/css/css7.png';


import JSImg1 from '../assets/images/js/js1.png';
import JSImg2 from '../assets/images/js/js2.png';
import JSImg3 from '../assets/images/js/js3.png';
import JSImg4 from '../assets/images/js/js4.png';
import JSImg5 from '../assets/images/js/js5.png';

import Bootstrap1 from '../assets/images/Bootstrap/bootstrap1.png';
import Bootstrap2 from '../assets/images/Bootstrap/bootstrap1.png';
import Bootstrap3 from '../assets/images/Bootstrap/bootstrap3.png';
import Bootstrap4 from '../assets/images/Bootstrap/bootstrap4.png';
import Bootstrap5 from '../assets/images/Bootstrap/bootstrap5.png';
import Bootstrap6 from '../assets/images/Bootstrap/bootstrap6.png';


import React1 from '../assets/images/react/react1.png';

function Slider() {
  return (
   <>
   <div className='html-slider d-none'>
   <Carousel>
      <Carousel.Item>
        <img src={HTMLImg1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={HTMLImg2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={HTMLImg3} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={HTMLImg4} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={HTMLImg5} alt='' />
      </Carousel.Item>
    </Carousel>
   </div>

   <div className='css-slider d-none'>
   <Carousel>
      <Carousel.Item>
        <img src={CSSImg1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg3} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg4} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg5} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg6} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CSSImg7} alt='' />
      </Carousel.Item>
    </Carousel>
   </div>

   <div className='js-slider d-none'>
   <Carousel>
      <Carousel.Item>
        <img src={JSImg1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={JSImg2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={JSImg3} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={JSImg4} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={JSImg5} alt='' />
      </Carousel.Item>
    </Carousel>
   </div>


   <div className='bootstrap-slider d-none'>
   <Carousel>
      <Carousel.Item>
        <img src={Bootstrap1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Bootstrap2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Bootstrap3} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Bootstrap4} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Bootstrap5} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Bootstrap6} alt='' />
      </Carousel.Item>
    </Carousel>
   </div>

   <div className='react-slider d-none'>
   <Carousel>
      <Carousel.Item>
        <img src={React1} alt='' />
      </Carousel.Item>
      
    </Carousel>
   </div>

   </>
  );
}

export default Slider;
