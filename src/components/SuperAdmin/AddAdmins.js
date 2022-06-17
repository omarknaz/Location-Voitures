import React from "react";
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import Navbar from "../Navbar";


import {register} from '../../redux/actions/user.action';
import { Navigate, useNavigate, useNavigationType } from "react-router-dom";
import { createAdmin } from "../../redux/actions/Superadmin.actions";


function AddAdmins() {

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  
  const [lastname, setlastname] = useState("");
 
  const [adresse, setadresse] = useState("");
  const [tel, settel] = useState("");
 
 
  const [email, setemail] = useState("");

  const handlename = (e) => {
    setname(e.target.value)
  }

  const handleemail = (e) => {
    setemail(e.target.value)
  }

  const handlepassword = (e) => {
    setpassword(e.target.value)
  }

  // const handlepseudo = (e) => {
  //   setpseudo(e.target.value)
  // }

  const handlelastname = (e) => {
    setlastname(e.target.value)
  }

  // const handlecin = (e) => {
  //   setcin(e.target.value)
  // }

  const handleadresse = (e) => {
    setadresse(e.target.value)
  }

  const handletelephone = (e) => {
    settel(e.target.value)
  }

 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
 
 

  const handleSubmit = async () => {
    let Authorization = localStorage.getItem("token");
    let data = {
      
      name : name,
      lastname :lastname ,
      tel : tel,
      adresse  : adresse,
      email : email,
      password : password,
     
      
      
    }
    dispatch(await createAdmin(data,Authorization, navigate))
    console.warn(data)
  }
   
    








    return (
<div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7 padd-r0">
                          <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                            <div className="wheel-header">
                              
                            </div>
                           
                            <form onSubmit={e => e.preventDefault()}>
                              <input type="text" placeholder="First Name" value={name} onChange={handlename} required/>
                              <input type="text" placeholder="Last Name" value={lastname} onChange={handlelastname} required/>
                              <input type="Email" placeholder="Email" value={email} onChange={handleemail}required/>
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="text" placeholder="Phone" value={tel} onChange={handletelephone} required/>
                              <input type="text" placeholder="Adresse" value={adresse} onChange={handleadresse}required/>
                              <input type="password" placeholder="Password" value={password} onChange={handlepassword} required/>
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="wheel-btn" onClick={handleSubmit}>Create Admin</button>
                              </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 );
}
export default AddAdmins