import React, { Component } from 'react';
import GoogleBtn from './GoogleBtn.js';
import Link from './ReactLink';
class  ReactSignUp extends Component {
constructor(props) {
super(props);
this.state = {
firstName: '',
lastName: '',
dob: '',
email: '',
password: '',
confirmpassword: ''
};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
e.target.classList.add('active');
this.setState({
[e.target.name]: e.target.value
});
this.showInputError(e.target.name);
}
handleSubmit(e) {    
e.preventDefault();
console.log('component state', JSON.stringify(this.state));
if (!this.showFormErrors()) {
console.log('form is invalid: do not submit');
} else {
console.log('form is valid: submit');
}
}
showFormErrors() {
const inputs = document.querySelectorAll('input');
let isFormValid = true;
inputs.forEach(input => {
input.classList.add('active');
const isInputValid = this.showInputError(input.name);
if (!isInputValid) {
isFormValid = false;
}
});
return isFormValid;
}
showInputError(refName) {
const validity = this.refs[refName].validity;
const label = document.getElementById(`${refName}Label`).textContent;
const error = document.getElementById(`${refName}Error`);
const isPassword = refName.indexOf('password') !== -1;
if (!validity.valid) {
if (validity.valueMissing) {
error.textContent = `${label} is a required field`; 
} else if (validity.typeMismatch) {
error.textContent = `${label} should be a valid email address`; 
} else if (isPassword && validity.patternMismatch) {
error.textContent = `${label} should be longer than 4 chars`; 
}
return false;
}
error.textContent = '';
return true;
}
render() {
return (
<div className="singinform">
<h1>Sign <span>up</span></h1>
<form novalidate className="singupform">
   <div className="form-group">
   <label id="firstnameLabel">First Name</label>
   <input className="form-control"
      type="text"
      name="firstname"
      ref="firstname"
      value={ this.state.firstname } 
      onChange={ this.handleChange }
      required />
   <div className="error" id="firstnameError" />
   </div>
   <div className="form-group">
   <label id="lastnameLabel">Last Name</label>
   <input className="form-control"
      type="text"
      name="lastname"
      ref="lastname"
      value={ this.state.lastname } 
      onChange={ this.handleChange }
      required />
   <div className="error" id="LastnameError" />
   </div>
   <div className="form-group">
   <label id="dobLabel">Date of Birth</label>
   <input className="form-control"
      type="date"
      name="dob"
      ref="dob"
      value={ this.state.dob } 
      onChange={ this.handleChange }
      required />
   <div className="error" id="dobnameError" />
   </div>
   <div className="form-group">
   <label id="emailLabel">Email Address </label>
   <input className="form-control"
      type="email"
      name="email"
      ref="email"
      value={ this.state.email } 
      onChange={ this.handleChange }
      required />
   <div className="error" id="emailnameError" />
   </div>
   <div className="form-group">
   <label id="passwordLabel">Password</label>
   <input className="form-control"
      type="password" 
      name="password"
      ref="password"
      value={ this.state.password } 
      onChange={ this.handleChange }
      pattern=".{5,}"
      required />
   <div className="error" id="passwordError" />
   </div>
   <div className="form-group">
      <label id="confirmpasswordLabel">Confirm Password</label>
      <input className="form-control"
         type="password" 
         name="confirmpassword"
         ref="confirmpassword"
         value={ this.state.confirmpassword } 
         onChange={ this.handleChange }
         pattern=".{5,}"
         required />
      <div className="error" id="confirmpasswordError" />
      </div>
      <div className="main-button">
         <button type="reset" className="btn btn-secondry" value="Register"> Cancel</button>
         <button type="submit" className="btn float-left mb-3 d-block" value="Register" onClick={ this.handleSubmit }>Submit</button>
      </div>
</form>
</div>
);
}
}
export default ReactSignUp;