import React, {useEffect, useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const CompanyRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem('token') !== null
    );
    const [isCompany, setRole] = useState(
        () => localStorage.getItem('role') === 'ROLE_COMPANY'
    );

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

    }, [isLoggedIn]);
    return (
        <Route
            {...rest}
            render={props => {
                return isLoggedIn && isCompany ? (
                <Component {...props} />
                ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }}
        />
    )
}

export default CompanyRoute