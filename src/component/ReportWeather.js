import React, { Component } from 'react';
import  Checkbox from './FormCheckBox';
import '../style.css';
import location from '../img/location.png';
import ImgOnClick from '../components/OnClick';
class ReportWeather extends Component {
constructor() {
super();
this.state = {
input: {},
errors: {}
}
this.handleChange = this.handleChange.bind(this);
this.submitSearchForm = this.submitSearchForm.bind(this);
};
handleChange(e) {
let input = this.state.input;
input[e.target.name] = e.target.value;
this.setState({
input
});
}
submitSearchForm(e) {
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
if (!input["Country"]) {
formIsValid = false;
errors["Country"] = "Please enter correct name.";
}
// you should type numericla this errors will fire
if (typeof input["Country"] !== "undefined") {
if (!input["Country"].match(/^[a-zA-Z ]*$/)) {
formIsValid = false;
errors["Country"] = "*Please enter correct name.";
}
}
if (!input["Location"]) {
formIsValid = false;
errors["Location"] = "*Please enter Location.";
}
if (typeof input["Location"] !== "undefined") {
if (!input["Location"].match(/^[a-zA-Z ]*$/)) {
formIsValid = false;
errors["Location"] = "*Please enter correct Location";
}
}
if (!input["Date"]) {
formIsValid = false;
errors["Date"] = "*Please enter Date";
}
if (!input["Time"]) {
formIsValid = false;
errors["Date"] = "*Please enter Time";
}
this.setState({
errors: errors
});
return formIsValid;
}
render() {
return (
<div className="singinform">
   <form className="singupform" method="post"  name="SearchForm"  onSubmit= {this.submitSearchForm} >
      <div className="form-group">
         <label id="firstnameLabel">Country</label>
         <input className="form-control"
            type="text"
            name="Country"
            value={this.state.Country} 
            onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.Country}</div>
      </div>
      <div className="form-group">
         <label id="LocationLabel">Location</label>
         <input className="form-control"
            type="text"
            name="Location"
            value={this.state.Location} 
            onChange={this.handleChange} />
         <img src={location} className="input-location-icon" alt="location" />
         <div className="errorMsg">{this.state.errors.Location}</div>
      </div>
      <div className="form-group">
         <label id="DateLabel">Date</label>
         <input className="form-control"
            type="date"
            name="Date"
            value={ this.state.Date } 
            onChange={ this.handleChange} />
         <div className="errorMsg">{this.state.errors.Date}</div>
      </div>
      <div className="form-group">
         <label id="TimeLabel">Time</label>
         <input className="form-control"
            type="text"
            name="Time"
            value={this.state.Time} 
            onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.Time}</div>
      </div>
      <div className="main-button">
         <button type="submit" className="btn float-left mb-3 d-block" value="Save" onClick={ this.handleSubmit }>Show</button>
      </div>
   </form>
</div>
);
}
}
export default ReportWeather;