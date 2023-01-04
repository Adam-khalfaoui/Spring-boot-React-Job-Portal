import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo/logo.png'
import n1 from '../../images/instragram/1.jpg'
import n2 from '../../images/instragram/2.jpg'
import n3 from '../../images/instragram/3.jpg'
import n4 from '../../images/instragram/4.jpg'
import n5 from '../../images/instragram/5.jpg'
import n6 from '../../images/instragram/6.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-site-footer">
        <div className="tp-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="footer-logo widget-title">
                                <Link onClick={ClickHandler} to="index.html"><img src={Logo} alt="logo"/>Khai<span>rah.</span></Link>
                            </div>
                            <p>Build and Earn with your online store with lots of cool and exclusive tp-features </p>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="about/">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="causes/">Our Causes</Link></li>
                                <li><Link onClick={ClickHandler} to="volunteer/">Our Volunteer</Link></li>
                                <li><Link onClick={ClickHandler} to="contact/">Contact Us</Link></li>
                                <li><Link onClick={ClickHandler} to="event/">Our Event</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-lg-offset-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <p>online store with lots of cool and exclusive tp-features</p>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>28 Street, New York City, USA</li>
                                    <li><i className="fi flaticon-call"></i>+000123456789</li>
                                    <li><i className="fi flaticon-envelope"></i>khairah@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Instagram</h3>
                            </div>
                            <ul className="d-flex">
                                <li><Link onClick={ClickHandler} to="/"><img src={n1} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={n2} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={n3} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={n4} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={n5} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={n6} alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2021 Khairah. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;