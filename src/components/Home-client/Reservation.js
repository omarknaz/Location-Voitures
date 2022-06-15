import React from "react";

function Reservation() {
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
                            <li><a routerlink="/login">LogOut</a></li>
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
                          <a>Home</a>
                        </li>
                        <li className="menu-item current-menu-parent menu-item-has-children  ">
                          <a routerlink="/list"> Listing </a>
                          {/*class=" dl-submenu "*/}
                        </li>
                        <li>
                          <ul>
                            <li className="menu-item "><a>contact</a></li>
                            <li className="menu-item active-color "><a>Reservation</a></li>
                            <li className="menu-item"><a routerlink="/profil">Profil</a></li>
                            <li className="menu-item "><a routerlink="/historique">Historical</a></li>
                            <li className="menu-item "><a routerlink="/complaint">Complaint</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wheel-start3">
            <img src="assets/images/bg2.jpg" alt="" className="wheel-img" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>Reservation</h3>
                    <ol className="breadcrumb">
                      <li><a>Home</a></li>
                      <li className="active">Reservation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="step-wrap">
            {/* ////////////////////////////////////////// */}
            <div className="container padd-lr0">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <ul className="steps">
                    <li className="title-wrap active">
                      <div className="title">
                        <span>1.</span>Make a reservation
                      </div>
                    </li>
                    <li className="title-wrap ">
                      <div className="title">
                        <span>2.</span>Select your car
                      </div>
                    </li>
                    <li className="title-wrap ">
                      <div className="title">
                        <span>3.</span>Choose your options
                      </div>
                    </li>
                    <li className="title-wrap ">
                      <div className="title">
                        <span>4.</span>Information &amp; review
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////// */}
          </div>
          {/* ////////////////////////////////////////// */}
          <div className="reservation">
            <div className="container padd-lr0 marg-lg-t100 marg-lg-b100 marg-xs-t0 marg-xs-b0">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  {/* ////////////////////////////////////////// */}
                  <div className="wheel-start-form wheel-start-form2">
                    <form action="#">
                      <div className="clearfix">
                        <div className="wheel-date">
                          <span>Pickup Date</span>
                          <label className="fa fa-calendar" htmlFor="input-val22">
                            <input className="datetimepicker" type="date" id="input-val22" defaultValue="29 Apr" />
                          </label>
                        </div>
                        <div className="wheel-date ">
                          <span>Pickup time</span>
                          <label htmlFor="input-val23" className="fa fa-clock-o">
                            <input className="timepicker" type="time" id="input-val23" defaultValue="18:00" />
                          </label>
                        </div>
                        <div className="wheel-date">
                          <span>Return Date</span>
                          <label className="fa fa-calendar" htmlFor="input-val24">
                            <input className="datetimepicker" type="date" id="input-val24" defaultValue="29 Apr" />
                          </label>
                        </div>
                        <div className="wheel-date">
                          <span>Return Time</span>
                          <label htmlFor="input-val25" className="fa fa-clock-o">
                            <input className="timepicker" type="time" id="input-val25" defaultValue="18:00" />
                          </label>
                        </div>
                        <label htmlFor="input-val27" className="promo promo2">
                          <button className="wheel-btn" id="input-val27">Search</button>
                        </label>
                      </div>
                    </form>
                  </div>
                  {/* ////////////////////////////////////////// */}
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
      );
    }
  export default Reservation