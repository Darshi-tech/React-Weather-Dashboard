import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import '../style.css';
import { Button} from 'react-bootstrap';
import SignIn from '../components/SignIn';
import CustomLink from '../components/CustomLink';
class ForgotPasswordForm extends Component {
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
// fields["mobileno"] = "";
// fields["password"] = "";
//this.setState({fields:fields});
console.log(this.state);
alert("reset password send to the gmail , please check");
window.location.href = "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#";
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
this.setState({
errors: errors
});
return formIsValid;
}
render() {
return (
<div className="singinform">
   <h1>{this.props.headerProp} <span>{this.props.subheaderProp}</span></h1>
   <form className="singupform" method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <div className="form-group">
         <label id="emailLabel">Email Address</label>
         <input className="form-control"
            type="text"
            name="email"
            value={this.state.email} 
            onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.email}</div>
      </div>
      <div className="main-button">
         <CustomLink type="reset" tag={Link} to='/SignIn' className="btn btn-secondry">Cancel</CustomLink>
         <button type="submit" className="btn float-left mb-3 d-block" value="Save" onClick={ this.handleSubmit }>Send</button>
      </div>
   </form>
</div>
);
}
}
ForgotPasswordForm.defaultProps = {
headerProp: "Reset",
subheaderProp:"Password"
}
export default ForgotPasswordForm;