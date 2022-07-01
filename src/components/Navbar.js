import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Navbar(){
  const isToken = localStorage.getItem("token");

  const navigate = useNavigate();

  const LogoutSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
}


  var AuthButtons ='';
  if(!localStorage.getItem('token')){
    AuthButtons =(
      <ul>
      <li className="menu-item "><Link to="/">Home</Link></li>
      <li className="menu-item "><Link to="/listing">Listing</Link></li>
      <li className="menu-item "><Link to="/contact">contact</Link></li>
      <li className="menu-item "><Link to="/about">About</Link></li>
      <li className="menu-item  "><Link to="/login">Login</Link></li>
      <li className="menu-item  "><Link to="/register">register</Link></li>
    </ul>


    )

  }else{
    AuthButtons =(
      <ul>

      <li className="menu-item "><Link to="/">Home</Link></li>
      <li className="menu-item "><Link to="/listing">Listing</Link></li>
      <li className="menu-item "><Link to="/contact">contact</Link></li>
      <li className="menu-item "><Link to="/about">About</Link></li>
      
      <li className="menu-item "><Link to ="/reservation">Reservation</Link></li>
      
      <li className="menu-item "><Link to="/historical">Historical</Link></li>
      <li className="menu-item "><Link to="/complaint">Complaint</Link></li>
    
    </ul>
    )





  }







return (
        <div>
          {/* MAIN */}
          <div className="wheel-menu-wrap ">
            <div className="container-fluid wheel-bg1">
              <div className="row">
                <div className="col-sm-3">
                  <div className="wheel-logo">
                    <a href="index-2.html"><img src="assets/images/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-12 padd-lr0">
                  <div className="wheel-top-menu clearfix">
                    <div className="wheel-top-menu-info">
                      <div className="top-menu-item"><a href="#"><i className="fa fa-phone" /><span> 73 363 562</span></a></div>
                      <div className="top-menu-item"><a href="#"><i className="fa fa-envelope" /><span>Wheelcar@gmail.com</span></a></div>
                    </div>
                    <div className="wheel-top-menu-log">
                   <div className="top-menu-item"></div>
                   
                   {isToken && 
                    <div className="dropdown wheel-user-ico">
                                        <button className="btn btn-default dropdown-toggle"  onClick={LogoutSubmit} type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        logout
                                        <span className="caret"></span>
                                        </button>
                                       
                                    </div>
                                    
                                  }
                                    </div>
                  </div>
                </div>
                <div className="col-sm-9 ">
                  <div className="wheel-navigation">
                    <nav id="dl-menu">
                      {/* className="dl-menu" */}
                      <ul className="main-menu dl-menu">
                      {/* <Link to="/">
                      <li className="menu-item   current-menu-parent menu-item-has-children    ">
                      <a>Home</a>
                      </li>
                      </Link>
                      <Link to="/listing">
                      <li className="menu-item current-menu-parent menu-item-has-children  ">
                      <a> Listing </a>
                      </li>
                      </Link> */}
                      <li>
                         <ul>
                         {AuthButtons}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );

        }
export default Navbar