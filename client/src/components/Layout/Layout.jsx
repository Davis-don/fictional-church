import React from 'react'
import Header from './Header/Header'
import Sidebar from './sidebar/sidebar'
import './layout.css'
import useSideStateStore from '../../Store/sidebarState'
import Footer from './Footer/Footer'

function Layout({children}) {
    const currentState = useSideStateStore((state)=>state.isSidebarOpen)
    //alert(`bool ${currentState}`)
  return (
    <div className="layout">
    <Header />
    <div className="content-wrapper">
        <div className="sidebar-layout">
            {currentState && 
       <Sidebar />
            }
        
        </div> 
      <main className="main-content">
        {children}
        <Footer/>
        </main>
    </div>
   
  </div>
  )
}

export default Layout