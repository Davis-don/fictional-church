import React from 'react'
import './daysermon.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagesermon from '../../assets/swahili.jpg'
function Daysermon() {
  return (
    <div className='oveerall-sermonday-section'>
        <h1>LATEST SERMON</h1>
        <p className='text-secondary day-p'>A discourse for the purpose of religious</p>
        <div className="day-sermon-image">
            <img src={imagesermon} alt='bible image'/>
        </div>
        <div className="sermon-text-box">
            <h2 className='sermon-title'>WHAT JESUS SEES IN YOU</h2>
            <p className='preacher-detail'>Pastor: <span className='text-danger'>Josh Brighton</span> <br/>
             On: 08 MAR 2018,
             </p>
             <p className='text-secondary sermon-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at convallis justo. Suspendisse ut nisl diam. Sed non vehicula sem. Etiam efficitur eros a leo mollis, interdum sodales erat ultricies. Pellentesque in felis sem. Phasellus nunc tellus, suscipit rutrum risus quis, aucibus vel ipsumeu.</p>
        </div>
        </div>
  )
}

export default Daysermon