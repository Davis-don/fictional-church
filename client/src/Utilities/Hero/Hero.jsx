import React from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero({ page, imgsrc }) {
  const styleBg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgsrc})`,
    height: "20rem",
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };
  
  
  
  return (
    <div style={styleBg} className='overall-about-hero-container'>
      <div className="hero-textbox-aboutpg">
        <ul className='list-unstyled about-hero-links-container'>
          <li className='text-light'><h1>{page}</h1></li>
          <li>
            <ul className='list-unstyled about-nav-links'>
              <li className='text-light'><h2>Home</h2></li>
              <li className='text-light'><h2>/</h2></li>
              <li className='text-light'><h2>{page}</h2></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;



// import React from 'react'
// import './Hero.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function Hero({page,imgsrc}) {
//   const styleBg = {
//     // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/footer.jpg")'
//     dislay:"none"
//   };
  
//   return (
//     <div style={{styleBg}} className='ovearall-about-hero-container'>
//         <div  className="hero-textbox-aboutpg">
//           <ul className='list-unstyled about-hero-links-container'>
//            <li className='text-light'><h1>{page}</h1></li>
//            <li>
//             <ul className='list-unstyled about-nav-links'>
//              <li className='text-light'><h2>Home</h2></li>
//              <li className='text-light'><h2>/</h2></li>
//              <li className='text-light'><h2>{page}</h2></li>
//             </ul>
//            </li>
//           </ul>
//         </div>
//         </div>
//   )
// }

// export default Hero