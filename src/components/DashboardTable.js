import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import {ReactTable} from "react-table";
import '../index.css'; 
import '../style.css';



 
 
class DashboardTable extends React.Component{
  componentWillMount(){
    this.arr=[
      {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      },
       {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      },
     {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      },
     {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      },
         {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      },
         {"Date":"29.05.2020",
       "Temperature":"29F",
       "Humidity": "76%",
       "Rainfall":"12mm",
       "SpeedofWind":"25km/h"
      }
    ];
   this.tempArr= this.arr.map(function(obj){
     return (<tr className="text-center">
       <td>{obj.Date}</td><td>{obj.Temperature}</td><td>{obj.Humidity}</td><td>{obj.Rainfall}</td> <td>{obj.SpeedofWind}</td>
       </tr>
     )
   })
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
              <td><b>Date</b></td>
              <td><b>Temperature</b></td>
              <td><b>Humidity</b></td>
              <td><b>Rainfalls</b></td>
              <td><b>Speed of Wind</b></td>
        
          
          </tr>
        </thead>
        
         <tbody>
           {this.tempArr}
        </tbody>
        </table>
    );
  }
}

export default DashboardTable;

 











