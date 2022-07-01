import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Modal } from "react-bootstrap";
function Listing () {
  const isToken = localStorage.getItem("token");
  const [Cars,setcar] =useState([]);
  const navigate =useNavigate();
  const [ modalOpen,setModalOpen ] = useState(false)
  const toggle = () => {
    setModalOpen(!modalOpen)
  }
  useEffect(() => {

    let isMounted = true
  
    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
  
    axios.get("http://127.0.0.1:8000/api/afficherVehicule", {
        headers: headers
      })
    .then(res => {
      console.log("",res.data.cars);
      setcar(res.data.cars)
    }).catch(err => {
      console.log(err)
    })
  
    return() => {isMounted =false
    };
  
  },[]);







 
          return (
            <>
       <div><Navbar /></div>
            <div>
              
              {/* //////////////////////////////// */}
              <div className="wheel-start3">
                
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 padd-lr0">
                      <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                        <h3>Cars List</h3>
                        <ol className="breadcrumb">
                          <li><a>Home</a></li>
                          <li className="active">Cars List</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prosuct-wrap">
                <div className="container padd-lr0 xs-padd">
                  <div className="row">
                    <div className="col-sm-8">
                      <header className="wheel-header marg-lg-t25 marg-lg-b65">
                        <h3>Choose Your <span>Dream</span> Car</h3>
                      </header>
                    </div>
                  </div>
                </div>
                <div className="container padd-lr0 xs-padd">
                  <div className="product-list product-list2 wheel-bgt clearfix">
                    <div className="row">
                      <div className="col-xs-12">
                      {Cars.map((cars) => {
                        return (
                          <>
                        { cars.etat === "disponible" &&
                        <div className="product-elem-style1 product-elem-style  wheel-bg1 clearfix">

                          <div className="product-table2">
                            <div className="img-wrap img-wrap2 product-cell">
                            {/* src={`http://localhost:8000/assets/${cars.vehicule_pic}`} */}
                              <img src={`http://localhost:8000/assets/${cars.vehicule_pic}`} alt="img" className="img-responsive" style={{ width: "50%" }} />
                            </div>
                          </div>
                          <div className="product-table3">
                          <div style={{ fontSize:"24px",letterSpacing:"1.3px",textTransform:"uppercase",fontWeight:"bold",lineHeight:"10rem" }}>{cars.Matricule}</div>  
                          <div style={{ fontSize:"22px",color:"#ff7043", fontWeight: "600" }}>{cars.price}DT</div>
                          
                          <button
                            onClick={()=> {
                              if (isToken) {
                                navigate(`/book/${cars.id}`)
                              }else {
                                navigate("/login")
                              }
                            }}
                            className="btn btn-success" 
                            style={{ backgroundColor:"rgb(255, 112, 67)", borderRadius:"10%"}}>
                            Booked Now 
                          </button>
                          
                          </div>
                          
                        </div>
                           }
                        </>
                      )})}
                      </div>
                      

                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 padd-lr0 text-center">
                      <div className="wheel-page-pagination marg-lg-t60 marg-lg-b25  ">
                        <a className="prev page-numbers fa fa-arrow-left" href="#" />
                        <a className="page-numbers" href="#">1</a>
                        <span className="page-numbers current">2</span>
                        <a className="page-numbers" href="#">3</a>
                        <a className="next page-numbers fa fa-arrow-right" href="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

            <Modal show={modalOpen}>
            </Modal>


            </>
          );
        }
      

export default Listing
