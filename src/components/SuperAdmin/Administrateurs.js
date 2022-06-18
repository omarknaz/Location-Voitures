import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
function Administrateurs() {

  const navigate = useNavigate();
  const [admin,setadmins] = useState([]);


  const LogoutSubmit = async(e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
    

  }



  // const [admin, setadmin] = useState([])
  // useEffect(()=>{
  //   async function getAlladmin(){
  //     try {
  //       const admin = await axios.get("")
  //       console.log(students.data)
  //       setStudents(students.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllStudent()
  // }, [])





   //List admin 
     useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
    
    axios.get("http://127.0.0.1:8000/api/ShowAdmin", {
        headers: headers
      })
    .then(res => {
        console.log('heydata',res.data)
        setadmins(res.data.admins)
     
    
    }).catch(err => {
      console.log(err)
    })

    return() => {isMounted =false
    };

  },[navigate]);
 

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
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://127.0.0.1:8000/api/deleteadmin/"+id, {
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
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              
            <a  className="simple-text logo-mini">
                <div className="logo-image-small">
                  <img src="assets/images/logo-small.png" />
                </div>
                <p>CT</p> 
              </a>
              <a  className="simple-text logo-normal"></a>
                WheelCar Backoffice
                
              
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active">
                  <a> <i className="nc-icon nc-single-02" />
                    <Link to="/administrateurs">Administrateurs</Link>
                  </a>
                  </li>
                  <li>
                  <a> <i className="nc-icon nc-single-02" />
                    <Link to="/addadmins">Add Admins</Link>
                  </a>
                   
                </li>
                <li>
                <button type='button' onClick={ LogoutSubmit} className='nav-lin btn btn-danger btn-sm text_white'>Logout</button>
                </li>
            </ul>
            </div>
          </div>
          <div className="main-panel">
            {/* Navbar */}
           
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="navbar-toggle">
                   
                  </div>
                  <a className="navbar-brand" href="javascript:;"> List Admins</a>
                </div>
               
                
                
              </div>
            </nav>
            
            {/* End Navbar */}
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Admins</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                        
                       
                        <table className="table">
                          <thead className=" text-primary">
                            <tr><th>
                                Name
                              </th>
                              <th>
                                Email
                              </th>
                             
                            </tr></thead>
                          <tbody>

                          {admin?.map((admins) => (
                             <tr>
                             <td>
                             <p>{admins.name}</p>
                             </td>
                             <td>
                             <p>{admins.email}</p>
                             </td>
                             &nbsp; &nbsp; &nbsp; 
                             <Link to="/updateadmin">
                             <button type="submit" className="btn btn-primary btn-round">Update </button>
                             </Link>
                             <Link to="/updateadmin">
                             <button type="submit" className="btn btn-primary btn-round">Update </button>
                             </Link>
                            &nbsp; &nbsp; &nbsp; 
                            <button id="red" className="btn btn-primary btn-round" type="button" onClick={()=>deleteOperation(admins.id)} > Delete</button>
                            &nbsp; &nbsp; &nbsp; 
                        
                           </tr>
                         
                           
                          ))}
                            
                            
                           
                          </tbody>
                          
                        </table>
                        
                        <div className="update ml-auto mr-auto">
                          <Link to="/addadmins">
                          <button className="buton" type="button"> Add Admins</button>
                          </Link>
                           
                          </div>
                        
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
  export default Administrateurs