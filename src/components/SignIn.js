import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Currentweather from '../component/Currentweather';

import '../style.css';
import '../index.css'; 
import backgroundpattern from '../img/backgroundpattern.png';

import Login from '../component/Login';

import  ReactLeftNav from '../component/ReactLeftNav';


import SignUp from '../components/SignUp';
import CustomLink from '../components/CustomLink';



class SignIn extends Component {
render() {
return (
<div className="App">  
   <div className="screen-wrapper">
      <div className="container bg-dashboard">
         <div className="row no-gu">
            <ReactLeftNav/>
            <div className="col-md-6">
               <div className="row">
                  <div className="col-md-6 mx-auto profile-bg">
                     <Currentweather/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="login-screen-img bg-screen-img">   </div>
                  </div>
               </div>
            </div>
            <div className="col-md-5">
               <Login/>
    
            </div>
         </div>
         <div className="row">
            <div className="col-md-6 offset-md-6">
               If you have account already please
               <span className="ml-2">
                  <CustomLink type="text" tag={Link} to='/SignUp'>Sign Up</CustomLink>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
export default SignIn;