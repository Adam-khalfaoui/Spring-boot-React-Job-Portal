import React from 'react'
import {Link} from 'react-router-dom'
import featuresimg from '../../images/features/img-1.png'
import featuresimg2 from '../../images/features/img-2.png'
import featuresimg3 from '../../images/features/img-3.png'
import featuresimg4 from '../../images/features/img-4.png'
import './style.css'

const Features = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="features-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="features-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>FEATURES</span>
                                </div>
                            </div>
                            <h2>The great journey to end poverty for good begins with a child.</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point that it has.</p>
                            <Link to="#" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="features-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Cancer Treatment</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg2} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Hospital Build</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2 active">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg3} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Environtment Recyle</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg4} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Food & Build Home</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;