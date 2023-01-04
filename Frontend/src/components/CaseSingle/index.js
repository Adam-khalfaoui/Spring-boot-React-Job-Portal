import React from 'react';

import {Link} from 'react-router-dom'
import SidebarWrap from '../SidebarWrap'
import simg from '../../images/event-details.jpg'

import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'

import './style.css'

const CaseSingle = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

        return (
            <div className="tp-case-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div class="tp-case-details-wrap">
                            <div class="tp-case-details-text">
                                <div id="Description">
                                    <div class="tp-case-details-img">
                                        <img src={simg} alt="" />
                                    </div>
                                    <div class="tp-case-content">
                                        <div class="tp-case-text-top">
                                            <h2>Ensure Education for every poor children</h2>
                                            <div class="progress-section">
                                                <div class="process">
                                                    <div class="progress">
                                                        <div class="progress-bar">
                                                            <div class="progress-value"><span>65.5</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><span>Raised:</span> $7,000.00</li>
                                                <li><span>Goal:</span> $8,000.00</li>
                                                <li><span>Donar:</span> 380</li>
                                            </ul>
                                            <div class="case-b-text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                                <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures.</p>
                                            </div>
                                            <div class="case-bb-text">
                                                <h3>We want to ensure the education for the kids.</h3>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure.</p>
                                                <ul>
                                                    <li>The wise man therefore always holds in these matters.</li>
                                                    <li>In a free hour, when our power of choice and when nothing.</li>
                                                    <li>Else he endures pains to avoid worse pains.</li>
                                                    <li>We denounce with righteous indignation and dislike men. </li>
                                                    <li>Which is the same as saying through.</li>
                                                </ul>
                                            </div>
                                            <div class="submit-area sub-btn">
                                                <Link to="/donate" class="theme-btn submit-btn">Donate Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tp-blog-single-section wrap-even">
                                    <div className="comments-area">
                                        <div className="comments-section">
                                            <h3 className="comments-title">Comments</h3>
                                            <ol className="comments">
                                                <li className="comment even thread-even depth-1" id="comment-1">
                                                    <div id="div-comment-1">
                                                        <div className="comment-theme">
                                                            <div className="comment-image"> <img src={blog3} alt="" /> </div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/case-single"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"> <img src={blog4} alt="" /></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/case-single"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li className="comment">
                                                                    <div>
                                                                        <div className="comment-theme">
                                                                            <div className="comment-image"><img src={blog5} alt="" /> </div>
                                                                        </div>
                                                                        <div className="comment-main-area">
                                                                            <div className="comment-wrapper">
                                                                                <div className="comments-meta">
                                                                                    <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                                </div>
                                                                                <div className="comment-area">
                                                                                    <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                                    <div className="comments-reply">
                                                                                        <Link className="comment-reply-link" to="/case-single"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Comment</h3>
                                        <form onSubmit={SubmitHandler} className="comment-form">
                                            <div className="form-inputs">
                                                <input placeholder="Name" type="text" />
                                                <input placeholder="Email" type="email" />
                                                <input placeholder="Website" type="url" />
                                            </div>
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Reply" type="submit" />
                                            </div>
                                        </form>
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
    
    export default CaseSingle;
          
          
          
          
