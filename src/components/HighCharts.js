import React from "react";
import { render } from "react-dom";
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official'


import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module

class TestCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            redraw() {
              console.log("redraw");
            }
          }
        },
        series: [
          {
            data: [1, 2, 3]
          },
          {
            data: [1, 2, 3].reverse(),
            yAxis: 1
          },
          {
            data: [2, 2, 2],
            yAxis: 2
          }
        ],
        yAxis: [{}, {}, {}]
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        options: {
          series: [
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            },
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            },
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            }
          ]
        }
      });
    }, 1000);
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