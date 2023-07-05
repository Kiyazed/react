import "./ahome.scss"
import Agent from "./home/agent/agent";
import Header from "./home/agent/agentHeader/agentheader";
const Ahome = () => {
    return ( 
       <div className="ahome">
        <Header/>
        <Agent/>
       </div>
     );
}
 
export default Ahome;