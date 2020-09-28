  import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.min.js";
import HighchartsReact from "highcharts-react-official";

import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module


class TestCharts extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      options: {
           chart: {
            
            type: 'spline'
                  },
          title: {
            text: 'Rainfalls'
        },
          
        series: [{
            data: [50, 200, 80, 25, 20]
          }],
          xAxis: {
            categories: ['0', '6', '12', '18', '24'],
              title: {
               
                text: 'Last 24 hours(h)'
            },  
        },
           yAxis: {
            categories: ['0','50', '100', '150', '200', '250'],
               title: {
                margin: 10,
                text: 'Rainfalls(mm)'
            }
        
        },
          
          
      }
        
        
        
        
        
        
        
        
        
        
        
        
    };
  }

  render() {
    return (
      <HighchartsReact
        constructorType={"chart"}
        ref={this.chartComponent}
        highcharts={Highcharts}
        options={this.state.options}
      />
    );
  }
}



export default TestCharts;