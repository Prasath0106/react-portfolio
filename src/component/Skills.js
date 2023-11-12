import { useState } from 'react';

import HTMLLogo from '../assets/images/htmllogo.png';
import CSSLogo from '../assets/images/csslogo.png';
import JSLogo from '../assets/images/jslogo.png';
import ReactLogo from '../assets/images/reactlogo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.jpg';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from './Slider';
import {Link} from "react-router-dom";

function Skills() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCss, setShowCss] = useState(false);
  const handleCssClose = () => setShowCss(false);
  const handleCssShow = () => setShowCss(true);


  const [showJs, setShowJs] = useState(false);
  const handleJsClose = () => setShowJs(false);
  const handleJsShow = () => setShowJs(true);


  const [showReact, setShowReact] = useState(false);
  const handleReactClose = () => setShowReact(false);
  const handleReactShow = () => setShowReact(true);

  const [showBootstrap, setShowBootstrap] = useState(false);
  const handleBootstrapClose = () => setShowBootstrap(false);
  const handleBootstrapShow = () => setShowBootstrap(true);

  
  return (
   <>
    <div className="skills-list paddingTop paddingBottom">
      <div className="container">
        <div className='row skills-item'>
        <div className="col-6 mb-5 text-center">
          <img  onClick={handleShow} className='mb-3 cursor' src={HTMLLogo} alt='' />
          <h5 className='cursor' onClick={handleShow}>HTML 5</h5>
        </div>
        <div className="col-6 mb-5 text-center">
          <img onClick={handleCssShow} className='mb-3 cursor' src={CSSLogo} alt='' />
          <h5 className='cursor' onClick={handleCssShow}>CSS 3</h5>
        </div>
        <div className="col-6 mb-5 text-center">
          <img onClick={handleJsShow} className='mb-3 cursor' src={JSLogo} alt='' />
          <h5 className='cursor' onClick={handleJsShow}>Javascript</h5>
        </div>
        <div className="col-6 mb-5 text-center">
          <img onClick={handleReactShow} className='mb-3 cursor' src={ReactLogo} alt='' />
          <h5 className='cursor' onClick={handleReactShow}>React JS</h5>
        </div>
        <div className="col-6 text-center">
          <img onClick={handleBootstrapShow} className='mb-3 cursor' src={BootstrapLogo} alt='' />
          <h5 className='cursor' onClick={handleBootstrapShow}>Bootstrap</h5>
        </div>
        </div>
      </div>
    </div>


    <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Html Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body className='html-parent'>
          <Slider />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="xl" show={showCss} onHide={handleCssClose}>
        <Modal.Header closeButton>
          <Modal.Title>CSS Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body className='css-parent'>
          <Slider />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCssClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal size="xl" show={showJs} onHide={handleJsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Js Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body className='js-parent'>
          <Slider />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleJsClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal size="xl" show={showBootstrap} onHide={handleBootstrapClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bootstrap Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bootstrap-parent'>
          <Slider />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBootstrapClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="xl" show={showReact} onHide={handleReactClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body className='react-parent'>
          <Slider />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReactClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


   </>
  );
}

export default Skills;
