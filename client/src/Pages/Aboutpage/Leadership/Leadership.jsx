import React from 'react'
import Leadershipcard from './Leadershipcard'
import leaders from './leadershipdata'
import './leadership.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Leadership() {
  return (
    
    <div className='overall-leadership-container'>
        <h1 className='Our-leaders-h'>Our leaders</h1>
        <p className='text-secondary'>It’s leader of a Christian congregation</p>
        <div className="leaders-card-container">
        {
            leaders.map((leaderData)=><Leadershipcard image={leaderData.img} name={leaderData.name} role={leaderData.role}/>)
     
        }
        </div>
       
        </div>
        
  )
}

export default Leadership