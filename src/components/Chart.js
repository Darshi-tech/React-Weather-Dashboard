import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends React.Component {
     render() {
 const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: ""
			},
			axisY: {
				title: "( in Celsius )",
				includeZero: false,
			},
			data: [
			{
				type: "area",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.## Celsius",
				dataPoints: [
					
					{ x: new Date(2014, 0), y: 800},
					{ x: new Date(2013, 0), y: 600},
					{ x: new Date(2012, 0), y: 400},
					{ x: new Date(2011, 0), y: 200}
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
  






export default Chart;
