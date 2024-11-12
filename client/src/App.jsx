import "./App.css";
import Homescreen from "./Pages/Homepage/Homescreen";
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Sermons from "./Pages/Sermons/Sermons";
import Events from "./Pages/Events/Events";
import Churches from "./Pages/Churches/Churches";
import Contact from "./Pages/Contact/Contact";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route
      path="/"
      element={
        <Layout>
        <Homescreen/>
        </Layout>
      }
      />
      <Route
      path = '/about'
      element={
        <Layout>
        <Aboutpage/>
        </Layout>
      }
      />
      <Route 
      path="/sermons"
      element = {
        <Layout>
          <Sermons/>
        </Layout>
      }
      />
      <Route
      path="/events"
      element={
        <Layout>
          <Events/>
        </Layout>
      }
      />
      <Route
      path="/churches"
      element={
        <Layout>
          <Churches/>
        </Layout>
      }
      />
      <Route
      path="/contact"
      element={
        <Layout>
          <Contact/>
        </Layout>
      }
      />
    </Routes>
    
    </BrowserRouter>

    
    </div>
  );
}

export default App;
