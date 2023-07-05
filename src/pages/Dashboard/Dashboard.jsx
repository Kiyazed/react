import "./Dashboard.scss"
import {People, SupportAgent, PendingActions, FeedRounded} from '@mui/icons-material';
import Emoji from 'react-emoji-render';
const Dashboard = () => {
    return (
          <div>
        <div className="dashboard">
            <div className="items">
                <span className="itemTitle"><People className="dashIcons"/> Total Users</span>
            <div className="itemConatiner">
                <span className="totalNumber">10,000</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            <div className="item2">
                <span className="itemTitle"> <SupportAgent className="agentIcons"/>Active Agents</span>
            <div className="itemConatiner">
                <span className="totalNumber">1000</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            <div className="item3">
                <span className="itemTitle"><PendingActions className="pendingIcons"/>Pending Forms</span>
            <div className="itemConatiner">
                <span className="totalNumber">800</span>
                <span className="itemIcon">
                
                </span>
            </div>

            </div>
            <div className="item4">
                <span className="itemTitle"><FeedRounded className="dashIcons"/>Active Policies</span>
            <div className="itemConatiner">
                <span className="totalNumber">900</span>
                <span className="itemIcon">
                 
                </span>
            </div>


            </div>
            
        </div>
        <h3 className="text">Welcome,Yeabsira <Emoji text=":tada:"/> </h3>
        </div>
        
    );
}
 
export default Dashboard;