
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import {ReactTable} from "react-table";
import '../index.css'; 
import '../style.css';



 
 
class LineChart extends React.Component{


/**
 * A simple line chart
 */
class LLineChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.chart = null;
    
    this.drawChart = this.drawChart.bind(this);
  }
  
  drawChart(ref) {
    const data = {
      labels: this.props.labels,
      series: this.props.data
    };
    
    this.chart = new Chartist.Line(ref, data);
  }
  
  render() {
    const chartClasses = 'ct-chart ct-perfect-fourth';
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{this.props.title}</h2>
        <div className={chartClasses} ref={(e) => {this.drawChart(e)}}></div>
      </div>
    );
  }
  
}

class WeatherItems extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      labels: ['Fri', 'Sat', 'Sun', 'Mon', 'Tues'],
      min: [10, 12, 14, 14, 14],
      max: [23, 23, 23, 22, 20],
      rainChance: [10, 70, 80, 80, 70]
    };
  }
  
  render() {
    return (
      <div style={{display: 'flex', }}>
        <LineChart 
          title="Min Temp" 
          labels={this.state.labels} 
          data={[this.state.min, this.state.max]} 
          style={{width: '100%'}} />
        
        <LineChart
          title="Rain"
          labels={this.state.labels}
          data={[this.state.rainChance]} />
      </div>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      d1: 5
    };
    
    this.decrease = this.decrease.bind(this);
  }
  
  decrease(e) {
    e.preventDefault();
    const d1 = this.state.d1;
    this.setState({d1: d1 - 1});
  }
  
  render() {
    return (
      <div>
        <rb.Navbar>
          <rb.Navbar.Brand>
            React Charts  
          </rb.Navbar.Brand>
        </rb.Navbar>
        
        <WeatherItems />
        
        <rb.Button className='buttonPadding' bsStyle="primary" onClick={this.decrease}>Val: {this.state.d1}</rb.Button>
        
        <LineChart labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} data={[[this.state.d1, 2, 4, 2, 0]]} />
      </div>
    );
  }
}

 export default LLineChart;
