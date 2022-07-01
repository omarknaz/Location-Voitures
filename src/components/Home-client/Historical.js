
import Navbar from "../Navbar";
import axios from 'axios';
import React, { useEffect , useState} from 'react';
import Swal from "sweetalert2";
import moment from "moment"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getReservation } from "../../redux/actions/reservation.action"
function Historical() {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.book)

  const navigate = useNavigate();
  const [reclamation,setrecalamtion] = useState([]);

//delete deletereservation

  
function deletereservation(id){
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
     await axios.delete("http://127.0.0.1:8000/api/DeleteReservation/"+id, {
        headers: headers
      })
    .then(res => {
        console.log('hahhahhhhhah',res.data.message)
        
    
     
    
    }).catch(err => {
      console.log(err)
    })
    window.location.reload(false);

      Swal.fire(
        'Deleted!',
        'Reservation canceled',
        'success'
      )
    }
  })

 
 
}

function navigat(){
  navigate("../complaint", { replace: true });
}


  //list reclamation
  useEffect(() => {
    let isMounted = true
  
    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
  
    axios.get("http://127.0.0.1:8000/api/afficherReclamationUser", {
        headers: headers
      })
    .then(res => {
        console.log('heydata',res.data)
        setrecalamtion(res.data.message)
     
    
    }).catch(err => {
      console.log(err)
    })

    dispatch(getReservation(token))
  
    return() => {isMounted =false
    };
  
    
  },[]);


  //delete button

  
function deleteOperation(id){
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
     await axios.delete("http://127.0.0.1:8000/api/DeleteReclamation/"+id, {
        headers: headers
      })
    .then(res => {
        console.log('hahhahhhhhah',res.data.message)
        
    
     
    
    }).catch(err => {
      console.log(err)
    })
    window.location.reload(false);

      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

 
 
}

function navigat(){
  navigate("../complaint", { replace: true });
}














      return (
        <>
        <div><Navbar /></div>
        <div>
          {/* MAIN */}
          
          <div className="wheel-start3">
           
            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>Historical</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
         <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90">
                  <h3>List  Reservations</h3>
          <br />
          <br />
          <br />
         <table className="table">
            <thead>
              <tr>
                <th>Booked At</th>
                <th>Véhicule</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Date début</th>
                <th>Date fin</th>
                
              </tr>
            </thead >
            <tbody>
              {reservations !== undefined && reservations !== null && reservations.map((book,idx)=>{
                return (
                  <tr>
                    <td>{moment(book.created_at).fromNow()}</td>
                  <td>{book.vehicule.Matricule}</td>
                  <td>{book.name}</td>
                  <td>{book.lastname}</td>
                  <td>{book.date_deb}</td>
                  <td>{book.date_fin}</td>
                  <button id="red" className="btn btn-primary btn-round"type="submit" onClick={()=>deletereservation(book.id)} > Cancel</button>
                </tr>
              )
              })}
            </tbody>
          </table>
          
          </div>
          </div>
          </div>
          </div>
          </div>
          
          <br />
          
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90">
                  <h3>List  Complaints</h3>
                  <table className="table table-striped">
            <thead>
              <tr>
                  
                  <th className="text-center" scope="col"> Date</th>
                  <th  className="text-center" scope="col">Complaint</th>
                  {/* <th scope="col">User</th> */}
                  <th  className="text-center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {reclamation?.map((Reclamation) => (
              <tr>
                
                <td >{Reclamation.created_at.split('T')[0]}</td>

                <td>{Reclamation.reclamation}</td>
                {/* <td>{Reclamation.id}</td> */}
                <td>
                
                <button id="red" className="btn btn-primary btn-round"type="submit" onClick={()=>deleteOperation(Reclamation.id)} > Delete</button>
                </td>

                
              </tr>
             
                
          
            ))}
              </tbody>
          </table>
          
          <button type="button" className="btn btn-success" onClick={()=>navigat()}> Add Complaint</button>
          </div>
          </div>
          </div>
          </div>
          </div>
        
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="wheel-footer-info wheel-bg6">
            <div className="container">
              <div className="row">
                <div className="wheel-soc">
                  <a className="fa fa-twitter" />
                  <a className="fa fa-facebook" />
                  <a className="fa fa-linkedin" />
                  <a className="fa fa-instagram" />
                  <a className="fa fa-share-alt" />
                  <ul>
                    <li><span><i className="fa fa-map-marker" /> 06 Rue de perfection Sousse 
                        Tunisia</span>
                    </li> <br />
                    <li><a href="#"><span><i className="fa fa-phone" /> 73 363 562</span></a></li> <br />
                    <li><a href="#"><span><i className="fa fa-envelope" /> Wheelcar@gmail.com</span></a></li>
                  </ul>
                  <div className="col-lg-8 col-sm-6  padd-lr0"><span> ©   All rights reserved WHEEL 2022  |</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      );
    }
  export default Historical