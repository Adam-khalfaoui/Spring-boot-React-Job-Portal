import React from 'react'
import {Link} from 'react-router-dom'
import causesimg from '../../images/cause/img-1.png'
import causesimg2 from '../../images/cause/img-2.jpg'
import causesimg3 from '../../images/cause/img-3.jpg'
import causesimg4 from '../../images/cause/img-4.jpg'
import causesimg5 from '../../images/cause/img-5.jpg'
import causesimg6 from '../../images/cause/img-6.jpg'
import './style.css'

const Causes = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title section-title2 text-center">
                        <div className="thumb-text">
                            <span>CAUSES</span>
                        </div>
                        <h2>Latest Caused of Khairah.</h2>
                        <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Financial Help for Poor Families</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg2} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Education for Poor Children</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg3} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Send Child to School for a Year</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg4} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Food And Home for Children</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg5} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Pure Water For The World</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg6} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Recycling For Charity</Link></h3>
                                <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Causes;