import React, {useState} from 'react';
import {Link, useParams, useLocation} from 'react-router-dom'

import './style.css'
import blog1 from '../../images/blog/img-5.jpg'
import blog2 from '../../images/blog-details/author.jpg'
import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog/admin.jpg'
import TextField from "@material-ui/core/TextField";
import {Input} from "reactstrap";
import jobsService from "../../services/jobsService";
import {toast} from "react-toastify";

const BlogSingle = (props) => {


    const job=props.postedBy
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [blobImage, setBlobImage] = useState()
    const [username, setUsername] = useState(job)

    const [JobApply, setJobApply] = useState({
        name: '',
        lastname: '',
        email:'',

    });



    const handleFileUpload = file => {



        setFile(file.target.files[0]);
        setFileName(file.target.files[0].name)
console.log(file.target.files[0].name)

    };
    const submitHandler = (e) => {
        e.preventDefault()

        jobsService.Upload(file);


        let theJobApply = {name: JobApply.name, lastname: JobApply.lastname, cv: fileName, email: JobApply.email};

        jobsService.applyToJob(theJobApply,props.idJob).then(res => {
            toast.success('Job Application has been sent ');
            setJobApply({
                name: '',
                lastname: '',
                email:'',
                cv:'',

            })

        })
    }
    const changeHandler = (e) => {


        setJobApply({...JobApply, [e.target.name]: e.target.value});


    };

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

                                    <li><Link to="/blog-details"><img src={blog6} alt=""/> By {props.username}</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-clipboard"></i> {props.contarctType}</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-location-pin"></i> {props.location}</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> {props.postedDate}</Link></li>

                                    <li><Link to="/blog-details"><i className="ti-eye"></i> {props.views}</Link></li>
                                </ul>
                                <h2>{props.jobTitle}</h2>
                                <p>{props.jobDescription}.</p>
                            </div>


                        </div>
                        <div className="tp-blog-single-section wrap-even">

                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Apply to the Job</h3>
                                <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler} encType="multipart/form-data" >
                                    <div className="form-inputs">
                                        <Input
                                            className="form-control"
                                            placeholder="name"
                                            value={JobApply.name}
                                            variant="outlined"
                                            name="name"
                                            type="text"
                                            label="name"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                        />

                                        <Input
                                            className="form-control"
                                            placeholder="lastname"
                                            value={JobApply.lastname}
                                            variant="outlined"
                                            name="lastname"
                                            type="text"
                                            label="lastname"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                        />
                                        <Input
                                            className="form-control"
                                            placeholder="email"
                                            value={JobApply.email}
                                            variant="outlined"
                                            name="email"
                                            type="text"
                                            label="email"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                        />
                                        <Input
                                            className="form-control"
                                            placeholder="lastname"

                                            variant="outlined"
                                            name="cv"
                                            type="file"
                                            label="cv"
                                            onBlur={handleFileUpload}
                                            onChange={handleFileUpload}
                                        />
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
