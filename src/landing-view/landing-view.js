import React, {useState}from 'react'
import bckImg from '../files/kenobi.png'
import Klogo from '../files/kenobilogo.png'
import Modal from '../modal-view/modal_view';

import './landing-view.css'

let LandingPage = () => {

  /**
   * Modal
   * the state 'modal' is used to a React Video Player.
   * The modal state is carried to the modal component as a prop
   * When false, display none, when true display flex. 
   * Modal unsets when user scrolls 550pxY
   * 
   * isOpen is carried to the Modal component as a representment of modal. If the state of modal changes, so does isOpen
   * isClosed is carried to th Modal component as a function, when invoked on the otherside by an onClick event, it changes the state of modal on this component, to false
   */

let [modal, setModal] = useState(false)

let unsetModal = () => {
  if(window.scrollY >= 550) {
    setModal(false)
  } 
}

window.addEventListener('scroll', unsetModal);

  return (
    <div className='featured'>
         <img src={bckImg} className='bckImg' alt="BackgroundImage"/>
         <div className='info'>
             <img src={Klogo} alt='kenobilogo' className='klogo'/>
             <p className='desc'>
             Obi-Wan Kenobi” begins 10 years after the dramatic events of “Star Wars: Revenge of the Sith” 
             where Obi-Wan Kenobi faced his greatest defeat—the downfall and corruption of his best friend 
             and Jedi apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader
             </p>
             <div className='featuredButtons'>
             <button 
              className='play'
              onClick={() => setModal(true)}>Play Trailer</button>
             <Modal isOpen={modal} isClosed={() => setModal(false)}/>
         </div>
         </div>
    </div>
  )
}

export default LandingPage