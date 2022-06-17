 import React from "react";
import { useNavigate } from "react-router-dom";
 import Navbar from "../Navbar";
 import { useDispatch, useSelector } from 'react-redux'
 import { useState } from 'react';
 import {postreclamation} from '../../redux/actions/user.action';



 function Complaint() {
  const [reclamation, setreclamation] = useState("");

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handlereclamation = (e) => {
    setreclamation(e.target.value)
  }


  const handleSubmit = async () => {
  
    let data = {
      reclamation: reclamation,
     

    }

    let Authorization = localStorage.getItem("token");
    dispatch(await postreclamation(data, Authorization , navigate))
    
      
    }
  







      return (
        <>
        <div><Navbar /></div>
        <div>
          {/* MAIN */}
         
          <div className="wheel-start3">
            <img src="assets/images/bg6.jpg" alt="" className="wheel-img" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>Complaint</h3>
                    <ol className="breadcrumb">
                      <li><a>Home</a></li>
                      <li className="active">Complaint</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="wheel-reply-form wheel-bg1 marg-lg-b145 marg-sm-b50">
            <header>
              <h3>Leave a Complaint</h3>
            </header>
            <form onSubmit={e => e.preventDefault()}>
              
              <textarea placeholder="Your complaint *" value={reclamation} onChange={handlereclamation}  required/>
              <button onClick={handleSubmit} >Submit Now</button>
            </form>
          </section>
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
  export default Complaint