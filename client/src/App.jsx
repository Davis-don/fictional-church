import "./App.css";
import Homescreen from "./Pages/Homepage/Components/Homescreen";
import Header from "./Utilities/Header/Header";
import Footer from "./Utilities/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Homescreen />
      <Footer/>
    </div>
  );
}

export default App;
