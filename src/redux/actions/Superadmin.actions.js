import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';
import swal from 'sweetalert';
import Swal from 'sweetalert2'


export const createAdmin = (body,Authorization,navigate) => async dispatch => {
  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${Authorization}`
      }
      
      axios.post("http://127.0.0.1:8000/api/CreateAdmin", body, {
          headers: headers
        })
        .then((response) => {
            console.log('hey admin',response.data)
            dispatch( {
                type: REGISTER_SUCCESS,
                payload: response.data.res
               
            })
            Swal.fire('admin created!', '', 'success');
            navigate("/superadministrateurs")
        })
        .catch((error) => {
            console.log('heyerror',error)
           
        })
}