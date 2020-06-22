import React, { useState, useEffect } from 'react';
import {DadosPIFull} from '../../API/PI';

import { Line } from 'react-chartjs-2';


const LineCharts = () => {

  const [DadosPIFullfetched, setFetechedPIFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPIFull(await DadosPIFull());
    }

    fetchAPI();
  }, [setFetechedPIFull]);

  const LineChart = (
    DadosPIFull
      ? (
        <Line
        height='400vh'
          data={
            {// labels: DadosSPfetched.map(({ date }) => date).reverse(),
            labels: DadosPIFullfetched.map(({ date }) => date).reverse(),
            datasets: [
              {
                data: DadosPIFullfetched.map(({ last_available_confirmed }) => last_available_confirmed).reverse(),
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
              text: 'Piauí',
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