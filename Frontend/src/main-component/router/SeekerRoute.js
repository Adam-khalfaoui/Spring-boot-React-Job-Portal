import React, {useEffect, useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const SeekerRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem('token') !== null
    );
    const [isSeeker, setRole] = useState(
        () => localStorage.getItem('role') === 'ROLE_SEEKER'
    );

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        console.log('here');

    }, [isLoggedIn]);
    return (
        <Route
            {...rest}
            render={props => {
                return isLoggedIn && isSeeker ? (
                <Component {...props} />
                ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }}
        />
    )
}

export default SeekerRoute