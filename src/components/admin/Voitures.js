import React from "react";
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
                PFE Backoffice
                {/* <div class="logo-image-big">
              <img src="../assets/img/logo-big.png">
            </div> */}
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li>
                  <a>
                    <i className="nc-icon nc-bank" />
                    <p>Dashboard</p>
                  </a>
                </li>
                <li>
                  <a className="active" routerlink="/data-tables" routerlinkactive="active">
                    <i className="nc-chart-bar-32" />
                    <p>Data tables</p>
                  </a>
                </li>
                <li>
                  <a routerlink="/maps" routerlinkactive="active">
                    <i className="nc-icon nc-bell-55" />
                    <p>Gérer Demandes</p>
                  </a>
                </li>
                <li>
                  <a routerlink="/maps" routerlinkactive="active">
                    <i className="nc-icon nc-bell-55" />
                    <p>Gérer Réservations</p>
                  </a>
                </li>
                <li>
                  <a routerlink="/notifications" routerlinkactive="active">
                    <i className="nc-icon nc-bell-55" />
                    <p>Gérer réclamations</p>
                  </a>
                </li>
                <li>
                  <a routerlink="/user-profile" routerlinkactive="active">
                    <i className="nc-icon nc-single-02" />
                    <p>Gérer clients</p>
                  </a>
                </li>
                <li className="active ">
                  <a routerlink="/user-profile" routerlinkactive="active">
                    <i className="nc-icon nc-single-02" />
                    <p>Gérer Voitures</p>
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
                              <th>
                                Model
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
                              <td>
                                MERCEDES-BENZ
                              </td>
                              <td className="text-right">
                                80000km
                              </td>
                              <td className="text-right">
                                20/02/2021
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-primary btn-round">Update </button>
                        &nbsp; &nbsp; &nbsp; <button className="button" type="button"> Delete</button>
                            </tr>
                            <tr>
                              <td>
                                2
                              </td>
                              <td>
                                170TUN7520
                              </td>
                              <td>
                                BMW
                              </td>
                              <td className="text-right">
                                859000Km
                              </td>
                              <td className="text-right">
                                08/11/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-primary btn-round">Update </button>
                        &nbsp; &nbsp; &nbsp;  <button className="button" type="button"> Delete</button>
                            </tr>
                            <tr>
                              <td>
                                3
                              </td>
                              <td>
                                140TUN14563
                              </td>
                              <td>
                                Golf 7
                              </td>
                              <td className="text-right">
                                2500Km
                              </td>
                              <td className="text-right">
                                03/05/2022
                              </td>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="submit" className="btn btn-primary btn-round">Update </button> 
                        &nbsp; &nbsp; &nbsp;  <button className="button" type="button"> Delete</button>
                            </tr>
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="update ml-auto mr-auto">
                            <button className="buton" type="button"> Add Vehicles</button>
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