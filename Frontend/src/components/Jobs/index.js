import React from 'react';
import {Link} from 'react-router-dom'


import './style.css'

import blog4 from '../../images/blog/admin.jpg'


const Jobs = () => {

    return(
        <section className="tp-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="tp-tp-blog-content">

                            {/*-------------- JOB SECTION--------------- */}

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2021</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">They are waiting for your help.</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>

                            {/*-------------- JOB SECTION--------------- */}

                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-details" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-details">1</Link></li>
                                    <li><Link to="/blog-details">2</Link></li>
                                    <li><Link to="/blog-details">3</Link></li>
                                    <li><Link to="/blog-details">4</Link></li>
                                    <li>
                                        <Link to="/blog-details" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     )
        
}

export default Jobs;
