import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import './modal_view.css'

let Modal = ({isOpen, isClosed}) => {

let [modal, unSetModal] = useState(false)

    if(!isOpen){
        return null
    } else {
  return (
    <div  className={modal ? 'overlay active' : 'overlay'} onClick={isClosed}>
        <div className='modalContainer'>
       <ReactPlayer url='https://www.youtube.com/watch?v=3Yh_6_zItPU' className='video'/>
        </div>
    </div>
  )
    }
}

export default Modal