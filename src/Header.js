

import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import logo from './logo.svg';
import './App.scss';

import AboutMe from './component/AboutMe';
import Certifications from './component/Certifications';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Banner from './component/Banner';
const handleSetActive = () => {

}
const handleSetInactive = () => {

}
function Header() {
  return (
    <>

      <div className='header-menu w-100'>
      <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      Home

      </Link>

      <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      About

      </Link>

      <Link activeClass="active" to="thirdInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      Certification

      </Link>

      <Link activeClass="active" to="fourInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      Education

      </Link>

      <Link activeClass="active" to="fiveInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      Skills

      </Link>

      <Link activeClass="active" to="sixInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', padding: '20px' }}>
      Contact

      </Link>
      </div>


      




      <Element name="test7" className="element content-section" id="containerElement" style={{
        position: 'relative',
        height: '100vh',
        overflow: 'scroll',
        marginBottom: '100px'
      }}>
        <Element className='bg-color' name="firstInsideContainer" style={{
          paddingBottom: '200px',
          height: '100vh'
        }}>
          <Banner />
        </Element>

        <Element className='bg-color' name="secondInsideContainer" style={{
          paddingBottom: '200px',
          height: '100vh'
        }}>
          <AboutMe />
        </Element>

        <Element name="thirdInsideContainer" className='certificationSec' style={{
          marginBottom: '200px',
          height: '100vh'
        }}>
          <Certifications />
        </Element>

        <Element name="fourInsideContainer" style={{
          marginBottom: '200px',
          height: '100vh'
        }}>
         <Education />  
        </Element>

        <Element name="fiveInsideContainer" style={{
          marginBottom: '200px',
          height: '100vh'
        }}>
          <Skills />
        </Element>

        <Element name="sixInsideContainer" className='bg-color' style={{
          paddingBottom: '200px',
          height: '100vh'
        }}>
         <Contact />
        </Element>

      </Element>





    </>
  );
  <>

  </>

};

export default Header;
