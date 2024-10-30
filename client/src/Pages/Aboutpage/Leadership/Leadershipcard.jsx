import React from 'react'
import './Leadershipcard.css'

function Leadershipcard({image,name,role}) {
  return (
    <div className='overall-leadership-card'>
      <div className="image-leader">
<img src={image} alt='image of leader'/>
      </div>
      <div className="leadership-card-text-box">
        <h2>{name}</h2>
        <h4><i>{role}</i></h4>
      </div>
        
        </div>
  )
}

export default Leadershipcard