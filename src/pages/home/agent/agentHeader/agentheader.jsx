import "./agentheader.scss"
import {People, Person,PersonOff,MovingOutlined} from '@mui/icons-material';
const Header = () => {
    return ( 
        <div className="widget">
            <div className="items">
                <div className="itemleft">
                <span className="itemTitle"><Person className="agentheadIcons"/> Active Agents</span>
             <div className="itemConatiner">
                <span className="totalNumber">967</span>
                <div className="itemright">
                    <hr/>
                    <a href="users">see all Active Agents</a>
                 </div>
            </div>
            </div>
             <div className="itemright"></div>

            </div>
            <div className="item2">
                <span className="itemTitle"><People className="agentPending"/> Pending Agents</span>
            <div className="itemConatiner">
                <span className="totalNumber">2000</span>
                <div className="itemright">
                    <hr/>
                    <a href="users">see all Pending Agents</a>
                
                </div>
            </div>

            </div>
            <div className="item3">
                <span className="itemTitle"><PersonOff className="agentIcons"/> Deactivated Agents</span>
                
            <div className="itemConatiner">
                <span className="totalNumber">100</span>
                <div className="itemright">
                    <hr/>
                    <a href="users">see all Deactivated Agents</a>
                
                </div>
            </div>

            </div>
            
            
            </div>
           

     );
}
 
export default Header;