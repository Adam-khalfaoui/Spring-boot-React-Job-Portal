import React from 'react';
import SidebarWrap from '../SidebarWrap'
import simg from '../../images/event-details2.jpg'




import './style.css'

const EventSingle = (props) => {

        return (
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                        <div className="tp-case-details-wrap">
                            <div className="tp-case-details-text">
                                <div id="Description">
                                    <div className="tp-case-details-img">
                                       <img src={simg} alt="" />
                                    </div>
                                    <div className="tp-case-content">
                                        <div className="tp-case-text-top">
                                            <h2>Many Children are suffering a lot for food.</h2>
                                            <div className="case-b-text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                                <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures.</p>
                                            </div>
                                            <div className="case-bb-text">
                                                <h3>Event Mission</h3>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                                                <ul>
                                                    <li>Save The Children’s Role In Fight Against Malnutrition Hailed</li>
                                                    <li>Charity Can Help Make Smile Of Poor People</li>
                                                    <li>Else he endures pains to avoid worse pains.</li>
                                                    <li>We denounce with righteous indignation and dislike men. </li>
                                                    <li>Financial Help For Poor Families</li>
                                                </ul>
                                            </div>
                                            <div className="case-bb-text">
                                                <h3>Event Loacation</h3>
                                                <div id="Map" className="tab-pane">
                                                    <div className="contact-map">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="submit-area sub-btn">
                                                <a href="/donate" className="theme-btn submit-btn">Donate Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <SidebarWrap/>

                    </div>
                </div>
            </div>

            );
    }
    
    export default EventSingle;
          
          
          
          
