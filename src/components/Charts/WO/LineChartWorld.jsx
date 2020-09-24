import React, {useState, useEffect} from 'react';
import {WorldTimeline} from '../../API/WO';
import {Line} from 'react-chartjs-2';


const LineCharts = () =>{

  const [fetchedWorldTimeline, setfetchedWorldTimeline] = useState([])
  useEffect(() => {
    const fetchAPI = async () =>{
      setfetchedWorldTimeline(await WorldTimeline());
    }

    fetchAPI();
  },[setfetchedWorldTimeline]);
 //console.log(fetchedWorldTimeline)


   const LineChart =(
    WorldTimeline
       ? (
           <Line 
           height='180vh'
           data={{
              // labels: DadosSPfetched.map(({ date }) => date).reverse(),
               labels: fetchedWorldTimeline.map(({last_update }) => last_update),
               datasets: [
                 {
                   data: fetchedWorldTimeline.map(({total_deaths }) => total_deaths),
                   label: 'Mortes',
                   borderColor: 'red',
                   backgroundColor: 'rgba(255, 0, 0, 0.5)',
                   fill: true,
                }, 
                {
                  data: fetchedWorldTimeline.map(({total_recovered }) => total_recovered),
                  label: 'Recuperados',
                  borderColor: '#2cde1f',
                  backgroundColor: 'rgba(99, 234, 97, 0.2)',
                  fill: true,
               }, 
                
                 {
                  data: fetchedWorldTimeline.map(({ total_cases}) => total_cases),
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
                    unitStepSize: 10,
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