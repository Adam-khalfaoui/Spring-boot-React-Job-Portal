import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import DonatePage from '../DonatePage'

import BlogPage from '../BlogPage' 

import BlogDetails from '../BlogDetails' 

import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 

      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={LoginPage}/>


            <Route path='/donate' component={DonatePage}/>

            <Route path='/blog' component={BlogPage}/> 


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
