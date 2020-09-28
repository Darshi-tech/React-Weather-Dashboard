import React, { Component } from 'react';
import  Checkbox from './FormCheckBox';
import '../style.css';


class ProfileSettings extends Component {
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
          alert("Form submitted");
      }

    }

    validateForm() {

      let input = this.state.input;
      let errors = {};
      let formIsValid = true;
        
      // you should type alphebet name, if this empy this errors will fire
      if (!input["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your username.";
      }
        
     // you should type numericla this errors will fire
        if (typeof input["firstname"] !== "undefined") {
        if (!input["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
        }
            
         if (!input["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "*Please enter your lastname.";
      }

      if (typeof input["lastname"] !== "undefined") {
        if (!input["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "*Please enter alphabet characters only.";
        }
      }
          if (!input["dateofbirth"]) {
        formIsValid = false;
        errors["dateofbirth"] = "*Please enter your Date of Birth";
      }
        
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
       
        <form className="singupform" method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
        
        <div className="form-group">
          <label id="firstnameLabel">First Name</label>
          <input className="form-control"
            type="text"
            name="firstname"
            value={this.state.firstname} 
            onChange={this.handleChange} />
           <div className="errorMsg">{this.state.errors.firstname}</div>
        </div>
    
        <div className="form-group">
          <label id="lastnameLabel">Last Name</label>
          <input className="form-control"
            type="text"
            name="lastname"
            value={this.state.lastname} 
            onChange={this.handleChange} />
           <div className="errorMsg">{this.state.errors.lastname}</div>
        </div>
        
         <div className="form-group">
          <label id="dateofbirthLabel">Date of Birth</label>
          <input className="form-control"
            type="date"
            name="dateofbirth"
            ref="dateofbirth"
            value={ this.state.dob } 
            onChange={ this.handleChange} />
          <div className="errorMsg">{this.state.errors.dateofbirth}</div>
        </div>
        
        <div className="form-group">
          <label id="emailLabel">Email Address</label>
          <input className="form-control"
            type="text"
            name="email"
            value={this.state.email} 
            onChange={this.handleChange} />
           <div className="errorMsg">{this.state.errors.email}</div>
        </div>
        
         <div className="form-group">
        <Checkbox/>
         <label id="ReceiveNotificationLabel">Receive Notification</label>
        </div>
        
      <div className="main-button">
        <button type="submit" className="btn float-left mb-3 d-block" value="Save" onClick={ this.handleSubmit }>Save</button>
      </div>
        
        
        
        </form>
    </div>


      );
  }


}
export default ProfileSettings;
