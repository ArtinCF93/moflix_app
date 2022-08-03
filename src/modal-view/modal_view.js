import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import './modal_view.css'

let Modal = ({isOpen, isClosed}) => {

    if(!isOpen){ //if state of 'modal' in landing-view component is false 
        return null
    } else {
  return (
    <div  className= 'overlay' onClick={isClosed}>
        <div className='modalContainer'>
       <ReactPlayer url='https://www.youtube.com/watch?v=3Yh_6_zItPU' className='video'/>
        </div>
    </div>
  )
    }
}

export default Modal