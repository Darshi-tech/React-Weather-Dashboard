import React, { Component } from 'react';
class PasswordForm extends Component {
constructor(props) {
super(props);
this.state = {value: ''};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
var pass = event.target.value;
var reg = /^[A-Z]*$/;
var test = reg.test(pass);
if (test) {
alert('pass');
this.setState({value: event.target.value});
}else{
alert('fail');
}  		
}
/*  validate(event) {
var pass = event.target.value;
var reg = /^[A-Z]*$/;
var test = reg.test(pass);
if (test) {
alert('pass');
}else{
alert('fail');
}
} */
handleSubmit(event) {
if(this.state.value.length < 8) {
return false;
}
alert('A password was submitted that was ' + this.state.value.length + ' characters long.');
event.preventDefault();
}
render() {
return (
<form onSubmit={this.handleSubmit}>
   <label>
   Password:&nbsp;
   <input type="password" value={this.state.value} onChange={this.handleChange}/>
   </label>
   <input type="submit" value="Submit" />
</form>
);
}
}
export default PasswordForm;