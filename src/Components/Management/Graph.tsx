import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import { color } from '@/Styles';

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
            speed: 1200,
            animateGradually: {
              enabled: true,
              delay: 200,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
          offsetX: 0,
          offsetY: 0
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%',
            },
            dataLabels: {
              show: true,
              name: {
                fontSize: '32px',
                fontFamily: "Pretendard-Medium",
                color: color.black
              },
              value: {
                fontSize: '20px',
                color: color.gray[500],
                offsetY: 5
              },
            },
          },
        },
        labels: props.labels || ['Cricket'],
        colors: [`${color.blue[300]}`],
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      },
    };
  }

  componentDidUpdate(prevProps: ApexChartProps) {
    if (prevProps.series !== this.props.series) {
      this.updateSeries(this.props.series || [0]);
      this.setState(
        { series: this.props.series || [0] },
        () => {
          ApexCharts.exec('radialBar', 'updateSeries', this.state.series);
        }
      );
    }
  }

  animateSeries = (newSeries: number[]) => {
    const totalSteps = 100
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= totalSteps) {
        clearInterval(interval);
      } else {
        const intermediateValue = (newSeries[0] * currentStep) / totalSteps;
        ApexCharts.exec('radialBar', 'updateSeries', [intermediateValue]);
        currentStep++;
      }
    }, 10);
  };

  updateSeries = (newSeries: number[]) => {
    this.animateSeries(newSeries);
  };

  componentDidMount() {
    this.updateSeries(this.state.series);
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={180}
        />
      </div>
    );
  }
}

export default ApexChart;
