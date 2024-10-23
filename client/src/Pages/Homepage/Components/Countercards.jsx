import React from 'react'
import './countercards.css'
import Countercard from './Countercard'
import counterData from '../../../Data/counterdata'

function Countercards() {
  return (
    <div className='overall-counter-cards'>
        {
            counterData.map((data)=>{
                return(
                    <Countercard key={data.description} iconSpec = {data.iconspec} count={data.count} description = {data.description}/>
                )
            })
        }
        </div>
  )
}

export default Countercards