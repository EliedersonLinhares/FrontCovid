import React, { useState, useEffect } from 'react';
import {GEData} from '../../API/WO';

import { Line } from 'react-chartjs-2';


const LineCharts = () => {

  const [GEDatafetched, setFetechedGEData] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedGEData(await GEData());
    }

    fetchAPI();
  }, [setFetechedGEData]);

  const LineChart = (
    GEData
      ? (
        <Line
        height='400vh'
          data={
            {// labels: DadosSPfetched.map(({ date }) => date).reverse(),
            labels: GEDatafetched.map(({ date }) => date),
            datasets: [
              {
                data: GEDatafetched.map(({ Cases}) => Cases),
                borderColor: '#3333ff',
                fill: false,
              },
              ],
            }
            
            
            }
          options={{
            elements: {
              point:{
                  radius: 0
              }
          },

            title: {
              fontSize: 15,
              fontColor: "white",
              display: true,
              text: 'Alemanha',
            },
            responsive: true,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: '#44475a',
                    offsetGridLines: true
                  },
                  display: true,
                  type: 'time',
                  time: {
                    tooltipFormat: 'DD/MM/YY',
                    unit: 'day',
                    unitStepSize: 5,
                    displayFormats: {
                      'day': 'DD/MM/YY'
                    }
                  },
                  ticks: {
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 4,
                    fontSize: 10,
                    fontColor: "white"
                  }
                }],
              yAxes: [
                {
                  gridLines: {
                    color: '#44475a'
                  },
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 4,
                    fontSize: 10,
                    fontColor: "white"
                  }
                }]
            },
            legend: {
              display: false,
            }
          }}
          tooltips={{
            callbacks: {
              label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var index = tooltipItem.index;
                return dataset.labels[index] + ': ' + dataset.data[index];
              }
            }
          }}
        />) : null

  );

  return (
    <div >
      {LineChart}
    </div>
  )
}
export default LineCharts;