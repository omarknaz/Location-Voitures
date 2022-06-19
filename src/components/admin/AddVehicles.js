import React,{useState,useHistory} from "react";
import axios from "axios";


function AddVehicles() {
  const [Matricule,setMatricule]= useState('');
  
  const [VehiculePic,setVehiculePic]= useState('');

  const [Kilometrage,setKilometrage]= useState('');

  const [DateMiseEnCirculation,setDateMiseEnCirculation]= useState('');
  
  const history=useHistory;

  const handleSubmit = (e) => {

    e.preventDefault();
    let formData = {"Matricule":Matricule, "kilometrage":Kilometrage,"date_mise_en_circulation":DateMiseEnCirculation,"VehiculePic":VehiculePic.base64.split("base64,")[1]};

    axios.post(`http://127.0.0.1:8000/api/Addvehicule`, formData )

    .then(res => {

      

      history.go(-1);

    })

}

    return (
      

      

 



<div className="wheel-register-block">
            <div className="container">
              <div className="row">
                <div id="log" className="col-md-8 padd-l0">
                  <div id="ajout" className="wheel-register-log marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                    <div className="wheel-header">
                              
                            </div>
                            <form   onSubmit={handleSubmit}>
                            
                             
                              <input type="text" value={Matricule} placeholder="Registration Number"  onChange={(e)=> setMatricule(e.target.value) }/>
                             
                              <input type="text" value={Kilometrage} placeholder="Mileage" onChange={(e)=> setKilometrage(e.target.value) }  />
                             
                                
                              <input type="date" placeholder="Date mise en circulation"  value={DateMiseEnCirculation} onChange={(e)=> setDateMiseEnCirculation(e.target.value) } />
                              
                              <input type="file"  accept="image/*"  onChange={(e)=>   setVehiculePic(e.target.file)}  />

                              {/*<input type="file"  accept="image/*" callbackFunction={(file_arr) => {setVehiculePic(file_arr[0])}}  />*/}
                            
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button id="azer" className="buton" type="submit"> Add Vehicles</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 );
}
export default  AddVehicles
