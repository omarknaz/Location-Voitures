import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {postcar} from '../../redux/actions/reducers/admin.action';
import { updatecar } from "../../redux/actions/reducers/admin.action";
import Sidebar from "./layouts/sidebar";


function CarsList() {

  const [modalOpen, setModalOpen] = useState(false);
  const [CreatemodalOpen, setCreateModalOpen] = useState(false);
  const [ modalContent, setModalContent ] = useState(null)


  const { car } = useSelector((state) => state.admin)


  const [Cars,setcar] =useState([]);
  const [Matricule, setmatricule] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [date_mise_en_circulation, setdate] = useState("");
  const [price, setprice] = useState("");
  const [vehicule_pic, setpic] = useState(null);
  const [datapicture,setdatapic] = useState(null)
  


  useEffect(()=> {
    if (modalContent !== null) {
    setmatricule(modalContent.Matricule)
    setKilometrage(modalContent.kilometrage)
    setdate(modalContent.date_mise_en_circulation)
    }
  },[modalContent])

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleMatricule = (e) => {
    setmatricule(e.target.value)
  }
  const handlekilometrage = (e) => {
    setKilometrage(e.target.value)
  }
  const handleprice = (e) => {
    setprice(e.target.value)
  }
  const handlepic = (e) => {
    console.log("hey this is a file",e.target.files[0])
    setpic(e.target.files[0].filename)
    setdatapic(e.target.files[0])
  }
  const handledate = (e) => {
    setdate(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("datapic",datapicture);
    let formdata = new FormData();
    formdata.append("Matricule",Matricule)
    formdata.append("vehicule_pic",datapicture)
    formdata.append("kilometrage",kilometrage)
    formdata.append("date_mise_en_circulation",date_mise_en_circulation)
    formdata.append("price",price)
    let Authorization = localStorage.getItem("token");
      dispatch(postcar(Object.fromEntries(formdata), Authorization , navigate))
    }
  
  // Car LIST 


  useEffect(() => {

    let isMounted = true
  
    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
  
    axios.get("http://127.0.0.1:8000/api/afficherVehicule", {
        headers: headers
      })
    .then(res => {
      console.log(res.data.cars);
      setcar(res.data.cars)
    }).catch(err => {
      console.log(err)
    })
  
    return() => {isMounted =false
    };
  
  },[navigate]);


  useEffect(() => {

    let isMounted = true
    if ( car !== null ) {
    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
  
    axios.get("http://127.0.0.1:8000/api/afficherVehicule", {
        headers: headers
      })
    .then(res => {
      console.log(res.data.cars);
      setcar(res.data.cars)
    }).catch(err => {
      console.log(err)
    })
    setCreateModalOpen(false)
  }
    return() => {isMounted =false
    };
  
  },[car]);


  // button Delete


function deleteOperation(id){
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + `${token}`

  }

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
      await axios.delete("http://127.0.0.1:8000/api/Deletevehicule/"+id, {
        headers: headers
      })
    .then(res => {
        console.log(res.data.message)
        
    
     
    
    }).catch(err => {
      console.log(err)
    })
    window.location.reload(false);

      Swal.fire(
        'Deleted!',
        'Vehicule has been deleted.',
        'success'
      )
    }
  })

 
 
}

