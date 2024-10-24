import React from 'react'
import './Massorder.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Bible1 from '../../../../assets/swahili.jpg'
import Bible2 from '../../../../assets/english.jpg'
import Bible3 from '../../../../assets/Kikuyu.jpg'

function Massorder() {
  return (
    <div className='overall-mass-order'>
        <h1 className='order-mass-main'>Order of Masses</h1>
        <p className='text-secondary order-mass-p'>We hold masses in all our churches at different times. Below are the masses held in the parish center every Sunday</p>
        <div className="overall-massorder-cards-overall">
            <div className="massorder-card">
          <div className="image-card-mass-order">
         <img className='massorder-img' src={Bible1} alt='image of bible'/>
          </div>
          <div className="massorder-card-text-box">
          <h2 className='card-order-heading'>English Mass</h2>
          <p className='text-secondary card-p'>Mununga-ini 6.30am</p>
          </div>
            </div>
            <div className="massorder-card">
                <div className="image-card-mass-order">
                <img className='massorder-img' src={Bible2} alt='image of bible'/>
             
          </div>
          <div className="massorder-card-text-box">
          <h2 className='card-order-heading'>Kiswahili Mass</h2>
          <p className='card-p text-secondary'>Sts. Peter & Paul Kamakwa </p>
          <ul className='list-unstyled massorder-ul'>
            <li> Mon – Sat: 6.30am</li>
            <li>Sun: 7.15am</li>

          </ul>
          </div>
            </div>
            <div className="massorder-card">
                <div className="image-card-mass-order">
                <img className='massorder-img' src={Bible3} alt='image of bible'/>
          </div>
          <div className="massorder-card-text-box">
          <h2 className='card-order-heading'>Kikuyu Mass</h2>
          <p className='card-p text-secondary'>At all the Local centres at the time indicated at the Local centre's section</p>
          </div>
          
            </div>
        </div>
        </div>
  )
}

export default Massorder