import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import  GoogleBtn from './GoogleBtn';
import CustomLink from '../components/CustomLink';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import ForgotPassword from '../components/ForgotPassword';
class Login extends Component {
constructor() {
super();
this.state = {
input: {},
errors: {}
}
this.handleChange = this.handleChange.bind(this);
this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
};
handleChange(e) {
let input = this.state.input;
input[e.target.name] = e.target.value;
this.setState({
input
});
}
submituserRegistrationForm(e) {
console.log(this.validateForm());
e.preventDefault();
if (this.validateForm()) {
console.log(this.state);
// let fields = {};
// fields["username"] = "";
// fields["emailid"] = "";
console.log(this.state);
}
}
validateForm() {
let input = this.state.input;
let errors = {};
let formIsValid = true;
if (!input["email"]) {
formIsValid = false;
errors["email"] = "*Please enter your Email Address";
}
if (typeof input["email"] !== "undefined") {
//regular expression for email validation
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
if (!pattern.test(input["email"])) {
formIsValid = false;
errors["email"] = "*Please enter valid email-ID.";
}
}
if (!input["password"]) {
formIsValid = false;
errors["password"] = "*Please enter password.";
}
if (typeof input["password"] !== "undefined" && typeof input["password"] !== "undefined") {
if (input["password"] !== input["password"]) {
formIsValid = false;
errors["password"] = "Passwords don't match.";
}
}
this.setState({
errors: errors
});
return formIsValid;
}
render() {
return (
<div className="singinform">
   <h1>{this.props.headerProp} <span>{this.props.subheaderProp}</span></h1>
   <GoogleBtn/>
   <div className="or-seperator">
      <div className="hr float-left"></div>
      <span>or</span>
      <div className="hr float-right"></div>
   </div>
   <form className="singupform" method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <div className="form-group">
         <label id="emailLabel">Email</label>
         <input className="form-control"
            type="text"
            name="email"
            value={this.state.email} 
            onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.email}</div>
      </div>
      <div className="form-group">
         <label id="passwordLabel">Password</label>
         <input className="form-control"
            type="password"
            name="password"
            value={this.state.password} 
            onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.password}</div>
      </div>
      <div className="form-group">
         <div className="row main-button">
            <div className="">
               <div>
                  <CustomLink type="submit" className="btn" tag={Link} to='/Dashboard' onClick={ this.handleSubmit}>Sign in</CustomLink>
               </div>
               <div  className="text-right mt-5">
                  <CustomLink type="text" tag={Link} to='/ForgotPassword'>Forgot Password</CustomLink>
               </div>
            </div>
         </div>
      </div>
   </form>
</div>
);
}
}
Login.defaultProps = {
headerProp: "Sign",
subheaderProp:"in"
}
export default Login;