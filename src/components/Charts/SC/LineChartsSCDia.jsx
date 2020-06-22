import React, {useState, useEffect} from 'react';
import {DadosSCFull} from '../../API/SC';
import {Line} from 'react-chartjs-2';


const LineCharts = () =>{



   const [DadosSCFullfetched, setFetechedSCFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedSCFull(await DadosSCFull());
      }
 
      fetchAPI();
    },[setFetechedSCFull]);
    //console.log(DadosSCFullfetched)

   


    const LineChart =(
      DadosSCFull
        ? (
            <Line 
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosSCFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosSCFullfetched.map(({ new_deaths}) => new_deaths).reverse(),
                    label: 'Mortes',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                 }, 
                  
                  {
                   data: DadosSCFullfetched.map(({ new_confirmed}) =>  new_confirmed).reverse(),
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
                text: 'Casos confirmados/mortes por dia',
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
        DadosSC
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosSCfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosSCfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosSCfetched.map(({ deaths }) => deaths).reverse(),
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