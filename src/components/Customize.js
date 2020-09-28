import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../index.css'; 
import '../style.css';
import CustomizeView from './CustomizeView';
import  ReactLeftNav from '../component/ReactLeftNav';

class Customize extends Component {
render() {
return (
<div className="App">
   <div className="login-screen">
      <div className="container bg-dashboard">
         <div className="row">
            <div class="col-md-1 pl-0">
               <ReactLeftNav/>
            </div>
            <div class="col-md-10">
   
    
               <CustomizeView/>
    
            </div>
         </div>
      
</div>
</div>
</div>
);
}
}
export default Customize;