import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import AddJobPage from '../AddJobPage'

import JobsPage from '../JobsPage'

import BlogDetails from '../BlogDetails' 

import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage'
import Jobs from "../../components/Jobs";
import CompanyRoute from "./CompanyRoute";
import SeekerRoute from "./SeekerRoute";



const AllRoute = () => {



  return (
    <div className="App">
       <Router>

          <Switch>
              <Route exact path='/' component={LoginPage}/>
              <SeekerRoute path="/Jobs" component={JobsPage} />
              <SeekerRoute path="/blog-details/:id" component={BlogDetails}/>
              <SeekerRoute path='/contact' component={ContactPage}/>

              <CompanyRoute path='/AddJob' component={AddJobPage}/>




            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>

          </Switch>
      </Router>

    </div>
  );
}

export default AllRoute;
