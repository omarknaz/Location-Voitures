import React from "react";

function Register(){
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
                              <div className="top-menu-item">
                                <div className="dropdown wheel-user-ico">
                                  <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Account
                                    <span className="caret" />
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li><a>Login</a></li>
                                    <li><a routerlink="/register">Register</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-9 ">
                          <div className="wheel-navigation">
                            <nav id="dl-menu">
                              {/* class="dl-menu" */}
                              <ul className="main-menu dl-menu">
                                <li className="menu-item   current-menu-parent menu-item-has-children    ">
                                  <a href="#">Home</a>
                                  <ul className="sub-menu dl-submenu">
                                    <li className="menu-item current-menu-item">
                                      <a href="index2.html">Home page </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item current-menu-parent menu-item-has-children  ">
                                  <a href="#"> Listing </a>
                                  {/*class=" dl-submenu "*/}
                                  <ul className="sub-menu dl-submenu">
                                    <li className="menu-item current-menu-item">
                                      <a href="car-listing-details.html">Car listing details</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <ul>
                                    <li className="menu-item "><a>contact</a></li>
                                    <li className="menu-item "><a>About</a></li>
                                    <li className="menu-item  "><a routerlink="/login">Login</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            <form action="#">
                              <input type="text" placeholder="First Name" />
                              <input type="text" placeholder="Last Name" />
                              <input type="text" placeholder="Email" />
                              <input type="text" placeholder="Username" />
                              <input type="text" placeholder="Password" />
                              <input type="text" placeholder="Confirm Password" />
                              <label htmlFor="input-val1">
                              </label>
                              <button className="wheel-btn">Sign Up</button>
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