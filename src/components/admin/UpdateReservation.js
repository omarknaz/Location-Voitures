import React from "react";
function UpdateReservation() {

              return (
                <div className="container">
                <div className="row">
                  <div className="col-md-7 padd-r0">
                    <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                      <div className="wheel-header">
                        
                      </div>
                      <form >
                      <label > Nom</label>
                        <input type="text"  />
                        <label > Email</label>
                        <input type="email" />
                        <label > Véhicule</label>
                        <input type="text"/>
                       
                          <label > Date début</label>
                        <input type="date" />
                        
                        <label > Date fin</label>
                        <input type="date"   />

                      
                        
                        <label htmlFor="input-val1">
                        </label>
                        <button className="buton" type="button"> Update Reservation</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
        
              );
            }
export default  UpdateReservation
