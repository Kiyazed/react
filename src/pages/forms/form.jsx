import "./form.scss"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
 
function Formpage(){

  const [data,setData] = useState([]);

  
  useEffect(() => {
   // Fetch data from the API
   axios.get('https://my.api.mockaroo.com/forms.json?key=4d5ad210')
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
  { field: 'policy_number', headerName: 'Policy Number', width: 70 },
  { field: 'assure_name', headerName: 'Assure name', width: 100 },
  {
    field: 'phone_number', headerName: 'Phone',
    width: 150,
  },
  {
    field: 'destination', headerName: 'Destination',
    width: 100,
  },
  {
    field: 'beneficiaries', headerName: 'Beneficiaries',
    width: 150,
  },
  {
    field: 'date', headerName: 'Date',
    width: 100,
  },
  {
    field: 'representative_id', headerName: 'Representative id',
    width: 200,
  },
  {
    field: 'status', headerName: 'Status',
    width: 70,
  },
]

    return(
  
      
        <div className="form">
          <div className="header">
        <h1 className="ben">Beneficiary Declaration Form </h1></div>
        <div className="newContainer">
          <div className="bottom">
            <div className="left">
              <img src="https://i.pinimg.com/564x/3e/4d/69/3e4d690ff412396177e9ee57338e7f4a.jpg"   alt=""  /> 
            
            </div>

            <div className="right">
              <div className="tiright"> Attaching to and forming part of group Life Assurance Policy No. GLAP/---</div>
              <form>
                <div className="formInput">
                  <label >Policy Owner </label>
                  <input type="text" />
                  </div>
                  <div className="formInput">
                  <label >Agency Name </label>
                  <input type="text" />
                  </div>
                  <div className="formInput">
                  <label >Assured's Name </label>
                  <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="formInput">
                  <label >Region </label>
                  <input type="text" placeholder="(Ex.Amhara, Oromia,..." />
                  </div>
                  <div className="formInput">
                  <label > Zone</label>
                  <input type="text"  />
                  </div>
                  <div className="formInput">
                  <label >Woreda </label>
                  <input type="text" />
                  </div>
                  <div className="formInput">
                  <label >Tel no. </label>
                  <input type="text" placeholder="+251..."/>
                  </div>
                  <div className="formcountry">
                    <label className="labelcountry">Country of Destination :
                    <select name="values" className="select">
                        <option value="select">select</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option>Sudan</option>
                        <option>USA</option>
                        <option>Ertria</option>
                        <option>Uganda</option>
                        <option>Canada</option>
                        <option>Russia</option>
                        <option>UK</option>
                        <option>Kenya</option>

                    </select>
                    </label>
                    
                  </div>
                  
                  </form>
                  <button className="button">submit</button>
                  </div>
                 
                </div>
                  
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




export default Formpage;