//buutton update
function handleUpdatedCar(){
  let formdata = new FormData();

  formdata.append("Matricule",Matricule)
  formdata.append("vehicule_pic",datapicture)
  formdata.append("kilometrage",kilometrage)
  formdata.append("date_mise_en_circulation",date_mise_en_circulation)
  // console.log()
  let Authorization = localStorage.getItem("token");
  dispatch( updatecar(formdata, Authorization , navigate))
  
    
  }
 



  



  

  return (

    <div className="wrapper ">
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Les Voitures</h4>
                  <button type="button" className="btn btn-primary btn-round"  onClick={() => { setCreateModalOpen(true); }}>Ajouter voiture </button>

                </div>
                <div className="card-body">
                  <div className="table-responsive">


                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>
                            Id
                          </th>
                          <th>
                            Car Name
                          </th>

                          <th>
                            Kilometrage
                          </th>
                          <th>
                            Date put into circulation
                          </th>
                          <th>
                            PRICE
                          </th>
                          <th>
                            PICTURE
                          </th>
                          <th>
                            STATUS
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>

                      </thead>
                      <tbody>
                      {Cars.map((cars) => (
                        <tr>
                          <td>
                          {cars.id}
                            
                          </td>
                          <td>
                          {cars.Matricule}
                          </td>
                             
                          <td>
                          {cars.kilometrage}
                          </td>
                          <td>
                          {cars.date_mise_en_circulation}
                          </td>
                          <td>
                          {cars.price}
                          </td>
                          <td>
                          <img style={{
                            width: "300px",
                            height: "auto"
                          }} src={`http://localhost:8000/assets/${cars.vehicule_pic}`}></img>
                          </td>
                          <td>
                          {cars.etat.toUpperCase() == "DISPONIBLE" ?
                            <div style={{ padding:"5px 10px",borderRadius:"15px",
                            border: "2px solid #03c403",
                            color: "#03c403",
                            fontWeight: "800",
                            textTransform: "uppercase"
                            
                            }}>{cars.etat}</div>
                          : 
                          <div style={{ padding:"5px 10px",borderRadius:"15px",
                            border: "2px solid rgb(255 27 94)",
                            color: "rgb(255 27 94)",
                            fontWeight: "800",
                            textTransform: "uppercase"
                            
                            }}>{cars.etat}</div>
                          }
                          </td>
                          <td>
                            <button type="button" className="btn btn-primary" onClick={() => {
                              let carData = {
                              "Matricule": cars.Matricule,
                              "created_at": cars.created_at,
                              "date_mise_en_circulation": cars.date_mise_en_circulation,
                              "id": cars.id,
                              "kilometrage": cars.kilometrage,
                              "updated_at": cars.updated_at,
                              "vehicule_pic": cars.vehicule_pic
                            }
                              setModalContent(carData)
                              setModalOpen(true);

                              }} >Update </button>
                            <button id="red" className="btn btn-primary btn-round" type="submit" onClick={()=>deleteOperation(cars.id)}> Delete</button>
                            </td>
                        </tr>
                           ))}
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      { modalOpen && 
      <div className="modalBackground" onClick={() => { 
            
            setModalOpen(false); 
            }}>
            <div className="modalContainer" onClick={e => { e.stopPropagation(); }}>
            <div className="body">
            <form >
                <div className="inputs">
                    <input type="text" name="Matricule" placeholder="Matricule" className='form-control' value={Matricule !== undefined && Matricule !== null ? Matricule : "aa"} onChange={handleMatricule} />
                </div>
                <div className="inputs">
                    <input type="text" name="Kilométrage" placeholder="Kilométrage"className='form-control' value={kilometrage !== undefined && kilometrage  !== null ? kilometrage : "aa"} onChange={handlekilometrage} />

                </div>
                <div className="inputs">
                    <input name="Date_circulation" placeholder="Date mise en circulation" type="date" className='form-control' value={date_mise_en_circulation !== undefined && date_mise_en_circulation !== null ? date_mise_en_circulation : "aa"} onChange={handledate}/>
                </div>
                <div className="inputs">
                   <input name="Image" placeholder="Date mise en circulation" type="file" className='form-control' value={vehicule_pic} onChange={handlepic}/>
                </div>
                <button type="submit" className="sign-up-butt" onClick={()=>handleUpdatedCar()}>Update</button>
            </form>
              </div>
            </div>
      </div>
} 

{ CreatemodalOpen && 
      <div className="modalBackground" onClick={() => { 
            
            setCreateModalOpen(false); 
            }}>
            <div className="modalContainer" onClick={e => { e.stopPropagation(); }}>
            <div className="body">
            <form >
                <div className="inputs">
                    <input type="text" name="Matricule" placeholder="Matricule" className='form-control' value={Matricule} onChange={handleMatricule}/>
                </div>
                <div className="inputs">
                    <input type="text" name="Kilométrage" placeholder="Kilométrage"className='form-control' value={kilometrage} onChange={handlekilometrage}/>

                </div>
                <div className="inputs">
                    <input name="Date_circulation" placeholder="Date mise en circulation" type="date"  className='form-control' value={date_mise_en_circulation} onChange={handledate}/>
                </div>
                <div className="inputs">
                    <input type="text" name="Kilométrage" placeholder="price"className='form-control' value={price} onChange={handleprice}/>

                </div>

                <div className="inputs">
                   <input name="Image" placeholder="Date mise en circulation" type="file" className='form-control' value={vehicule_pic} onChange={handlepic}/>
                </div>
                <button type="submit" className="sign-up-butt" onClick={handleSubmit}>Create</button>
            </form>
              </div>
            </div>
      </div>
} 
    </div>



  );
}
export default CarsList