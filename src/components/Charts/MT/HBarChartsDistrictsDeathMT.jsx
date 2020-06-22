import React, {useState, useEffect} from 'react';
import {DadosMTFullMunicipios} from '../../API/MT';
import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';


const HBarChartsDistrictsDeath = () =>{



   const [DadosMTFullMunicipiosfetched, setFetechedMTFullMunicipios] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedMTFullMunicipios(await DadosMTFullMunicipios());
      }
 
      fetchAPI();
    },[setFetechedMTFullMunicipios]);
    //console.log(DadosMTFullfetched)


    //Ordena o array vindo do json
    var ordenação = DadosMTFullMunicipiosfetched.sort(function(a, b){return a.last_available_deaths - b.last_available_deaths; }).reverse()
  
  

    const barChart =(
      DadosMTFullMunicipiosfetched
      ? (
        <HorizontalBar
       
        height='850vh'
         data={{
          labels:DadosMTFullMunicipiosfetched.map(({ city}) => city) ,
         
          datasets: [
          {
              label: 'Mortes',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              data:DadosMTFullMunicipiosfetched.map(({ last_available_deaths}) => last_available_deaths),
          }],
        
         }}
        
         options={{
          title:{
            fontSize: 15,
            fontColor: "white",
            display: true,
            text: 'Mortes por Municipio',
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
         
        />
      ) : null
  );

  return(
    <div > 
       {barChart}
      </div>
    )
}
export default HBarChartsDistrictsDeath;
/** 
 const LineChart =(
        DadosMT
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosMTfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosMTfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosMTfetched.map(({ deaths }) => deaths).reverse(),
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