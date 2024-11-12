
import './sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosClose } from "react-icons/io";
import useSideStateStore from '../../../Store/sidebarState';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const Navigate = useNavigate();
  const toggleSideBar = useSideStateStore((state) => state.sidebarToggle);

  // alert(window.location.pathname)
  return (
    <div className='overall-sidebar-container'>
      <div onClick={() => toggleSideBar()} className="close-btn-here">
        <IoIosClose className='actual-close-icon' />
      </div>
      <div className="nav-links-holder-div">
        <ul className='list-unstyled'>
          <li className={window.location.pathname == '/' ? "active-sidebar" : ""} onClick={() => { Navigate("/"); toggleSideBar();setHome(false);setAbout(false);setSermons(false);setEvents(false);setChurches(false);setContact(false)}}>Home</li>
          <li className={window.location.pathname == '/about' ? "active-sidebar" : ""} onClick={() => { Navigate("/about"); toggleSideBar();setHome(false);setAbout(true);setSermons(false);setEvents(false);setChurches(false);setContact(false)}}>About</li>
          <li className={window.location.pathname == '/sermons' ? "active-sidebar" : ""} onClick={() => { Navigate("/sermons"); toggleSideBar();setHome(false);setAbout(false);setSermons(true);setEvents(false);setChurches(false);setContact(false) }}>Sermons</li>
          <li className={window.location.pathname == '/events'? "active-sidebar" : ""} onClick={() => { Navigate("/events"); toggleSideBar(); setHome(false);setAbout(false);setSermons(false);setEvents(true);setChurches(false);setContact(false) }}>Events</li>
          <li className={window.location.pathname == '/churches'? "active-sidebar" : ""} onClick={() => { Navigate("/churches"); toggleSideBar(); setHome(false);setAbout(false);setSermons(false);setEvents(false);setChurches(true);setContact(false) }}>Churches</li>
          <li className={window.location.pathname == '/contact' ? "active-sidebar" : ""} onClick={() => { Navigate("/contact"); toggleSideBar(); setHome(false);setAbout(false);setSermons(false);setEvents(false);setChurches(false);setContact(true) }}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
