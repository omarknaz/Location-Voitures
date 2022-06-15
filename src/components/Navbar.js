import React from "react";
function Navbar(){
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
                          <a >Home</a>
                         
                          
                        </li>
                        <li className="menu-item current-menu-parent menu-item-has-children  ">
                          <a routerlink="/list"> Listing </a>
                          {/*class=" dl-submenu "*/}
                        </li>
                        <li>
                          <ul>
                            <li className="menu-item "><a routerlink="/contact">contact</a></li>
                            <li className="menu-item active-color "><a routerlink="/about">About</a></li>
                            <li className="menu-item  "><a>Login</a></li>
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