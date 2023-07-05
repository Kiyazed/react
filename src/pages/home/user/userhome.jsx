import User from "./user";
import Userbox from "./userbox";
import "./userhome.scss"

const Userhome = () => {
    return (
        <div className="userpage">
            <Userbox/>
            <User/>
        </div>
      );
}
 
export default Userhome;