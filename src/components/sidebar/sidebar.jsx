 import React, { useState } from 'react';
 
  import "./sidebar.scss";
  import {HomeOutlined, SettingsOutlined,BusinessCenter, CheckBox, Wysiwyg, PersonOutlineOutlined} from '@mui/icons-material';
  import { NavLink } from "react-router-dom";
  import {FaBars} from 'react-icons/fa';
  
  const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle =() => setIsOpen(!isOpen);
    const menuItem=[
      {
        path:"/",
        name:"Dashboard",
        icon:<HomeOutlined/>
      },
      {
        path:"/agents",
        name:"Agent",
        icon:<BusinessCenter/>
      },
      {
        path:"/form",
        name:"Forms",
        icon:<CheckBox/>
      },
      {
        path:"/policy",
        name:"Policy",
        icon:<Wysiwyg/>
      },
      {
        path:"/user",
        name:"User",
        icon:<PersonOutlineOutlined/>
      },
      {
        path:"/setting",
        name:"Setting",
        icon:<SettingsOutlined/>
      },
    ]
    
    return (  
        <div className='container'>
            <div style={{width:isOpen ? "200px" : "55px"}} className="sidebar">
              <div className="top-section">
              <img src="https://th.bing.com/th/id/OIP.2SRi1bARhAFgEB_US6wFBAHaHa?pid=ImgDet&rs=1" alt="" style={{display:isOpen ? "block" : "none"}} className="avatar" />
                <h1 style={{display:isOpen ? "block" : "none"}} className="logo">Kuraz </h1>
                   
               
               <div style={{marginLeft:isOpen ? "40px" : "0px"}} className='bars'>
                <FaBars onClick={toggle}/>
               </div>
               </div>
               {
                menuItem.map((item,index)=>(
                  <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div style={{display:isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>

                  </NavLink>
                ))
               }
        
             </div>
             <main>{children}</main>

             </div>
    );
  }
   
  export default Sidebar
  