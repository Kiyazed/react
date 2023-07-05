import"./policy.scss"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
 function Policy(){
  const [data,setData] = useState([]);

  
   useEffect(() => {
    // Fetch data from the API
    axios.get(' https://my.api.mockaroo.com/policies.json?key=4d5ad210')
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
        { field: 'policy_name', headerName: 'Policy Name', width: 180 },
        { field: 'policy_path', headerName: 'Policy Path', width: 350 },
        {
          field: 'policy_detail', headerName: 'Policy Detail',
          width: 440,
        },
        /* {
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
        */
       
       
       
      ];
      
     
    return (

       <div className="policy">
        <div className="policytitle">
         OUR POLICY
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

  
export default Policy;