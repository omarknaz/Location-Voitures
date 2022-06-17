import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

function Home(){
    return (
       <>
       <div><Navbar /></div>
        <div>
          {/* MAIN */}
          
          {/* ////////////////////////////////////////// */}
          <div className="wheel-start wheel-start2">
            <img src="" alt="" className="wheel-img" />
            <div className="container padd-lr0">
              <div className="col-lg-12">
                <header className="wheel-header text-center marg-lg-t80 ">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h1>Search - Hire - Compare - Save</h1>
                  <h5>We Help you to Rent your DREAM CAR</h5>
                </header>
              </div>
            </div>
            <div className="wheel-service-img2">
              <img src="assets/images/i1.png" alt="" className="wheel-img2" />
            </div>
          </div>
          {/* ////////////////////////////////////////// */}
          {/* ////////////////////////////////////////// */}
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
              
            </div>
          </div>
          {/* ////////////////////////////////////////// */}
          <div className="container padd-lr0">
            <div className="row">
              <div className="col-xs-12">
                <header className="wheel-header text-center marg-lg-t140 marg-lg-b95  marg-md-t50 marg-md-b50">
                  <h5>We have a Great</h5>
                  <h3>collection of <span> vehicles</span></h3>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 ">
                <div className="wheel-collection-slider marg-lg-b140  marg-md-b50">
                  <div className="swiper-container  " data-autoplay={0} data-touch={1} data-mouse={0} data-xs-slides={1} data-sm-slides={1} data-md-slides={1} data-lg-slides={1} data-add-slides={1} data-slides-per-view="responsive" data-loop={1} data-speed={1000}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="row">
                          <div className="col-md-5 padd-lr0">
                            <div className="wheel-collection-info wheel-collection-info2">
                              <div className="wheel-collection-text">
                                <h4>2016 Nissan Juke</h4>
                                <span>Luxury Sports Car</span>
                                <h5><b>$79 <sup>00</sup></b>/Day</h5>
                                <ul>
                                  <li><i className="fa fa-suitcase" /><span>2 Bags</span></li>
                                  <li><i className="fa fa-user" /><span>2 Passengers</span></li>
                                  <li><i className="fa fa-tachometer" /><span>5.6/100 MPG</span></li>
                                </ul>
                                <Link to="/listing"><button className="wheel-btn">View All rental Car</button>
                                </Link>
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-md-7 padd-lr0">
                            <div className="wheel-collection-img wheel-collection-img2"><img src="assets/images/i6a.png" alt="" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination" />
                  </div>
                  <div className="swiper-outer-left fa fa-angle-left" />
                  <div className="swiper-outer-right fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////// */}
          {/* ////////////////////////////////////////// */}
          <div className="container padd-lr0">
            <div className="row">
              <div className="col-md-6 ">
                <div className="wheel-info-img  marg-lg-t150 marg-lg-b150 marg-md-t100 marg-md-b100">
                  <img src="assets/images/i7.png" alt="" className="wheel-img" />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="wheel-info-text  marg-lg-t150 marg-lg-b150 marg-md-t100 marg-md-b100 marg-sm-t50 marg-sm-b50">
                  <div className="wheel-header">
                    <h5>Who we are</h5>
                    <h3>We Love Our <span>Customers</span></h3>
                  </div>
                  <p>WHEELCAR Tunisia is a Tunisian family car rental company since June 2022 with a capital of one hundred thousand dinars (100,000,000 DT), the head office is located in Sousse </p>
                  <a className="wheel-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          {/* //////////////////////////////////////////*/}
          {/* ////////////////////////////////////////// */}
          {/* ////////////////////////////////////////// */}
          {/* FOOTER */}
          {/* ///////////////// */}
          <img src="assets/images/bg2.jpg" alt="" className="wheel-img" />
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
export default Home
    