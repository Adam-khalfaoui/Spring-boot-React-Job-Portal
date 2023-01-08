import React, {useState} from 'react';
import AllRoute from '../router'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LoginPage from "../LoginPage";


const App = () => {




  return (
    <div className="App" id='scrool'>
        <AllRoute>

        </AllRoute>
          <ToastContainer/>
    </div>
  );
}

export default App;
