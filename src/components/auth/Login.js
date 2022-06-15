import React from "react";
function Login(){
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
                        </li>
                        <li className="menu-item current-menu-parent menu-item-has-children  ">
                          <a routerlink="/list"> Listing </a>
                          {/*class=" dl-submenu "*/}
                        </li>
                        <li>
                          <ul>
                            <li className="menu-item "><a routerlink="/contact">contact</a></li>
                            <li className="menu-item "><a routerlink="/about">About</a></li>
                            <li className="menu-item  active-color"><a>Login</a></li>
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
            <img src="assets/images/bg7.jpg" alt="" className="wheel-img" />
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
          {/* /////////////////////////////////// */}
          <div className="wheel-register-block">
            <div className="container">
              <div className="row">
                <div className="col-md-8 padd-l0">
                  <div className="wheel-register-log marg-lg-t150 marg-lg-b150 marg-sm-t100 marg-sm-b100">
                    <div className="wheel-header">
                      <h5>have an account? Log In now</h5>
                    </div>
                    <form className="form-login" />
                      {/* Errors */}
                      
                      <div className="form-group">
                        <label htmlFor="userName" className="fa fa-user" />
                        <input type="text" id="userName" placeholder=" Email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="userPass" className="fa fa-lock" />
                        <input type="text" id="userPass" placeholder="Passsword" />
                      </div>      
                      <div className="form-group">
                        <button className="wheel-btn" routerlink="/homeclient">Login Now</button>
                        <label className="password-sing clearfix" htmlFor="input-val2" />
                        <input type="checkbox" id="input-val2" /> <span>Keep me signed in</span>
                      </div>
                      <a>Forgot password?</a>
                      <br />
                      <a routerlink="/register">Don't have an account?</a>
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
export default Login