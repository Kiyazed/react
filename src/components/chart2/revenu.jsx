import "./revenu.scss"
import { LineChart, Line, XAxis, CartesianGrid,Tooltip, ResponsiveContainer } from 'recharts';
const Revenu = ({title,dataKey}) => {
    const data = [{name: 'Jan', uv: 800, pv: 2400, amt: 2400},
    {name: 'Feb', uv: 600, pv: 2300, amt: 2400},
    {name: 'Mar', uv: 200, pv: 2000, amt: 2200},
    {name: 'April', uv: 250, pv: 2400, amt: 2100},
    {name: 'May', uv: 200, pv: 2400, amt: 2100}];
      
    return ( 
        <div className="revenu">
        <h3 className="chartTitle">{title} </h3>
        <ResponsiveContainer width="100%" aspect={2 / 1} >
        <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="blue" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    
    <Tooltip />
  </LineChart>
            </ResponsiveContainer> 
    </div>
     );
}
 
export default Revenu;