import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import './index.css'; 
import backgroundpattern from './img/backgroundpattern.png';
import Currentweather from './component/Currentweather';
import Login from './component/Login';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';

import {
BrowserRouter as Router,
Switch,
Route,
Link,
useHistory,
useLocation,
useParams
} from "react-router-dom";
//import Link from './component/ReactLink';
import GoogleBtn from './component/GoogleBtn';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import  ReactLeftNav from './component/ReactLeftNav';
import  Search from './components/Search';
import  Report from './components/Report';
import Cloudy from './img/cloudy.jpg'; // Tell webpack this JS file uses this image
import GMap from './components/GMap';

import Customize from './components/Customize';
 import DateTime from './components/DateTime';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';



function App() {
return (
<div className="App">
   <div className="login-screen">
     <DateTime/>
      <Router>
      
         <Switch>
            <Route exact path="/">
               {
               <SignIn />
               } 
            </Route>
            <Route exact path="/SignUp">
               {
               <SignUp />
               } 
            </Route>
     <Route exact path="/SignIn">
               {
               <SignIn />
               } 
            </Route>
            <Route exact path="/Customize">
               {
               <Customize />
               } 
            </Route>
            <Route exact path="/Profile">
               {
               <Profile />
               } 
            </Route>
            <Route exact path="/Report">
              {
               <Report />
               } 
            </Route>
          <Route exact path="/ForgotPassword">
              {
               <ForgotPassword />
               } 
            </Route>
           <Route exact path="/Dashboard">
              {
               <Dashboard />
               } 
            </Route>
      <Route exact path="/Search">
              {
               <Search />
               } 
            </Route>
     
         </Switch>
      </Router>
   </div>
</div>
);
}
export default App;