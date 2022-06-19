import React from "react";
import { Link } from 'react-router-dom';
function DataTables() {
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
                <li>
                  <a><i className="nc-icon nc-bank" />
                    <Link to="/admin">Dashboard</Link></a>
                    
                  
                </li>
                <li className="active">
              <a> <i className="nc-chart-bar-32" />
                    <p>Data tables</p></a>
                   
                  
                </li>


                
                <li>
                <a><i className="nc-icon nc-bell-55" />
                    <Link to="/reclamation">Complaints</Link></a>

                  
                </li>
                <li>
                  <a><i className="nc-icon nc-single-02" />
                    <Link to="/clients">Clients</Link></a>
                    
                  
                </li>
                <li>
                <a> <i className="nc-icon nc-single-02" />
                    <Link to="/voitures">Voitures</Link></a>
                   
                  
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
                  <a className="navbar-brand" href="javascript:;"> Data Tables</a>
                </div>
                
                
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Réservations</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                        
                       
                        <table className="table">
                          <thead className=" text-primary">
                            <tr><th>
                                Nom
                              </th>
                              <th>
                                Email
                              </th>
                              <th>
                                Véhicule
                              </th>
                              <th className="text-right">
                                Date début
                              </th>
                              <th className="text-right">
                                Date fin
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
                              <td>
                                MERCEDES-BENZ
                              </td>
                              <td className="text-right">
                                12/02/2021
                              </td>
                              <td className="text-right">
                                20/02/2021
                              </td>
                              &nbsp; &nbsp; &nbsp; 
                                <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModalCenter">
                                Update 
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
                              <h5>Update Reservation </h5>

                            </div>
                            <form>
                              <input type="text" placeholder=" Name" required/>
                              <input type="Email" placeholder="Email"required/>
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="text" placeholder="Vehicle"  required/>
                              <input type="date" placeholder="rental start date" required/>
                              <input type="date" placeholder="rental end date"  required/>
                            
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
                        &nbsp; &nbsp; &nbsp; 
                        <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                        &nbsp; &nbsp; &nbsp; 
                            </tr>
                            <tr>
                              <td>
                                Saleh trabelsi
                              </td>
                              <td>
                                saleh.trabelsi@gmail.com
                              </td>
                              <td>
                                Fiat 500
                              </td>
                              <td className="text-right">
                                04/11/2022
                              </td>
                              <td className="text-right">
                                08/11/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; 
                              
                              <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModalCenter">
                        Update 
                  </button>
                          
                        &nbsp; &nbsp; &nbsp; 
                        <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                        &nbsp; &nbsp; &nbsp; 
                            </tr>
                            <tr>
                              <td>
                                Mohamed Toumi
                              </td>
                              <td>
                                mohame1999@gmail.com
                              </td>
                              <td>
                                Golf 7
                              </td>
                              <td className="text-right">
                                27/04/2022
                              </td>
                              <td className="text-right">
                                03/05/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; 
                              
                              <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#exampleModalCenter">
                        Update 
                  </button>
                            
                        &nbsp; &nbsp; &nbsp; 
                        <button id="red" className="btn btn-primary btn-round" type="submit"> Delete</button>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header">
                      <h4 className="card-title"> Réparation Voitures</h4>
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
                              <th>
                                Date dernier vidange
                              </th>
                              <th>
                                Kilométrage
                              </th>
                              <th>
                                Carburant
                              </th>
                              <th>
                                Panne
                              </th>
                            </tr></thead>
                          <tbody>
                            <tr>
                              <td>
                                1
                              </td>
                              <td>
                                120Tun14579
                              </td>
                              <td>
                                22/06/2021
                              </td>
                              <td>
                                65000
                              </td>
                              <td>
                                essence
                              </td>
                              <td>
                                Aucun
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <Link to="/reparation">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                2
                              </td>
                              <td>
                                90Tun4879
                              </td>
                              <td>
                                10/06/2019
                              </td>
                              <td>
                                279000
                              </td>
                              <td>
                                Gasoil
                              </td>
                              <td>
                                Ventilateur réparé 
                                /
                                Crémaillère changé
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to="/reparation">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3
                              </td>
                              <td>
                                160Tun2590
                              </td>
                              <td>
                                06/06/2022
                              </td>
                              <td>
                                780000
                              </td>
                              <td>
                                essence
                              </td>
                              <td>
                                Batterie changé
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                                <Link to="/reparation">
                              <button type="submit" className="btn btn-primary btn-round">Update </button>
                              </Link>
                              </td>
                            </tr>
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
  export default DataTables