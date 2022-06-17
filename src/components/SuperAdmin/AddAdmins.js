import React from "react";
function AddAdmins() {
    return (
<div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7 padd-r0">
                          <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                            <div className="wheel-header">
                              
                            </div>
                            <form >
                              <input type="text" placeholder="First Name" />
                              <input type="text" placeholder="Last Name"  />
                              <input type="Email" placeholder="Email" />
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="text" placeholder="Phone"  />
                              <input type="text" placeholder="Adresse"/>
                              <input type="password" placeholder="Password" />
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="wheel-btn" >Add Admin</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 );
}
export default AddAdmins