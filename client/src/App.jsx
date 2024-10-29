import "./App.css";
import Homescreen from "./Pages/Homepage/Components/Homescreen";
import Header from "./Utilities/Header/Header";
import Footer from "./Utilities/Footer/Footer";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
