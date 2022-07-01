
import Swal from 'sweetalert2';
import axios from 'axios';
import React, { useEffect , useState} from 'react';

import { useNavigate } from 'react-router-dom';
import Sidebar from "./layouts/sidebar";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import { getAllReservation } from "../../redux/actions/reservation.action"


function ClientList() {

  const navigate = useNavigate();
const [users,setUser] = useState([]);
const dispatch = useDispatch()
const { all_reservations } = useSelector((state) => state.book)

//LIST USER
   useEffect(() => {
  let isMounted = true

  const token = localStorage.getItem('token');
 
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + `${token}`
  }

  axios.get("http://127.0.0.1:8000/api/afficherUsers", {
      headers: headers
    })
  .then(res => {
      console.log('heydata',res.data)
      setUser(res.data.users)
   
  
  }).catch(err => {
    console.log(err)
  })
  dispatch(getAllReservation(token))
  return() => {isMounted =false
  };

},[navigate]);


//Button delete

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
     await axios.delete("http://127.0.0.1:8000/api/DeleteUser/"+id, {
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
        'Your file has been deleted.',
        'success'
      )
    }
  })

 
 
}
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



      return (
  
        <div className="wrapper ">
       <Sidebar/>
          <div className="main-panel">
        
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title"> Les Reservations</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">

                      <table className="table">
            <thead>
              <tr>
                <th>Booked At</th>
                <th>Véhicule</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Date début</th>
                <th>Date fin</th>
                <th>User</th>
              </tr>
            </thead >
            <tbody>
              {all_reservations !== undefined && all_reservations !== null && all_reservations.map((book,idx)=>{
                return (
                  <tr>
                    <td>{moment(book.created_at).fromNow()}</td>
                  <td>{book.vehicule_id}</td>
                  <td>{book.name}</td>
                  <td>{book.lastname}</td>
                  <td>{book.date_deb}</td>
                  <td>{book.date_fin}</td>
                  <td>{book.users.name}</td>
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
            </div>
          </div>
        </div>
      );
    }
  export default ClientList