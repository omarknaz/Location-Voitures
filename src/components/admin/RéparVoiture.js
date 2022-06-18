import React from "react";
function RéparVoiture() {

              return (
                <div className="container">
                <div className="row">
                  <div className="col-md-7 padd-r0">
                    <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                      <div className="wheel-header">
                        
                      </div>
                      <form >
                      
                        <label > Matricule</label>
                        <input type="text" />
                        <label > Date dernier vidange</label>
                        <input type="date"/>
                       
                          <label > Kilométrage</label>
                        <input type="text" />


                        <label > Carburant</label>
                        <input type="text" />
                        <label > Panne</label>
                        <input type="text" />
                        
                        <label htmlFor="input-val1">
                        </label>
                        <button className="buton" type="button"> Update Repair</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
        
              );
            }
export default  RéparVoiture
