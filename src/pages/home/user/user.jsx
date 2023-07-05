import "./user.scss"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Emoji from 'react-emoji-render';
import { DataGrid } from "@mui/x-data-grid";
function User() {
  const [data,setData] = useState([]);

  
  useEffect(() => {
   // Fetch data from the API
   axios.get('https://my.api.mockaroo.com/users.json?key=4d5ad210')
     .then(response => {
       // Set the data in the state
       setData(response.data);
     })
     .catch(error => {
       console.error(error);
     });
 }, []);

 const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First Name', width: 70 },
  { field: 'last_name', headerName: 'Last name', width: 100 },
  {
    field: 'email', headerName: 'Email',
    width: 150,
  },
  {
    field: 'phone_number', headerName: 'Phone Number',
    width: 180,
  },
  {
    field: 'address', headerName: 'Address',
    width: 150,
  },
  {
    field: 'status', headerName: 'Status',
    width: 80,
  },
  {
    field: 'role', headerName: 'Role',
    width: 100,
  },
  {
    field: 'organization', headerName: 'Organization',
    width: 80,
  },
]

    return (
      <div className="user">
      <div className="header">
    <h1>Hello <Emoji text=":wave:"/> </h1></div>
    
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

 
export default User;