import React from "react";
import { Link } from 'react-router-dom';
  function Contact(){
    return (
        <div>
          
          {/* //////////////////////////////// */}
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <div className="wheel-contact-info text-center marg-lg-t150 marg-lg-b50 marg-xs-t50 marg-xs-b50">
                  <div className="wheel-contact-logo"><i className="fa fa-map-marker" /></div>
                  <h4>Address</h4>
                  <span>06 Rue de perfection Sousse, Sahloul 4011</span>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="wheel-contact-info text-center marg-lg-t150 marg-lg-b50 marg-xs-t50 marg-xs-b50">
                  <div className="wheel-contact-logo"><i className="fa fa-phone" /></div>
                  <h4>telePhone</h4>
                  <a href="#"><span>73 363 562</span></a>
                  <a href="#"><span>73 654 785</span></a>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="wheel-contact-info text-center marg-lg-t150 marg-lg-b50 marg-xs-t50 marg-xs-b50">
                  <div className="wheel-contact-logo"><i className="fa fa-mobile" /></div>
                  <h4>Fax</h4>
                  <a href="#"><span>(+216)  3 8376 6284 </span></a>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="wheel-contact-info text-center marg-lg-t150 marg-lg-b50 marg-xs-t50 marg-xs-b50">
                  <div className="wheel-contact-logo"><i className="fa fa-envelope" /></div>
                  <h4>Email</h4>
                  <a href="#"><span> Wheelcar@gmail.com</span></a>
                </div>
              </div>
            </div>
          </div>
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
                    <input type="text" placeholder="Your Name *" />
                    <input type="text" placeholder="Your Email *" />
                    <input type="text" placeholder="Your URL (Optional)" />
                    <input type="text" placeholder="Subject*" />
                    <textarea placeholder="Message *" defaultValue={""} />
                    <button className="wheel-btn">Submit Message</button>
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
    );
  }      

    
 export default Contact