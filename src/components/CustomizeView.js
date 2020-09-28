import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import location from '../img/location.png';
import settngs from '../img/settngs.png';
import password from '../img/password.png';
import notification from '../img/notification.png';
import '../index.css'; 
import '../style.css';
class CutomizeView extends Component {
render() {
return (
<div>
   <h5>{this.props.headerProp}</h5>
   <div className="row ">
      <div className="custom-card-view mb-20">
         <div className="float-left">
            <img src={notification} className="customize-icon" alt="notification" />
            <div className="text">
               <p>{this.props.NotificationProp}</p>
            </div>
         </div>
      </div>
      <div className="custom-card-view mb-20">
         <div className="float-left">
            <img src={location} className="customize-icon" alt="location" />
            <div className="text">
               <p>{this.props.LocationProp}</p>
            </div>
         </div>
      </div>
   </div>
   <div className="row ">
      <div className="custom-card-view mb-20">
         <div className="float-left">
            <img src={settngs} className="customize-icon" alt="settngs" />
            <div className="text">
               <p>{this.props.SettingProp}</p>
            </div>
         </div>
      </div>
      <div className="custom-card-view mb-20">
         <div className="float-left">
            <img src={password} className="customize-icon" alt="password" />
            <div className="text">
               <p>{this.props.ChangePasswordPropn}</p>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
CutomizeView.defaultProps = {
headerProp: "Customize your view",
NotificationProp: "Notification",
LocationProp:"Set Your Location",
SettingProp:"Dasboard Settings",
ChangePasswordPropn:"Change Password",
}
export default CutomizeView;