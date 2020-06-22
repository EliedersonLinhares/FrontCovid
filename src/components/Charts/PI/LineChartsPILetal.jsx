import React, {useState, useEffect} from 'react';
import {DadosPIFull} from '../../API/PI';
import {Line} from 'react-chartjs-2';


const LineChartsPILetal= () =>{
 
  var arredonda = function(numero, casasDecimais) {
    casasDecimais = typeof casasDecimais !== 'undefined' ?  casasDecimais : 2;
    return +(Math.floor(numero + ('e+' + casasDecimais)) + ('e-' + casasDecimais));
  };


   const [DadosPIFullfetched, setFetechedPIFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPIFull(await DadosPIFull());
      }
 
      fetchAPI();
    },[setFetechedPIFull]);
    //console.log(DadosPIFullfetched)

   


    const LineChart =(
      
      DadosPIFull
        ? (
            <Line 
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPIFullfetched.map(({ date }) => date).reverse(),
                datasets: [
                  {
                    data: DadosPIFullfetched.map(({  last_available_death_rate}) =>  ((last_available_death_rate)*100).toFixed(2)).reverse(),
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
export default LineChartsPILetal;
/** 
 const LineChart =(
        DadosPI
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPIfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosPIfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosPIfetched.map(({ deaths }) => deaths).reverse(),
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