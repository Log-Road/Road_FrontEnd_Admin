import ApexCharts from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import * as ReactDOM from 'react-dom';
import { color } from '@/Styles';
import styled from 'styled-components';

interface ApexChartProps {
  series?: number[];
  labels?: string[];
}

interface ApexChartState {
  series: number[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: props.series || [0],
      options: {
        chart: {
          width: 100,
          height: 100,
          type: 'radialBar',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },

        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%',
            },
          },
        },
        labels: props.labels || ['Cricket'],
        colors: [`${color.blue[300]}`],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={180}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<ApexChart series={[]} labels={[]} />, domContainer);

export default ApexChart;