import ApexCharts from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import * as ReactDOM from 'react-dom';

interface ApexChartProps { }

interface ApexChartState {
  series: number[];
  options: ApexCharts.ApexOptions;
}

class ApexChart extends React.Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Cricket'],
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
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<ApexChart />, domContainer);

export default ApexChart;
