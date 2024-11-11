import React from 'react'
import churchesimg from '../../assets/footer.jpg'
import './churches.css'
import Hero from '../../components/Hero/Hero'
function Churches() {
  return (
    <div className='overall-churches-container'>
        <Hero page="Churches" imgsrc={churchesimg}/>
        </div>
  )
}

export default Churches