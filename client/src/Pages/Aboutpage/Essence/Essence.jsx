import React from 'react'
import './Essence.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Essencecard from './Concern/Essencecard'
import Essencedata from '../../../Data/Essencedata'

function Essence() {
  return (
    <div className='essence-section-overall'>
        {
  Essencedata.map((data)=><Essencecard icon={data.icon} title = {data.Title} description = {data.description} />)
        }
        </div>
  )
}

export default Essence