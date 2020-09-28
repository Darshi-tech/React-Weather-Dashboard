import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
  chart: {
    type: "solidgauge",
    height: "90.5%"
  },

  title: {
    text: "Humidity",
    style: {
      fontSize: "16px",
      color: "#194a72"
    }
  },

  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,

    style: {
      fontSize: "12px",
      display:"block"
    },
    valueSuffix: "%",
    pointFormat:
      '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
    positioner: function(labelWidth) {
      return {
        x: (this.chart.chartWidth - labelWidth) / 2,
        y: this.chart.plotHeight -30 
      };
    }
      
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Move
        outerRadius: "112%",
        innerRadius: "88%",
        backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }
    ]
  },

  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: []
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: true
      },
      linecap: "round",
      stickyTracking: false,
      rounded: false
    }
  },

  series: [
    {
      name: "humidity",
      type: "solidgauge",
      data: [
        {
          color: "#194a72",
          radius: "112%",
         innerRadius: "88%",
          y: 20,
        
        }
      ]
    }
  ]
};

class PieCharts extends React.Component {
  render() {
    return (
      <div>
       
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref="chartComponent1"
        />
      </div>
    );
  }
}



export default PieCharts;