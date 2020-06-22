import React, {useState, useEffect} from 'react';
import {DadosPEFull} from '../../API/PE';
import {Line} from 'react-chartjs-2';


const LineChartsPEConfRate = () =>{



   const [DadosPEFullfetched, setFetechedPEFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPEFull(await DadosPEFull());
      }
 
      fetchAPI();
    },[setFetechedPEFull]);
    //console.log(DadosPEFullfetched)

   


    const LineChart =(
      DadosPEFull
        ? (
            <Line 
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPEFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosPEFullfetched.map(({  last_available_confirmed_per_100k_inhabitants}) =>  (last_available_confirmed_per_100k_inhabitants).toFixed(2)).reverse(),
                    label: 'Confirmações por 100mil habitantes',
                    borderColor: '#b76df3',
                    backgroundColor: 'rgba(183, 109, 243, 0.2)',
                    fill: true,
                 }, 
                
               ],
            }}
            options={{ 

             
            
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
                      'day': 'DD/MM/YY'
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
export default LineChartsPEConfRate;
/** 
 const LineChart =(
        DadosPE
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPEfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosPEfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosPEfetched.map(({ deaths }) => deaths).reverse(),
                    label: 'Mortes',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                 }, 
               ],
            }}
            options={{ 

              lineHeightAnnotation: {
                color: "#3333ff",
                shadow: true
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
                      'day': 'DD/MM/YY'
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
*/