import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';
import '../index.css'; 
import backgroundpattern from '../img/backgroundpattern.png';
import Currentweather from '../component/Currentweather';
import BasicForm from '../component/ReactPasswordNew.js';
import Link from '../component/ReactLink';
import GoogleBtn from '../component/GoogleBtn';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleMaps from '../components/GoogleMap2';
import SignupForm from '../component/SignupForm';
import Cloudy from '../img/cloudy.jpg'; // Tell webpack this JS file uses this image
function SignUp() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row no-gu">
            <div className="col-md-6">
               <div className="row">
                  <div className="col-md-6 mx-auto profile-bg">
                     <Currentweather/>
                     <GoogleMaps/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="bg-screen-img bg-signup">   </div>
                  </div>
               </div>
            </div>
            <div className="col-md-5">
               <SignupForm/>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
export default SignUp;