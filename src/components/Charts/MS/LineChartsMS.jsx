import React, {useState, useEffect} from 'react';
import {DadosMSFull} from '../../API/MS';
import {Line} from 'react-chartjs-2';


const LineCharts = () =>{



   const [DadosMSFullfetched, setFetechedMSFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedMSFull(await DadosMSFull());
      }
 
      fetchAPI();
    },[setFetechedMSFull]);
    //console.log(DadosMSFullfetched)

   


    const LineChart =(
        DadosMSFull
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosMSFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosMSFullfetched.map(({ last_available_deaths }) => last_available_deaths).reverse(),
                    label: 'Mortes',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                 }, 
                  
                  {
                   data: DadosMSFullfetched.map(({ last_available_confirmed}) => last_available_confirmed).reverse(),
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
export default LineCharts;
/** 
 const LineChart =(
        DadosMS
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosMSfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosMSfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosMSfetched.map(({ deaths }) => deaths).reverse(),
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