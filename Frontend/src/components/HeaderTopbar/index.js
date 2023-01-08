import React, {useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './style.css'

const HeaderTopbar = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem('token') !== null
    );


    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

    }, [isLoggedIn]);

const handleClick   =(e)=>{
    e.preventDefault();
    console.log('here');
    localStorage.clear();
    setIsLoggedIn(false);
}

    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+21624235625</li>
                                <li><i className="fi flaticon-envelope"></i> adam.khalfaoui@esprit.tn</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                {isLoggedIn ?<li>Hello there!</li> : <li><Link to="/signup">Sign Up</Link></li>}
                                {!isLoggedIn ?<li><Redirect to="/login">Login</Redirect></li > : <li onClick={handleClick}>Logout</li>}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;