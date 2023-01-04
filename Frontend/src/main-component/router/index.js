import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import AddJobPage from '../AddJobPage'

import JobsPage from '../JobsPage'

import BlogDetails from '../BlogDetails' 

import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage'
import Jobs from "../../components/Jobs";

      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={LoginPage}/>


            <Route path='/AddJob' component={AddJobPage}/>

            <Route path='/Jobs' component={JobsPage}/>


            <Route path='/blog-details' component={BlogDetails}/>



             <Route path='/contact' component={ContactPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>

          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
