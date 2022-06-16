import React from "react";

import { useState } from 'react';
//import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'


import {register} from '../../redux/actions/user.action';
import { Navigate, useNavigate, useNavigationType } from "react-router-dom";








function Register(){
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
 
    let data = {
      
      name : name,
      lastname :lastname ,
      tel : tel,
      adresse  : adresse,
      email : email,
      password : password,
     
      
      
    }
    dispatch(await register(data, navigate))
    console.warn(data)
  }
   

    










  






















    return (
                <div>
                 
                  {/* //////////////////////////////// */}
                  <div className="wheel-start3">
                    <img src="images/bg7.jpg" alt="" className="wheel-img" />
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 padd-lr0">
                          <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                            <h3>Register</h3>
                            <ol className="breadcrumb">
                              <li><a>Home</a></li>
                              <li className="active">Register</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /////////////////////////////////// */}
                  <div className="wheel-register-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-7 padd-r0">
                          <div className="wheel-register-sign marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                            <div className="wheel-header">
                              <h5>Sign up Now </h5>
                              <h3>Get <span>Registered</span></h3>
                            </div>
                            <form onSubmit={e => e.preventDefault()}>
                              <input type="text" placeholder="First Name" value={name} onChange={handlename}/>
                              <input type="text" placeholder="Last Name" value={lastname} onChange={handlelastname} />
                              <input type="text" placeholder="Email" value={email} onChange={handleemail}/>
                              {/* <input type="text" placeholder="Username"   />
                              <input type="text" placeholder="CIN"  /> */}
                              <input type="text" placeholder="Phone" value={tel} onChange={handletelephone} />
                              <input type="text" placeholder="Adresse" value={adresse} onChange={handleadresse}/>
                              <input type="text" placeholder="Password" value={password} onChange={handlepassword} />
                              
                              <label htmlFor="input-val1">
                              </label>
                              <button className="wheel-btn" onClick={handleSubmit}>Sign Up</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /////////////////////////////// */}
                  {/* FOOTER */}
                  {/* ///////////////// */}
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
              );
            
      
                            }
export default Register