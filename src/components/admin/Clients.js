import React from "react";
import { Link } from 'react-router-dom';
function Clients() {
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
            <a  className="simple-text logo-normal">
                WheelCar Backoffice
                </a>
                
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li>
                  <a><i className="nc-icon nc-bank" />
                    <Link to="/admin">Dashboard</Link></a>
                    
                  
                </li>
                <li >
              <a> <i className="nc-chart-bar-32" />
                    <Link to="/datatables">Data tables</Link></a>
                   
                  
                </li>
               

                
                <li>
                <a><i className="nc-icon nc-bell-55" />
                    <Link to="/reclamation">Complaints</Link></a>
                    
                  
                </li>
                <li className="active">
                  <a><i className="nc-icon nc-single-02"/>
                   Clients</a>
                    
                  
                </li>
                <li>
                <a><i className="nc-icon nc-single-02" />
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
                  <a className="navbar-brand" href="javascript:;"> List Clients</a>
                </div>
                
                
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Clients</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        
                        
                       
                       
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
  export default Clients