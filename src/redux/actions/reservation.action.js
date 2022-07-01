import axios from 'axios';
import { POST_RESERVATION,GET_RESERVATION,GET_ALL_RESERVATION } from "../types"
import Swal from 'sweetalert'; 

export const addreservation = (body,Authorization,navigate) => async dispatch => {

  console.log("data to send",body);
        axios.post("http://127.0.0.1:8000/api/AddReservation",body,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + `${Authorization}`
            }
        })
        .then((response) => {
        
            dispatch({
              type: POST_RESERVATION,
              payload: response.data
            })
        })
        .catch((error) => {
        })
}



export const getReservation = (Authorization) => async dispatch => {

          axios.get("http://127.0.0.1:8000/api/user_reservation",{
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + `${Authorization}`
              }
          })
          .then((response) => {
          
              dispatch({
                type: GET_RESERVATION,
                payload: response.data.message
              })
          })
          .catch((error) => {
          })
  }


  export const getAllReservation = (Authorization) => async dispatch => {

    axios.get("http://127.0.0.1:8000/api/afficherReservation",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${Authorization}`
        }
    })
    .then((response) => {
    
        dispatch({
          type: GET_ALL_RESERVATION,
          payload: response.data.message
        })
    })
    .catch((error) => {
    })
}