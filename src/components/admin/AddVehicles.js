import React from "react";
function AddVehicles() {
    return (
<div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7 padd-r0">
                          <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                            <div className="wheel-header">
                              
                            </div>
                            <form >
                              <input type="text" placeholder="Model" />
                              <input type="text" placeholder="Registration number"  />
                              <input type="Email" placeholder="Mileage" />
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="date" placeholder="Date mise en circulation"  />
                              <input type="file"  accept="image/png, image/jpeg"  />

                            
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="buton" type="button"> Add Vehicles</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 );
}
export default  AddVehicles
