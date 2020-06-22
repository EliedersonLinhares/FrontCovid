import React, {useState, useEffect} from 'react';
import {DadosTOFull} from '../../API/TO';
import {Line} from 'react-chartjs-2';


const LineChartsTOConfRate = () =>{



   const [DadosTOFullfetched, setFetechedTOFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedTOFull(await DadosTOFull());
      }
 
      fetchAPI();
    },[setFetechedTOFull]);
    //console.log(DadosTOFullfetched)

   


    const LineChart =(
      DadosTOFull
        ? (
            <Line 
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosTOFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosTOFullfetched.map(({  last_available_confirmed_per_100k_inhabitants}) =>  (last_available_confirmed_per_100k_inhabitants).toFixed(2)).reverse(),
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
export default LineChartsTOConfRate;
/** 
 const LineChart =(
        DadosTO
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosTOfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosTOfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosTOfetched.map(({ deaths }) => deaths).reverse(),
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