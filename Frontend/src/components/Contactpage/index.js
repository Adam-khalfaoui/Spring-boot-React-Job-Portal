import React from 'react';
import './style.css'

const Contactpage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div>
                        <div className="contact-details">
                            <p>Technology has changed the way job seekers search for jobs and employers find qualified employees. While employers still advertise job openings through traditional advertising mediums, such as local newspapers and magazines, today employers and job seekers turn to online job portals to find employment matches. Job seekers can advertise their skills and search for available positions, and employers can announce employment openings through job portals . </p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Our Location</h5>
                                    <p>Papeete </p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>0-123-456-7890</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>Jobs.Find@jobs.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">


                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe width="600" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=French%20Polynesia&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
