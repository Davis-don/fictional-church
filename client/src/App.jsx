import "./App.css";
import Homescreen from "./Pages/Homepage/Components/Homescreen";
import Header from "./Utilities/Header/Header";
import Footer from "./Utilities/Footer/Footer";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Sermons from "./Pages/Sermons/Sermons";
import Events from "./Pages/Events/Events";
import Churches from "./Pages/Churches/Churches";
import Contact from "./Pages/Contact/Contact";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path = "/sermons" element = {<Sermons/>}/>
        <Route path = "/events" element = {<Events/>}/>
        <Route path="/churches" element = {<Churches/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
