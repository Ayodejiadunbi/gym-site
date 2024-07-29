import Navbar from "./components/navbar";
import Home from "./components/home";
import Services from "./components/services";
import Gallary from "./components/gallary";
import Price from "./components/pricing";
import Contact from "./components/contact";
import About from "./components/about";


import { Routes ,Route } from "react-router-dom";

import "./App.css";


function App() {
  return (
    
      
  

        <Routes>
          <Route exact element ={ <Navbar/>}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/gallary" element={<Gallary/>}/>
          <Route path="/price" element={<Price/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Route> 
        </Routes>

      
    
  )
};

export default App;
