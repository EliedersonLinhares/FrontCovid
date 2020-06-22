import React, {useState, useEffect} from 'react';
import {DadosPRFullMunicipios} from '../../API/PR';
import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';


const HBarChartsDistrictsDeath = () =>{



   const [DadosPRFullMunicipiosfetched, setFetechedPRFullMunicipios] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPRFullMunicipios(await DadosPRFullMunicipios());
      }
 
      fetchAPI();
    },[setFetechedPRFullMunicipios]);
    //console.log(DadosPRFullfetched)


    //Ordena o array vindo do json
    var ordenação = DadosPRFullMunicipiosfetched.sort(function(a, b){return a.last_available_deaths - b.last_available_deaths; }).reverse()
  
  

    const barChart =(
      DadosPRFullMunicipiosfetched
      ? (
        <HorizontalBar
       
        height='2500vh'
         data={{
          labels:DadosPRFullMunicipiosfetched.map(({ city}) => city) ,
         
          datasets: [
          {
              label: 'Mortes',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              data:DadosPRFullMunicipiosfetched.map(({ last_available_deaths}) => last_available_deaths),
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
        DadosPR
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPRfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosPRfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosPRfetched.map(({ deaths }) => deaths).reverse(),
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