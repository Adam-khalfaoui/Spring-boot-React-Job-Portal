import React from 'react'

import pmt1 from '../../images/checkout/img-1.png'
import pmt2 from '../../images/checkout/img-2.png'
import pmt3 from '../../images/checkout/img-3.png'
import pmt4 from '../../images/checkout/img-4.png'

import './style.css'

const Donate = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
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

                                <div className="tp-donations-details">
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="name" id="jobTitle" placeholder="job Title"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" className="form-control" name="name" id="location" placeholder="location"/>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input className="form-control" name="contarctType" id="contarctType" placeholder="contarct Type" list="Type" />
                                            <datalist id="Type">
                                                <option value="CDI" />
                                                <option value="CDD" />
                                                <option value="Intérim" />
                                                <option value="Stage" />
                                            </datalist>
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <textarea className="form-control" name="note" id="jobDescription" placeholder="jobDescription"></textarea>
                                        </div>
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

export default Donate;