
import Swal from 'sweetalert2';
import axios from 'axios';
import React, { useEffect , useState} from 'react';

import { useNavigate } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";


function ClientList() {

  const navigate = useNavigate();
const [users,setUser] = useState([]);


//LIST USER
   useEffect(() => {
  let isMounted = true

  const token = localStorage.getItem('token');
 
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + `${token}`
  }

  axios.get("http://127.0.0.1:8000/api/afficherUsers", {
      headers: headers
    })
  .then(res => {
      console.log('heydata',res.data)
      setUser(res.data.users)
   
  
  }).catch(err => {
    console.log(err)
  })

  return() => {isMounted =false
  };

},[navigate]);


//Button delete

function deleteOperation(id){
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + `${token}`

  }

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
     await axios.delete("http://127.0.0.1:8000/api/DeleteUser/"+id, {
        headers: headers
      })
    .then(res => {
        console.log(res.data.message)
        
    
     
    
    }).catch(err => {
      console.log(err)
    })
    window.location.reload(false);

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

 
 
}



      return (
  
        <div className="wrapper ">
       <Sidebar/>
          <div className="main-panel">
        
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Clients</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">

                        
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>
                           
                          </th>
                          <th>
                            NAME
                          </th>

                          <th>
                            LASTNAME
                          </th>
                          <th>
                            EMAIL
                          </th>
                          <th>
                             PHONE
                          </th>
                          <th>
                             ADRESSE
                          </th>
                        </tr>

                      </thead>
                      <tbody>
                      {users?.map((users) => (
                        <tr>
                            <td>
                           
                           </td>
                          <td>
                            {users.name}
                          </td>
                          <td>
                          {users.lastname}
                          </td>
                          <td>
                          {users.email}
                          </td>
                          <td>
                          {users.tel}
                          </td>
                          <td>
                          {users.adresse}
                          </td>
                         
                          <td>
                          
                            <button id="red" className="btn btn-primary btn-round" type="submit" onClick={()=>deleteOperation(users.id)}> Delete</button>
                          </td>
                        </tr>

                        
                      ))}

                      </tbody>
                    </table>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  export default ClientList