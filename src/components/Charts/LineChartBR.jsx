import React, {useState, useEffect} from 'react';
import {BRData} from '../API';
import {Line} from 'react-chartjs-2';


const LineCharts = () =>{



  const [fetchedCountryBR, setfetchedCountryBR] = useState([])
  useEffect(() => {
    const fetchAPI = async () =>{
      setfetchedCountryBR(await BRData());
    }

    fetchAPI();
  },[setfetchedCountryBR]);
 // console.log(fetchedCountryBR)

  


   const LineChart =(
      BRData
       ? (
           <Line 
           height='180vh'
           data={{
              // labels: DadosSPfetched.map(({ date }) => date).reverse(),
               labels: fetchedCountryBR.map(({ Date }) => Date),
               datasets: [
                 {
                   data: fetchedCountryBR.map(({Deaths }) => Deaths),
                   label: 'Mortes',
                   borderColor: 'red',
                   backgroundColor: 'rgba(255, 0, 0, 0.5)',
                   fill: true,
                }, 
                {
                  data: fetchedCountryBR.map(({Recovered }) => Recovered),
                  label: 'Recuperados',
                  borderColor: '#2cde1f',
                  backgroundColor: 'rgba(99, 234, 97, 0.2)',
                  fill: true,
               }, 
                
                 {
                  data: fetchedCountryBR.map(({ Confirmed}) => Confirmed),
                  label: 'Confirmados',
                  borderColor: '#3333ff', 
                  backgroundColor: 'rgba(30, 139, 195, 0.2)',
                  fill: true,
               }, 
               
              ],
           }}
           options={{ 

            
             title:{
               fontSize: 15,
               fontColor: "white",
               display: true,
               text: 'Casos confirmados/mortes acumulados',
              },
             responsive: true,
             scales:{
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
                      'day': 'DD/MM'
                    }},
                  ticks: {
       
                    fontColor: "white"}
                }],
              yAxes: [
                  {
                    gridLines: {
                      color: '#44475a'
                  },
                  display: true,
                
               
           
                  ticks: {
                    fontColor: "white"}
                  }]
               },
             
             
               legend: {
                 display: true,
                 labels: {
                  fontColor: "white",
                  
              }}
           }}
           />) : null
   
   );

   return(
     <div > 
        {LineChart}
       </div>
     )
}
export default LineCharts;