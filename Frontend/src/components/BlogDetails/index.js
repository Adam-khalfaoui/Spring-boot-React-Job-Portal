import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import './style.css'
import blog1 from '../../images/blog/img-5.jpg'
import blog2 from '../../images/blog-details/author.jpg'
import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog/admin.jpg'

const BlogSingle = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <section className="tp-blog-single-section  section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="tp-tp-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog6} alt=""/>  By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2021</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>Help the helpless who need you.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>


                        </div>
                        <div className="tp-blog-single-section wrap-even">

                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Apply to the Job</h3>
                                <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                    <div className="form-inputs">
                                        <input placeholder="Name" type="text"/>
                                        <input placeholder="Lastname" type="text"/>
                                        <input placeholder="cv" type="file"/>
                                    </div>

                                    <div className="form-submit">
                                        <input id="submit" value="Apply" type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     )
        
}

export default BlogSingle;
