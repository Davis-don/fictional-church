import React from 'react'
import './essencecard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function Essencecard({icon,title,description}) {
  return (
    <div className='overall-essence-card'>
        <div className="essence-icon-container">
          <h1 className='text-danger essence-icon'>{icon}</h1>
        </div>
        <div className="essence-text-box">
            <h1 className='text-light container-fluid'>{title}</h1>
            <p className='text-light container-fluid'>{description}</p>
        </div>
        </div>
  )
}

export default Essencecard