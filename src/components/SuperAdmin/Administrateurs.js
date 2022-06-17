import React from "react";
import { Link } from 'react-router-dom';
function Administrateurs() {
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
                            <tr>
                              <td>
                                Aymen Hamdi
                              </td>
                              <td>
                                aymen.hamdi@gmail.com
                              </td>
                              
                              &nbsp; &nbsp; &nbsp; 
                        <button type="submit" className="btn btn-primary btn-round">Update </button>
                        &nbsp; &nbsp; &nbsp; 
                        <button className="button" type="button"> Delete</button>
                        &nbsp; &nbsp; &nbsp; 
                            </tr>
                            <tr>
                              <td>
                                Saleh trabelsi
                              </td>
                              <td>
                                saleh.trabelsi@gmail.com
                              </td>
                              
                              &nbsp; &nbsp; &nbsp; 
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                        &nbsp; &nbsp; &nbsp; 
                        <button className="button" type="button"> Delete</button>
                        &nbsp; &nbsp; &nbsp; 
                            </tr>
                            <tr>
                              <td>
                                Mohamed Toumi
                              </td>
                              <td>
                                mohame1999@gmail.com
                              </td>
                              
                              &nbsp; &nbsp; &nbsp; 
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                        &nbsp; &nbsp; &nbsp; 
                        <button className="button" type="button"> Delete</button>
                            </tr>
                            
                          </tbody>
                          
                        </table>
                        <div className="update ml-auto mr-auto">
                            <button className="buton" type="button"> Add Admin  </button>
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