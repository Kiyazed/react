import "./agent.scss"
import { DataGrid } from '@mui/x-data-grid';
import {Delete,Edit,Visibility,SearchOutlined} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { agentRows } from "../../../data/data";
import { useState } from "react";

function Agent(){
  const [data,setData]=useState(agentRows);
  const handleDelete = (id)=>{
    const updatedData = data.filter((item)=> item.id !== id);
    setData(updatedData);
  };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullName', headerName: 'Full Name', width: 130 },
        { field: 'phone', headerName: 'Phone Number', width: 140 },
        {
          field: 'email',
          headerName: 'Email',
          width: 160,
        },
        {
          field: 'org',
          headerName: 'Organization',
          width: 160,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 90,
        },
        {
          field: 'statu',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
              <>
              <Link to={"/update/" + params.id} >
              <Edit className="edit"/>
              </Link>
              <Delete className="delete" onClick={()=> handleDelete(params.id)} />
              <Visibility className="visible"/>
              </>
            );
          }
        },
       
       
      ];
      
     
    return (
      
             <div className="agent">
               <div className="search">
               < input type="text" placeholder="Search here..."/>
              <SearchOutlined/>  
            

         </div>
         <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
     
                </div>
                
      );
}
 
export default Agent;
