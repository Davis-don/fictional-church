import "./App.css";
import Homescreen from "./Pages/Homepage/Components/Homescreen";
import Header from "./Utilities/Header/Header";

function App() {
  return (
    <div className="app">
      <Header/>
      <Homescreen />
    </div>
  );
}

export default App;
