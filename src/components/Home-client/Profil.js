import React from "react";

function Profil() {
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
                            <li className="menu-item  "><a routerlink="/reservation">Reservation</a></li>
                            <li className="menu-item  active-color"><a routerlink="/profil">Profil</a></li>
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
           
            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>User Profil</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="wheel-bg2"  >
            <div className="container padd-lr0"  id="form">
              <div className="row">
                <div  className="col-xs-12" >
                  <div className="wheel-header text-center marg-lg-t145 marg-sm-t50 marg-lg-b90" >
                <form>
                  <div className="row">
                    <div className="col-md-3 px-1">
                      <div className="form-group">
                        <label>Ancien mot de passe</label>
                        <input type="text" className="form-control" placeholder />
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Example@example.com" />
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label>Nouveau mot de passe</label>
                        <input type="text" className="form-control" placeholder />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Home Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pr-1">
                      <div className="form-group">
                        <label>Tel</label>
                        <input type="number" className="form-control" placeholder={+216} />
                      </div>
                    </div>
                    <div className="col-md-4 px-1">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="Country" defaultValue="Sousse" />
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    </div>
                  </div>
                  <div className="row">
                    <div className="update ml-auto mr-auto">
                      <button type="submit" className="btn btn-primary btn-round">Update Profile</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
      );
    }
export default Profil