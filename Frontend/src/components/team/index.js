import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import tm1 from '../../images/team/1.png'
import tm2 from '../../images/team/2.png'
import tm3 from '../../images/team/3.png'
import tm4 from '../../images/team/4.png'

const TeamSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div  className={`volunteer-area section-padding ${props.addclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Volunteer</span>
                            </div>
                            <h2>Our Great Volunteer</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </div>
                </div>
                <div className="volunteer-wrap">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm1} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Adriane Newby</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm2} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Allene Castaneda</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm3} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Malinda Willoughby</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm4} alt="" />
                                </div>
                                <div className="volunteer-content">
                                    <h2><Link onClick={ClickHandler} to="/volunteer">Wilburn Hatfield</Link></h2>
                                    <span>Volunteer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;