import React from "react";
function Admin() {
      return (
  
        <div className="wrapper ">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                <div className="logo-image-small">
                  <img src="/assets/images/logo-small.png" />
                </div>
                {/* <p>CT</p> */}
              </a>
              <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                PFE Backoffice
                {/* <div class="logo-image-big">
              <img src="../assets/img/logo-big.png">
            </div> */}
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active ">
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
                  <a  routerlinkactive="active">
                    <i className="nc-icon nc-bell-55" />
                    <p>Gérer Administrateurs</p>
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
                <li>
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
                   
                  </div>
                  <a className="navbar-brand" href="javascript:;"> Dashboard </a>
                </div>
                
            
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-globe text-warning" />
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Recette</p>
                            <p className="card-title">5200DT</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-refresh" />
                        Update Now
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success" />
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Dépences</p>
                            <p className="card-title">850DT</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-calendar-o" />
                        Last day
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger" />
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Clients</p>
                            <p className="card-title">125</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o" />
                        In the last hour
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-favourite-28 text-primary" />
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Réclamation</p>
                            <p className="card-title">11</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-refresh" />
                        Update now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card ">
                    <div className="card-header ">
                      <h5 className="card-title">Users Behavior</h5>
                      <p className="card-category">24 Hours performance</p>
                    </div>
                    <div className="card-body ">
                      <canvas id="chartHours" width={400} height={100} />
                    </div>
                    <div className="card-footer ">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history" /> Updated 3 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card ">
                    <div className="card-header ">
                      <h5 className="card-title">Email Statistics</h5>
                      <p className="card-category">Last Campaign Performance</p>
                    </div>
                    <div className="card-body ">
                      <canvas id="chartEmail" />
                    </div>
                    <div className="card-footer ">
                      <div className="legend">
                        <i className="fa fa-circle text-primary" /> Opened
                        <i className="fa fa-circle text-warning" /> Read
                        <i className="fa fa-circle text-danger" /> Deleted
                        <i className="fa fa-circle text-gray" /> Unopened
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-calendar" /> Number of emails sent
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card card-chart">
                    <div className="card-header">
                      <h5 className="card-title">NASDAQ: AAPL</h5>
                      <p className="card-category">Line Chart with Points</p>
                    </div>
                    <div className="card-body">
                      <canvas id="speedChart" width={400} height={100} />
                    </div>
                    <div className="card-footer">
                      <div className="chart-legend">
                        <i className="fa fa-circle text-info" /> Tesla Model S
                        <i className="fa fa-circle text-warning" /> BMW 5 Series
                      </div>
                      <hr />
                      <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
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
  export default Admin