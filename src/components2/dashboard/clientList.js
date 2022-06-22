import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
function ClientList() {
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