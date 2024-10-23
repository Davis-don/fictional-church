import React from 'react'
import './abouthmpg.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import fatherImg from  '../../../../assets/father-img.jpg'

function Abouthomepg() {
  return (
    <div className='overall-homepage-about'>
         <div className="left-side-img-hmpg">
   <div className="image-container-div ">
   <img src={fatherImg} alt=' image of priest' className='rounded-circle'/>
   </div>
         </div>
         <div className="right-side-img-hmpg">

         </div>
        </div>
  )
}

export default Abouthomepg