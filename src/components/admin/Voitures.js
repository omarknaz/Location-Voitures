import React from "react";
import { Link } from 'react-router-dom';
function Voiture() {
      return (
  
        <div className="wrapper ">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a className="simple-text logo-mini">
                <div className="logo-image-small">
                  <img src="../assets/images/logo-small.png" />
                </div>
                {/* <p>CT</p> */}
              </a>
              <a className="simple-text logo-normal">
                WheelCar Backoffice
                <div className="logo-image-big">
                </div>
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li>
                  <a><i className="nc-icon nc-bank" />
                    <Link to="/admin">Dashboard</Link></a>
                  
                </li>

                <li>
                  <a><i className="nc-chart-bar-32" />
                   <Link to="/datatables">Data tables</Link></a>
                    
                  
                </li>

               
               

                <li >
                  <a> <i className="nc-icon nc-bell-55" />
                  <Link to="/reclamation">Complaints</Link></a>
                    
                 
                   
                  
                </li>
                <li>
              <a><i className="nc-icon nc-single-02" />
                    <Link to="/clients">Clients</Link>
                  </a>
                    
                </li>
                <li className="active ">
              <a>
                <i className="nc-icon nc-single-02" />
                    <Link to="/voitures" >Voitures</Link>
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
                    <button type="button" className="navbar-toggler">
                      <span className="navbar-toggler-bar bar1" />
                      <span className="navbar-toggler-bar bar2" />
                      <span className="navbar-toggler-bar bar3" />
                    </button>
                  </div>
                  <a className="navbar-brand" href="javascript:;">Gérer Voitures</a>
                </div>
                
                
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Voitures</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                       
                       <table className="table">
                          <thead className=" text-primary">
                            <tr><th>
                                Id
                              </th>
                              <th>
                                Matricule
                              </th>
                              
                              <th className="text-right">
                                Kilométrage
                              </th>
                              <th className="text-right">
                                Date mise en circulation
                              </th>
                            </tr></thead>
                          <tbody>
                            <tr>
                              <td>
                                1
                              </td>
                              <td>
                                112TUN58960
                              </td>
                              
                              <td className="text-right">
                                80000km
                              </td>
                              <td className="text-right">
                                20/02/2021
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <Link to="/updatevehicle">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                        &nbsp; &nbsp; &nbsp; <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                            </tr>
                            <tr>
                              <td>
                                2
                              </td>
                              <td>
                                170TUN7520
                              </td>
                              
                              <td className="text-right">
                                859000Km
                              </td>
                              <td className="text-right">
                                08/11/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <Link to="/updatevehicle">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                        &nbsp; &nbsp; &nbsp;  <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                            </tr>
                            <tr>
                              <td>
                                3
                              </td>
                              <td>
                                140TUN14563
                              </td>
                             
                              <td className="text-right">
                                2500Km
                              </td>
                              <td className="text-right">
                                03/05/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <Link to="/updatevehicle">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                        &nbsp; &nbsp; &nbsp;  <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                            </tr>
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="update ml-auto mr-auto">
                          <button type="submit"  className="buton" data-toggle="modal" data-target="#exampleModalCenter">
                                Add Vehicle 
                                </button>
                                 {/* Modal */}
                  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                   
                          <div className="modal-body">
                        <div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div id="reg" className="col-md-7 padd-r0">
                        <div id="add" className="wheel-register-log marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                        <div className="modal-header">
                          <h5 id="update" className="modal-title" >Update Vehicle</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        
                      
                          
                            <div className="wheel-header">
                              <h5>Add Vehcile </h5>

                            </div>
                            <form>
                              <input type="text" placeholder=" Registration number" required/>
                              <input type="text" placeholder="Mileage"required/>
                             
                              <input type="date" placeholder="Date of entry into service of the car"  required/>
                             
                              <input type="file" placeholder="Car picture" accept="image/*"   required/>
                            
                              <button className="wheel-btn" >Save Changes</button>
                            </form>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                            
                          </div>
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
  export default Voiture