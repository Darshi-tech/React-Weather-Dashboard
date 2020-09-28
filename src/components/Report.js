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
import  SearchWeather from '../component/SearchWeather';
import GMap from '../components/GMap';
import Popup from '../components/PopUp';
import SelectOp from '../components/Select';
import Autocomplete from 'react-google-autocomplete';
import  ReportWeather from '../component/ReportWeather';
import  Chart from '../components/Chart';
class Report extends Component {
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row">
            <div className="col-md-1 pl-0">
               <ReactLeftNav/>
            </div>
            <div className="col-md-11">
               <div className="row">
                  <div class="col-md-6">
                     <div className="profilesettings">
                        <h2>{this.props.headerProp}</h2>
                     </div>
                     <div className="bg-screen-img bg-report">   </div>
                  </div>
                  <div className="col-md-5">
                     <div class="form-group">
                        <label for="weathertype">Select the Wether type</label>
                        < SelectOp />
                     </div>
                     <div class="form-group">
                        <label for="startingyear">Starting Year</label>
                        <input type="text" class="form-control" id="weathertype" name="weathertype" />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-2"></div>
                  <div className=" col-md-8">
                     <Chart/>
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
Report.defaultProps = {
headerProp: "Report",
}
export default Report;