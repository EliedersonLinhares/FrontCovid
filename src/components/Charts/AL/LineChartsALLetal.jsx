import React, {useState, useEffect} from 'react';
import {DadosALFull} from '../../API/AL';
import {Line} from 'react-chartjs-2';


const LineChartsALLetal= () =>{
 
  var arredonda = function(numero, casasDecimais) {
    casasDecimais = typeof casasDecimais !== 'undefined' ?  casasDecimais : 2;
    return +(Math.floor(numero + ('e+' + casasDecimais)) + ('e-' + casasDecimais));
  };


   const [DadosALFullfetched, setFetechedALFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedALFull(await DadosALFull());
      }
 
      fetchAPI();
    },[setFetechedALFull]);
    //console.log(DadosALFullfetched)

   


    const LineChart =(
      
      DadosALFull
        ? (
            <Line 
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosALFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosALFullfetched.map(({  last_available_death_rate}) =>  ((last_available_death_rate)*100).toFixed(2)).reverse(),
                    label: 'Letalitade',
                    borderColor: '#f67b55',
                    backgroundColor: 'rgba(246, 123, 85, 0.2)',
                    fill: true,
                 }, 
                
               ],
            }}
            options={{ 

              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems) { 
                        return tooltipItems.yLabel + ' %';
                    }
                }
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
                    fontColor: "white"
                    }
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
export default LineChartsALLetal;
/** 
 const LineChart =(
        DadosAL
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosALfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosALfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosALfetched.map(({ deaths }) => deaths).reverse(),
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