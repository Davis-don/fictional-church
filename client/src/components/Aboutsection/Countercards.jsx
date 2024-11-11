import React from 'react'
import './countercards.css'
import Countercard from './Countercard'
import counterData from '../../Data/counterdata'

function Countercards() {
  return (
    <div className='overall-card-div'>
    <h1>Living in God's Amazing Grace!</h1>
    <p className='text-secondary'>Below are some of the statistical facts about our parish - and these change with every passing day.</p>
    <div className='overall-counter-cards'>
        {
            counterData.map((data)=>{
                return(
                    <Countercard key={data.description} iconSpec = {data.iconspec} count={data.count} description = {data.description}/>
                )
            })
        }
        </div>
        </div>
  )
}

export default Countercards