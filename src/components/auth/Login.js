import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {login} from '../../redux/actions/user.action';
import Navbar from "../Navbar";
function Login(){

 
  const dispatch = useDispatch()
  const [email, setemail] = React.useState("")
  const [password, setpassword] = React.useState("")

  const handleEmail = (e) => {
    setemail(e.target.value)
  }
  const handlePassword = (e) => {
    setpassword(e.target.value)
  }
 const navigate = useNavigate();
  const handleSubmit = async (e) => {

    let data = {
      email: email,
      password: password
    }
    dispatch(await login(data,navigate))
   
  }

 
    return (
      <>
       <div><Navbar /></div>
        <div>
         
          {/* //////////////////////////////// */}
          <div className="">
          <div className="wheel-start3">
            <div className="container">
               <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>Login</h3>
                    <ol className="breadcrumb">
                      <li><a>Home</a></li>
                      <li className="active">Login</li>
                    </ol>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          </div>
          {/* /////////////////////////////////// */}
          <div className="wheel-register-block">
            <div className="container">
              <div className="row">
                <div id="log" className="col-md-8 padd-l0">
                  <div className="wheel-register-log marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                    <div className="wheel-header">
                      <h5>have an account? Log In now</h5>
                    </div>
                    <form className="form-login" />
                      {/* Errors */}
                      
                      <div className="form-group">
                        <label htmlFor="userName" className="fa fa-user" />
                        <input  placeholder=" Email" onChange={handleEmail} type="email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="userPass" className="fa fa-lock" />
                        <input  onChange={handlePassword} type="password" placeholder="mot de passe" required/>
                      </div>      
                      <div className="form-group">
                        <button className="wheel-btn"  onClick={handleSubmit}>Login Now</button>
                        <label className="password-sing clearfix" htmlFor="input-val2" />
                        <input type="checkbox" id="input-val2" /> <span>Keep me signed in</span>
                      </div>
                      <a>Forgot password?</a>
                      <br />
                      <Link to="/register">Don't have an account?</Link>
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
        </>
      );
}
export default Login