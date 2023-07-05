import "./userbox.scss"
import {People, Person,PersonOff} from '@mui/icons-material';
const Userbox = () => {
    return ( 
        <div className="userbox" >
             <div className="items">
                <span className="itemTitle"><Person className="agentheadIcons"/> Active Users</span>
            <div className="itemConatiner">
                <span className="totalNumber">1000</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            <div className="items">
                <span className="itemTitle"><People className="agentheadIcons"/> Pending Users</span>
            <div className="itemConatiner">
                <span className="totalNumber">900</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            <div className="items">
                <span className="itemTitle"><PersonOff className="agentheadIcons"/> Deactivated Users</span>
            <div className="itemConatiner">
                <span className="totalNumber">50</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            
            </div>

        
     );
}
 
export default Userbox;