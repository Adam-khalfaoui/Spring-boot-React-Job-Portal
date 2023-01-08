import React, {useState} from 'react';
import {Link} from 'react-router-dom'


import './style.css'

import blog4 from '../../images/blog/admin.jpg'
import jobsService from "../../services/jobsService";


function Jobs(props){

    const description = props.jobDescription;
    const str = description || '';
     const description1=str.substring(0,100);

    const clickHandler = (e) => {


        console.log('hereeee')
        console.log(props.idJob)
        jobsService.addview(props.idJob)


    };
    return(
        <section className="tp-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12" >
                        <div className="tp-tp-blog-content" >

                            {/*-------------- JOB SECTION--------------- */}

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><img src={blog4} alt=""/> By {props.username}</li>
                                    <li><i className="ti-clipboard"></i> {props.contarctType}</li>
                                    <li><i className="ti-location-pin"></i> {props.location}</li>
                                    <li><i className="ti-eye"></i> {props.views}</li>
                                </ul>
                                <h3>

                                   <Link
                                       onClick={(e) => clickHandler(e)}
                                       to={`/blog-details/${props.idJob}`}>{props.jobTitle}</Link>
                                </h3>
                                <p>{description1}</p>
                                <Link

                                    to={`/blog-details/${props.idJob}`}>Show More...</Link>
                            </div>


                            {/*-------------- JOB SECTION--------------- */}


                        </div>
                    </div>

                </div>
            </div>
        </section>
     )
        
}

export default Jobs;
