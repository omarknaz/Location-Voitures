import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
    const navigate = useNavigate();
    const LogoutSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }
    let link = window.location.pathname
    useEffect(()=> {
        console.log("emm",link)
    },[link])
    var role = localStorage.getItem("role");
    //console.log('aaaaaaaaaaaa', role);
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <a className="simple-text logo-mini">
                    <div className="logo-image-small">
                        <img src="/assets/images/logo-small.png" />
                    </div>
                    {/* <p>CT</p> */}
                </a>
                <a className="simple-text logo-normal">
                    WheelCar Backoffice
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className={`${link === "/dashboard" || link === "/" ? "active" : "" }`}>
                        <Link to="/dashboard">
                            <a>
                                <i className="nc-icon nc-bank" />
                                <p>Dashboard</p>
                            </a>
                        </Link>
                    </li>
                    {role == 'SuperAdmin' ?
                        <li className={`${link === "/admin" ? "active" : "" }`} >
                            <Link to="/admin">
                                <a> <i className="nc-icon nc-single-02" />
                                    Administrateurs
                                </a>
                            </Link>
                        </li>
                        :
                        <>
                        <li className={`${link === "/reclamation" ? "active" : "" }`} >
                        <Link to="/reclamation">
                            <a> <i className="nc-icon nc-bell-55" />
                                Reclamations
                            </a>
                        </Link>

                    </li>
                    <li className={`${link === "/clients" ? "active" : "" }`} >
                        <Link to="/clients">
                            <a> <i className="nc-icon nc-single-02" />
                                Clients
                            </a>
                        </Link>
                    </li>
                    <li className={`${link === "/voitures" ? "active" : "" }`} >
                        <Link to="/voitures">
                            <a>  <i className="nc-icon nc-ambulance" />
                                Voitures</a>
                        </Link>

                    </li>
                    <li className={`${link === "/reservations" ? "active" : "" }`} >
                        <Link to="/reservations">
                            <a>  
                                <i className="nc-icon nc-single-copy-04" />
                                Reservations
                                </a>
                        </Link>

                    </li>
                    </>
                    }

                    <li>
                        <button id="logout" type='button' onClick={LogoutSubmit} className='nav-lin btn btn-danger btn-sm text_white'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

