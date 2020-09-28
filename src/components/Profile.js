import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../index.css'; 
import '../style.css';
import Currentweather from '../component/Currentweather';
import ProfileSettingsLink from '../component/ReactLink';
import ProfileSettings from '../component/profileSettings';
import ImageUpload from '../component/MyEditor';
import  Checkbox from '../component/FormCheckBox';
import  ReactLeftNav from '../component/ReactLeftNav';
class Profile extends Component {
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row">
            <div class="col-md-1 pl-0">
               <ReactLeftNav/>
            </div>
            <div class="col-md-6">
    <div className="profilesettings">
    <h2>Profile Settings</h2></div>
               <ImageUpload/>
            </div>
            <div class="col-md-5">
               <ProfileSettings/>
    
    <div class="image-upload">
       <input id="file-input" type="file"/>
     </div>
            </div>
         </div>
      
</div>
</div>
</div>
);
}
}
export default Profile;