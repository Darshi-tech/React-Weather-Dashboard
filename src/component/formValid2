import React, { Component } from 'react';
import GoogleBtn from './GoogleBtn.js';
import Link from './ReactLink';

class formValid extends Component {
  
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
   
    const formvalid = formErrors => {
       
       let valid = true;
       Object.values(formErrors).forEach(val => { 
           val.length > 0 && (valid = false);
           
       });
       return valid;
   };
    
    
    constructor(props) {
    super(props);
    
    this.state = {
      email: null,
      password: null,
    formErrors: {
        
        email:"",
        Password:""
    }
     
    };
  }
    
    handleSubmit = e => {    
    e.preventDefault();
        
        if(formValid(this.stateformErrors)){
           consol.log('
              email:${this.state.email}
              password:${this.state.password}
                       ')
                                           }
        else{
            consol.error('From Invalid')
                       }
    };
        
    }
    
    handleChange = e =>{
        
        e.preventDefault();
        cont { name, value = e.target};
        let formErrors = this.target.formErrors;
        
        switch(name){
                case: 'email':
                formErrors.email =
                    value.length < 3 && value.length > 0
                    ?"minimum 3 characters required"
                    :"";
                break;
                case: 'email':
                formErrors.email =
                    emailRegex.test(value) && value.length > 0
                    ?""
                    :"Invalid Email Address";
                break;
                default;
                break;
                
        }
        
        };
        
        
        
        
        
        
        
        
        
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
        
      <form novalidate className="singinform" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="form-control"
            type="email"
            name="email"
            value={ this.state.username } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="usernameError" />
        </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={ this.state.password} 
            onChange={ this.handleChange }
            required />
          <div className="error" id="usernameError" />
        </div>
   
    
         <div className="float-right">
      <button type="submit" className="btn float-left mb-3 d-block" value="Register" onClick={ this.handleSubmit }>Submit</button>
    <div  className="d-block mt-1">
      <Link to="./ReactLink" title="Forgot password" altTitle="Or here" />
    </div>
    
    
   </div>
       
      </form>
        </div>
    );
  }
}

export default formValid;