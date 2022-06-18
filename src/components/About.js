import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

 function About() {
      return (
        <>
       <div><Navbar /></div>
        <div>
          {/* MAIN */}
          
          {/* //////////////////////////////// */}
          <div className="wheel-start3">

            <div className="container">
              <div className="row">
                <div className="col-xs-12 padd-lr0">
                  <div className="wheel-start3-body clearfix marg-lg-t255 marg-lg-b75 marg-sm-t190 marg-xs-b30">
                    <h3>about us</h3>
                    <ol className="breadcrumb">
                      <li><a>Home</a></li>
                      <li className="active">About</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////// */}
          <div className="wheel-bg2">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-header wheel-testi-header text-center marg-lg-t155 marg-lg-b65 marg-md-t50  marg-md-b50">
                    <h3>Our Mission is <span>Client’s</span> Satisfaction</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="wheel-testimonial text-center">
                    <p>WHEELCAR commits to provide a serious and professional service to its customers (Individuals, tourists and professionals), recent and well-maintained vehicles spread over several types, models and categories.</p>
                    <div className="wheel-testimonial-info">
                      <span>Aymen Mrabet</span>
                      <img src="assets/images/l1.png" alt="" />
                      <p> C.E.O. &amp; Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-xs-12 padd-lr0  marg-lg-b150  marg-md-b50">
                  <div className="wheel-testimonial-item">
                    <i className="fa fa-users" />
                    <span data-to={753} data-speed={10000} /><b>+</b>
                    <p>Dedicated Employees</p>
                  </div>
                  <div className="wheel-testimonial-item">
                    <i className="fa fa-thumbs-o-up" />
                    <span data-to={9053} data-speed={5000} /><b>+</b>
                    <p>Satisfied Customers</p>
                  </div>
                  <div className="wheel-testimonial-item">
                    <i className="fa  fa-car" />
                    <span data-to={529} data-speed={6000} /><b>+</b>
                    <p>100% Fit Veihicles</p>
                  </div>
                  <div className="wheel-testimonial-item">
                    <i className="fa fa-trophy" />
                    <span data-to={111} data-speed={1000} /><b>+</b>
                    <p>Int. Awards Achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
          <div id="col" className="col-md-6 padd-lr0"> 
            <div className="wheel-skills-accordion marg-lg-t150 marg-lg-b135 marg-sm-t50 marg-sm-b50">
              <div className="wpc-accordion">
                <div className="panel-wrap active">

                  <h5 className="panel-title">We Stand Together <span /></h5>
                  <div className="panel-content">
                    
                    WHEELCAR is a human and family company, in this sense we support a lot of charity associations, we are partners of some sports teams to prove our dedication in several Tunisian regions.
                  </div>
                </div>
                <div className="panel-wrap active">
                  <h5 className="panel-title">Customer Satisfaction <span /></h5>
                  <div className="panel-content">
                    We listen to our customers 24 hours a day and we are able to put a vehicle in front of each need, from one to a hundred vehicles for a customer at a given period. “There is a steering wheel for every customer”.
                  </div>
                </div>
                <div className="panel-wrap active">
                  <h5 className="panel-title">Team spiritt <span /></h5>
                  <div className="panel-content">
                    Our activity has tripled in size in recent years in a rapid way thanks to our entire team involved. Our teams are very attached to the "WHEELCAR" brand and consider themselves their own boss, each one does his job with the maximum respect and seriousness.
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          <div className="wheel-bg2">
            <div className="container padd-lr0">
              <div className="row">
               <div className="col-xs-12">
                  <div className="wheel-header text-center marg-lg- t145 marg-sm-t50 marg-lg-b90">
                    <h5>Memebers </h5>
                    <h3>Our Excellent <span>Team</span></h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="wheel-team text-center marg-lg-b150 marg-sm-b50">
                    <div className="wheel-team-logo"><img src="assets/images/i20.jpg" alt="" /></div>
                    <div className="wheel-team-info ">
                      <h5>Khlaed Mezzi</h5>
                      <span> Founder</span>
                      <ul>
                        <li><a href="#" className="fa fa-twitter" /></li>
                        <li><a href="#" className="fa fa-facebook" /></li>
                        <li><a href="#" className="fa fa-instagram" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="wheel-team text-center marg-lg-b150 marg-sm-b50">
                    <div className="wheel-team-logo"><img src="assets/images/i21.jpg" alt="" /></div>
                    <div className="wheel-team-info ">
                      <h5>Aymen Mrabet </h5>
                      <span>C.E.O &amp; Co-Founder</span>
                      <ul>
                        <li><a href="#" className="fa fa-twitter" /></li>
                        <li><a href="#" className="fa fa-facebook" /></li>
                        <li><a href="#" className="fa fa-instagram" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="wheel-team text-center marg-lg-b150 marg-sm-b50">
                    <div className="wheel-team-logo"><img src="assets/images/i22.jpg" alt="" /></div>
                    <div className="wheel-team-info ">
                      <h5>Feten Derbeli</h5>
                      <span>Director</span>
                      <ul>
                        <li><a href="#" className="fa fa-twitter" /></li>
                        <li><a href="#" className="fa fa-facebook" /></li>
                        <li><a href="#" className="fa fa-instagram" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="wheel-team text-center marg-lg-b150 marg-sm-b50">
                    <div className="wheel-team-logo"><img src="assets/images/i23.jpg" alt="" /></div>
                    <div className="wheel-team-info ">
                      <h5>Lobna Ben Romdhan</h5>
                      <span> Manager</span>
                      <ul>
                        <li><a href="#" className="fa fa-twitter" /></li>
                        <li><a href="#" className="fa fa-facebook" /></li>
                        <li><a href="#" className="fa fa-instagram" /></li>
                      </ul>
                    </div>
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

  export default About