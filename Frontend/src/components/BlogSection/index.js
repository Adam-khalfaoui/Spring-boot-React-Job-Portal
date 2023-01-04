import React from 'react'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import blog4 from '../../images/blog/img-4.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Blog</span>
                            </div>
                            <h2>Our Latest News</h2>
                            <p>It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                   <img src={blog1} alt="" />
                                </div>
                                <div className="blog-content">
                                    <ul>
                                        <li>22 June, 2021</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/blog-details">Best and less published their supplier lists.</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-content">
                                    <ul>
                                        <li>22 June, 2021</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/blog-details">Best and less published their supplier lists.</Link></h2>
                                </div>
                                <div className="blog-img">
                                    <img src={blog2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-content">
                                    <ul>
                                        <li>22 June, 2021</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/blog-details">Best and less published their supplier lists.</Link></h2>
                                </div>
                                <div className="blog-img">
                                    <img src={blog3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                   <img src={blog4} alt="" />
                                </div>
                                <div className="blog-content">
                                    <ul>
                                        <li>22 June, 2021</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>56</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i> 78</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/blog-details">Best and less published their supplier lists.</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;