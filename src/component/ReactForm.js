import React, { Component } from 'react';
import Link from './ReactLink';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleBtn from './GoogleBtn.js';
import BasicForm from './ReactPasswordNew.js';


class ReactForm extends Component {
constructor(props) {
    super(props);
    
    this.state = {
      username: 'jasonmalfatto@moduscreate.com',
      password: '',
      passwordConfirm: ''
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
    const isPasswordConfirm = refName === 'passwordConfirm';
    
    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`; 
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }

    
render() {
return (
<div className="singinform">
   <h1>Sign <span>in</span></h1>
   <div>
     <GoogleBtn/>
   </div>
   <div class="or-seperator">
      <div class="hr float-left"></div>
      <span>or</span>
      <div class="hr float-right"></div>
   </div>
   <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <div className="form-group">
         <label id="usernameLabel">Username</label>
        <input className="form-control"
            type="email"
            name="username"
            ref="username"
            value={ this.state.username } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="usernameError" />
      </div>
      <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <div className="errorMsg">{this.state.errors.password}</div>
         <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.fields.password} onChange={this.handleChange} />
      </div>
    
    <BasicForm/>
   <div className="float-right">
      <button type="submit" className="btn float-left mb-3 d-block" value="Register">Submit</button>
    <div  className="d-block mt-1">
      <Link to="./ReactLink" title="Forgot password" altTitle="Or here" />
    </div>
    
    
   </div>
   </form>
    
</div>
);
}
}
export default ReactForm;