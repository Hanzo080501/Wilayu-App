import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      height: 350,
    },
    labels: ['Desktop', 'Mobile', 'Tablet', 'Laptop'],
    colors: ['#4ADE80', '#FB923C', '#FECDD3', '#FECDD3'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontWeight: 600,
      markers: {
        radius: 50,
      },
    },
    dataLabels: {
      style: {
        colors: ['#dddddd'],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div className="flex items-center justify-center p-5 py-6 bg-white rounded-lg dark:bg-gray-600">
      <Chart options={options} series={options.series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;
