import React from "react";
function UpdateVehicle () {
    return (
<div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7 padd-r0">
                          <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                            <div className="wheel-header">
                              
                            </div>
                            <form >
                            
                              <label > Registration number</label>
                              <input type="text" />
                              <label > Model</label>
                              <input type="text"  />
                              <label > Mileage</label>
                              <input type="Email"/>
                             
                                <label > Date of entry into service of the car</label>
                              <input type="date" placeholder="Date mise en circulation"  />
                              <label > Car picture</label>
                              <input type="file"  accept="image/png, image/jpeg"  />

                            
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="buton" type="button"> Update Vehicle</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 );
}
export default  UpdateVehicle
