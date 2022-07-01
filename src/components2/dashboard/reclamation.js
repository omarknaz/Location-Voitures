import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
function Reclamation() {

  
  const navigate = useNavigate();
  const [reclamation,setrecalamtion] = useState([]);

  
  useEffect(() => {

    let isMounted = true
  
    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
  
    axios.get("http://127.0.0.1:8000/api/afficherReclamation", {
        headers: headers
      })
    .then(res => {
        console.log('heydata',res.data)
        setrecalamtion(res.data.message)
     
    
    }).catch(err => {
      console.log(err)
    })
  
    return() => {isMounted =false
    };
  
  },);

    return (

        <div className="wrapper ">
            <Sidebar />
            <div className="main-panel" style={{ height: '100vh' }}>

            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Reclamations</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                      <table className="table">
                      <thead>
              <tr>
                  
                  <th className="text-center" scope="col"> Date</th>
                  <th  className="text-center" scope="col">Complaint</th>
                  <th className="text-center" scope="col">User</th>
                
              </tr>
            </thead>
            <tbody>
            {reclamation?.map((Reclamation) => (
              <tr>
                
                <td >{Reclamation.created_at.split('T')[0]}</td>

                <td>{Reclamation.reclamation}</td>

                
                <td>{Reclamation.users.name}</td>
               

                
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
export default Reclamation