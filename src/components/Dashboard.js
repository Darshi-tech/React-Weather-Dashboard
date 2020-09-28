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
import  CurrentweatherAnimation from '../components/CurrentweatherAnimation';
import  Test from '../components/Testnav';
import  DashboardTable from '../components/DashboardTable'; 
import  PieCharts from '../components/PieCharts'; 
import TestCharts from '../components/Test2Charts';
import LocationSearchInput from '../components/LocationTest';
class  Dashboard extends Component {
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row">
            <div class="col-md-1 pl-0 pr-0  br-1">
               <ReactLeftNav/>
            </div>
            <div class="col-md-11 pl-0">
               <div className="row">
                  <div class="col-md-6">
                     <div className="row">
                        <div className="col-md-6">
                           <div class="col-md-12">
                              <div className="card-dash text-center clearfix">
                                 <div><b>{this.props.tempProp}</b></div>
                                 <div><span className="l-text">{this.props.tempValueProp}</span><sup>{this.props.tempValuSupProp}</sup>C</div>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div className="card-dash text-center clearfix">
                                 <div><b>{this.props.windProp}</b></div>
                                 <div><span span className="l-text">{this.props.windSpeedProp}</span>{this.props.windSpeedSupProp}</div>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 pr-0">
                           <div className="card-dash text-center clearfix">
                                <PieCharts/>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-12 ml-3">
                           <div className="card-dash clearfix">
                              <CurrentweatherAnimation/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     
                     <TestCharts/>
                     
                  </div>
               </div>
    <div className="row ml-3 mr-1">
     <div className="col-md-12 card-dash text-center clearfix">
    <DashboardTable/>

    </div>
    </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
Dashboard.defaultProps = {
headerProp: "Dashboard",
tempProp: "Temperature",
windProp: "Speed of Winds",
windSpeedProp: "19",
windSpeedSupProp: "km/h",
tempValueProp: "27",
tempValuSupProp: "0",
}
export default Dashboard;