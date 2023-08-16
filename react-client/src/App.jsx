
import './App.css';
import axios from "axios";
import React, {  useEffect , useState } from "react";
import Search from "./components/Search.jsx";
import Top from "./components/Top.jsx";
import Upcoming from "./components/Upcoming.jsx";
import Footer from "./components/Footer.jsx";
import Actor from "./components/Actor.jsx";
function App() {

return (
 <div className="bory">
    
  <Search />
  <div className="both">
  <Top />
  <Upcoming/>
  </div>
  <Actor/>
  <Footer/>
 </div>
)
}

export default App;
