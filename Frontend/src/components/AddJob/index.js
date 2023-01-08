import React, {useState} from 'react'

import pmt1 from '../../images/checkout/img-1.png'
import pmt2 from '../../images/checkout/img-2.png'
import pmt3 from '../../images/checkout/img-3.png'
import pmt4 from '../../images/checkout/img-4.png'

import './style.css'
import Grid from "@material-ui/core/Grid";
import jobsService from "../../services/jobsService";
import SimpleReactValidator from "simple-react-validator";
import TextField from "@material-ui/core/TextField";
import {MenuItem, Select, TextareaAutosize} from "@material-ui/core";
import {toast} from "react-toastify";

const AddJob = (props) => {

    const [job, setJob] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        contarctType:'',
        mail:'',
    });



    const changeHandler = (e) => {
        setJob({...job, [e.target.name]: e.target.value});
        validator.showMessages();
        console.log(e.target.value)

    };
    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const SubmitHandler = (e) =>{
        e.preventDefault()
        if (validator.allValid()){
            setJob({
                jobTitle: '',
                jobDescription: '',
                location: '',
                contarctType:'',
                mail:''
            });
            validator.hideMessages();
            let theJob = {jobTitle: job.jobTitle, jobDescription: job.jobDescription, location: job.location, contarctType: job.contarctType, mail:job.mail};
            jobsService.addJob(theJob).then(res => {
                toast.success('Job ajouté avec success ');
                setJob({
                    jobTitle: '',
                    jobDescription: '',
                    location: '',
                    contarctType:'',
                    mail:''
                }   )

            }) .catch(error => {
                toast.error('Your city should be in French Polynesia')
            });
        }else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }


    }


    return(
        <div className="tp-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="tp-donate-header">
                            <h2>Add Job</h2>
                        </div>
                        <div id="Donations">
                            <form onSubmit={SubmitHandler} action="#">



                                    <div className="row">
                                        <div className="col-lg-12 col-12 form-group">
                                            <Grid item xs={12}>
                                            <TextField
                                                className="form-control"
                                                placeholder="Title"
                                                value={job.jobTitle}
                                                variant="outlined"
                                                name="jobTitle"
                                                type="text"
                                                label="Title"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />
                                                {validator.message('Job Title', job.jobTitle, 'required|alpha')}
                                               </Grid>
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <Grid item xs={12}>
                                            <TextField
                                                className="form-control"
                                                placeholder="Location"
                                                value={job.location}
                                                variant="outlined"
                                                name="location"
                                                type="text"
                                                label="Location"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />
                                                {validator.message('Location', job.location, 'required|alpha')}
                                            </Grid>
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <Grid item xs={12}>
                                            <TextField
                                                className="form-control"
                                                placeholder="mail"
                                                value={job.mail}
                                                variant="outlined"
                                                name="mail"
                                                type="text"
                                                label="mail"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />

                                                {validator.message('mail', job.mail, 'required|email')}
                                            </Grid>
                                        </div>

                                        <div className="col-lg-12 col-12 form-group">
                                            <Grid item xs={12}>
                                            <Select
                                                className="form-control"
                                                value={job.contarctType}
                                                variant="outlined"
                                                name="contarctType"
                                                type="text"
                                                label="Type"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            >
                                            <MenuItem value="CDI">CDI</MenuItem>
                                            <MenuItem value="CDD">CDD</MenuItem>
                                            <MenuItem value="Intérim">Intérim</MenuItem>
                                            <MenuItem value="Stage">IntéStagerim</MenuItem>
                                            </Select>
                                                {validator.message('Contract Type', job.contarctType, 'required|alpha')}
                                            </Grid>
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <Grid item xs={12}>
                                            <TextareaAutosize
                                                className="form-control"
                                                placeholder="Description"
                                                value={job.jobDescription}
                                                variant="outlined"
                                                name="jobDescription"
                                                type="text"
                                                label="Description"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />
                                                {validator.message('Description', job.jobDescription, 'required|alpha')}
                                            </Grid>
                                            </div>

                                </div>

                                <div className="submit-area sub-btn">
                                    <button type="submit" className="theme-btn submit-btn">Add</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddJob;