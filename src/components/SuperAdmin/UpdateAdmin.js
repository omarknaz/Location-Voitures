import React from "react";
function UpdateAdmin () {
    return (
        

                <div>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                  </button>
                  {/* Modal */}
                  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
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
                        </div>
                      
                          
                            <div className="wheel-header">
                              <h5>Update Admin </h5>

                            </div>
                            <form>
                              <input type="text" placeholder="First Name" required/>
                              <input type="text" placeholder="Last Name" required/>
                              <input type="Email" placeholder="Email"required/>
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="text" placeholder="Phone"  required/>
                              <input type="text" placeholder="Adresse" required/>
                              <input type="password" placeholder="Password"  required/>
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="wheel-btn" >Save Changes</button>
                            </form>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                        </div>
                        <div className="modal-footer">
                        <button  id="upd" type="button" className="btn btn-primary">Save changes</button>
                          <button id="upd" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              
        
 );
}
export default  UpdateAdmin
