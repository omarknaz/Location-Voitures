import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addreservation } from "../../redux/actions/reservation.action"
import Navbar from "../../components/Navbar";
  function ReservationForm(props){
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userid")
    const dispatch = useDispatch()
    console.log("propsss",props)
    const {carId} = useParams()
    const [name,setname] = useState("");
    const [lastname,setlastname] = useState("");
    const [phone,setphone] = useState("");
    const [cin,setcin] = useState("");
    const [date_deb,setdate_deb] = useState("");
    const [date_fin,setdate_fin] = useState("");
    const { reservation } = useSelector((state) => state.book)
    const handleBook = async (e) => {
      e.preventDefault();
      let data = {
        name: name,
        lastname: lastname,
        phone: phone,
        cin: cin,
        date_deb: date_deb,
        date_fin: date_fin,
        vehicule_id:carId,
        etat: "reserved",
        user_id: userId
      }
      console.log("book data",data)
      dispatch(await addreservation(data,token,navigate))
      
    }

    useEffect(()=>{
      if (reservation !== null) {
        navigate("/historical")
      }
    },[reservation])

    return (
      <>
       <div><Navbar /></div>
        <div>
          
          {/* //////////////////////////////// */}
          <br></br>
          {/* ////////////////////////////////// */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="wheel-header text-center marg-lg-t85 marg-lg-b90  marg-md-t50">
                  <h5>Say Hello! </h5>
                  <h3>Send Us a <span>Message</span></h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 padd-lr0">
                <div className="wheel-contact-form text-center marg-lg-b145">
                  <div className="form">
                    <input type="text" placeholder="Your Name *" value={name} onChange={(e)=>{
                      setname(e.target.value)
                    }}/>
                    <input type="text" placeholder="Your Lastname *" value={lastname} onChange={(e)=>{
                      setlastname(e.target.value)
                    }}/>
                    <input type="text" placeholder="Your Phone *" value={phone} onChange={(e)=>{
                      setphone(e.target.value)
                    }}/>
                    <input type="text" placeholder="Your CIN *" value={cin} onChange={(e)=>{
                      setcin(e.target.value)
                    }}/>
                    <div className="inputs">
                    <input name="Date_circulation" placeholder="Date mise en circulation" type="date" className='form-control' value={date_deb} onChange={(e)=>{
                      setdate_deb(e.target.value)
                    }}/>
                    <input name="Date_circulation" placeholder="Date mise en circulation" type="date" className='form-control' value={date_fin} onChange={(e)=>{
                      setdate_fin(e.target.value)
                    }}/>
                    </div>
                    <button onClick={handleBook} className="wheel-btn">BOOK</button>
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
        </>
    );
  }      

 export default ReservationForm