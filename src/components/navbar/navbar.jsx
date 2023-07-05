import "./navbar.scss";
import {LanguageOutlined ,NotificationsNoneOutlined, SearchOutlined,Settings} from '@mui/icons-material';

const Navbar = () => {
    return ( 
        <div className="navbar">
         <div className="leftside">
             
                <input type="text" placeholder="Search here..." />
                   <SearchOutlined />
              </div>

             <div className="rightside"> 
               <div className="item">
                <LanguageOutlined className="icon" />
                   English
              </div>
             <div className="item">
               <NotificationsNoneOutlined className="icon" />
              <div className="counter">1</div>
             </div>
                 <div className="item">
                
                    <Settings/>
                 </div>
                 <div className="item">
              
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
                 
                 </div>
                </div>
            
            
    );
}
 
export default Navbar;