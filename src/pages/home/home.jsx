import Dashboard from "../Dashboard/Dashboard";
import Chart from "../../components/chart/chart";
import "./home.scss"
import { formData } from "../../data/data";
import Revenu from "../../components/chart2/revenu";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
    return (  
      <div className="home">
        <Navbar/>
       
        <Dashboard/>
        <div className="charts">
        <Chart data={formData} title="Form Submission" datakey="Form"/>
        <Revenu data={formData} title="Collected Revenu" datakey="Form"/>
        </div>
      </div>
 
        );
}
 
export default Home;