import React, {useState} from 'react';
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";

import Home from "./pages/home/home";
import {
  BrowserRouter as Router,Routes,Route
  
} from "react-router-dom";
import Ahome from "./pages/ahome";
import Userhome from "./pages/home/user/userhome";
import Formpage from "./pages/forms/form";
//import Policy from "./pages/home/policy/policy";
import Policy from "./pages/home/policy/policy";





function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
 
  return (

    <Router> 
      

    <div className="container">
    <Sidebar  />
        

     
     
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/agents" element={<Ahome/>}/>
        
        <Route path="/user" element={<Userhome/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/form" element={<Formpage/>}/>
        
          </Routes>
      
    </div>
    </Router>
    
  
  );
  }

export default App;
