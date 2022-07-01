import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

import { Navigate } from 'react-router-dom';

export const register = (body,navigate) => async dispatch => {
    try{
        const res = await axios.post(`http://127.0.0.1:8000/api/register`,body);
        console.log('hey register',res.data)
        dispatch( {
            type: REGISTER_SUCCESS,
            payload: res.data.res
        })
        console.log('hey register',res.data)
        swal("success",res.data.message,"success");
        res.data.success !== undefined && res.data.success && navigate("/login")
    
    }
    catch(e){
        console.log('heyerror',e)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
}

export const login = (body,navigate ) => async dispatch => {

    
     
    try{
        

        const res = await axios.post(`http://127.0.0.1:8000/api/login`,body);
        console.log('heydata',res.data)
        dispatch( {
            type: LOGIN_SUCCESS,
            payload: res.data.res
        })
       // swal("success",res.data.message,"success");
       
        res.data.success !== undefined && res.data.success && 
        console.log("aaaa",res.data)
        localStorage.setItem("user",JSON.stringify(res.data))
        localStorage.setItem("token",res.data.access_token)
        localStorage.setItem("role",res.data.role)
        localStorage.setItem("userid",res.data.user.id)
        var role =localStorage.getItem("role");
        if (role == 'user'){
            navigate('/');
        }
        else if (role == 'admin') {
            navigate('/dashboard')
        }
        else if (role ='Superadmin'){
            navigate('/dashboard')
        }


        
        window.location.reload(false);
    }
    catch(e){
        console.log('heyerror',e)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'wrong Email / Password!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
}



// export const login = (body,history ) => async dispatch => {
//     try{
//         const res = await axios.post(`http://127.0.0.1:8000/api/login`,body);
//         console.log('heydata',res.data)
//         dispatch( {
//             type: LOGIN_SUCCESS,
//             payload: res.data.res
//         })
//         swal("success",res.data.message,"success");

//         res.data.success !== undefined && res.data.success && 
//         localStorage.setItem("user",JSON.stringify(res.data))
//         localStorage.setItem("token",res.data.access_token)
//         history.push('/');
//         window.location.reload(false);
//     }
//     catch(e){
//         console.log('heyerror',e)
//     }
// }



export const postreclamation = (body,Authorization,navigate) => async dispatch => {
  
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + `${Authorization}`
      }
      
      axios.post("http://127.0.0.1:8000/api/AddReclamation", body, {
          headers: headers
        })
        .then((response) => {
            console.log('hey intervention',response.data)
            dispatch( {
                type: REGISTER_SUCCESS,
                payload: response.data.res
               
            })
            Swal.fire('your complaint is sent!', '', 'success');
            navigate("/")
        })
        .catch((error) => {
            console.log('heyerror',error)
           
        })
}