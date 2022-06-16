import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types';
import swal from 'sweetalert';

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
        localStorage.setItem("user",JSON.stringify(res.data))
        localStorage.setItem("token",res.data.access_token)
        localStorage.setItem("role",res.data.role)

        var role =localStorage.getItem("role");
        if (role == 'user'){
            navigate('/about');
        }
        else if (role == 'admin') {
            navigate('/admin')
        }


        
        window.location.reload(false);
    }
    catch(e){
        console.log('heyerror',e)
    }
}