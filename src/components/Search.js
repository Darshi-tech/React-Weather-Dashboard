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
import Autocomplete from 'react-google-autocomplete';
class Search extends Component {
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row">
            <div className="col-md-1 pl-0">
               <ReactLeftNav/>
            </div>
            <div class="col-md-6">
               <div className="profilesettings">
                  <h2>{this.props.headerProp}</h2>
               </div>
               <div className="bg-screen-img bg-search">   </div>
            </div>
            <div className="col-md-5">
               <SearchWeather/>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}
Search.defaultProps = {
headerProp: "Search"
}
export default Search;