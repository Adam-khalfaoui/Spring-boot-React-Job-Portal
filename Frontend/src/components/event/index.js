import React from 'react'
import event1 from '../../images/event/1.jpg'
import event2 from '../../images/event/2.jpg'
import event3 from '../../images/event/3.jpg'
import event4 from '../../images/event/1.png'
import event5 from '../../images/event/2.png'
import {Link} from 'react-router-dom'

import './style.css'

const EventSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>EVENTS</span>
                            </div>
                            <h2>Our Upcoming Events</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event1} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>MAR</span>
                                        <h4>28</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                        <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Fundrising event that could change some poor children.</Link></h2>
                                    <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event2} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>MAR</span>
                                        <h4>28</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                        <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Many Children are suffering a lot for food.</Link></h2>
                                    <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event3} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>MAR</span>
                                        <h4>28</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> 9:00 AM - 10:00 AM</li>
                                        <li><i className="ti-location-pin"></i> 968, Mudkarim, Pakistan.</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Be kind for the poor people and the kids.</Link></h2>
                                    <p>It is long estblished fact that a reader will be distracted aliquip exea commodo consequat velit esse cillum fugiat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1"><img src={event4} alt="" /></div>
            <div className="shape2"><img src={event5} alt="" /></div>
        </div>
    )
}

export default EventSection;