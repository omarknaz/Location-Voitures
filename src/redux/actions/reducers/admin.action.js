import axios from 'axios';
import { ADD_CAR_EN_LAOD,ADD_CAR_DIS_LOAD,ADD_CAR_SUCCESS,ADD_CAR_FAILED } from "../../types"
import Swal from 'sweetalert'; 

export const postcar = (body,Authorization,navigate) => async dispatch => {
  dispatch({
    type: ADD_CAR_EN_LAOD
  })
  console.log("data to send",body);
      axios(
        {
            method: 'post',
            url: "http://127.0.0.1:8000/api/Addvehicule",
            data: body,
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer ' + `${Authorization}`
            }
          })
        .then((response) => {
            console.log('heycar',response.data)
            dispatch({
              type: ADD_CAR_SUCCESS,
              payload: response.data
            })
            dispatch({
              type: ADD_CAR_DIS_LOAD
            })
            Swal.fire('your car is created!', '', 'success');
            navigate("/")
        })
        .catch((error) => {
            console.log('heyerror',error)
            Swal.fire('your car is created!', '',error );
            dispatch({
              type: ADD_CAR_DIS_LOAD
            })
        })
}

export const updatecar = (body,Authorization,id,navigate) => async dispatch => {  
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + `${Authorization}`
      }
      
      axios.put("http://127.0.0.1:8000/api/Updatevehicule"+id, body, {
          headers: headers
        })
        .then((response) => {
            console.log('heycar',response.data)
            Swal.fire('your car is created!', '', 'success');
            navigate("/")
        })
        .catch((error) => {
            console.log('heyerror',error)
            Swal.fire('your car is created!', '',error );
        })
}