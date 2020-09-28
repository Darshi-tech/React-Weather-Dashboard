import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';
import '../index.css'; 
import backgroundpattern from '../img/backgroundpattern.png';
import Currentweather from '../component/Currentweather';
import SignupForm from '../component/SignupForm';
import ForgotPasswordForm from '../component/ForgotPasswordForm';
class ForgotPassword extends React.Component {
reset() {
alert('Password is sent to your email');
}
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row no-gu">
            <div className="col-md-6">
               <div className="row">
                  <div className="col-md-8 mx-auto profile-bg">
                     <Currentweather/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="bg-screen-img bg-signup">   </div>
                  </div>
               </div>
            </div>
            <div className="col-md-5">
               <ForgotPasswordForm/>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
export default ForgotPassword;