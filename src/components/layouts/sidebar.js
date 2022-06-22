import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
    const navigate = useNavigate();
    const LogoutSubmit = async(e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
        
      }
      var role =localStorage.getItem("role");
      console.log('aaaaaaaaaaaa',role);
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
                    <li className="active ">
                        <a>
                            <i className="nc-icon nc-bank" />
                            <p>Dashboard</p>
                        </a>


                    </li>
                    {role == 'Superadmin' ?
                    <li className="active">
                        <Link to="/admin">
                            <a> <i className="nc-icon nc-single-02" />
                                Administrateurs
                            </a>
                        </Link>
                    </li>
                    :
                    <></>
                     }

                    <li>
                        <a> <i className="nc-icon nc-bell-55" />
                            <Link to="/reclamation">Complaints</Link></a>


                    </li>
                    <li>
                        <a> <i className="nc-icon nc-single-02" />
                            <Link to="/clients">Clients</Link>
                        </a>

                    </li>
                    <li>
                        <a>  <i className="nc-icon nc-single-02" />
                            <Link to="/voitures">Voitures</Link></a>
                    </li>

                    <li>
                        <button id="logout" type='button' onClick={LogoutSubmit} className='nav-lin btn btn-danger btn-sm text_white'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
