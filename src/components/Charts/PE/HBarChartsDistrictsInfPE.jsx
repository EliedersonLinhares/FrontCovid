import React, {useState, useEffect} from 'react';
import {DadosPEFullMunicipios} from '../../API/PE';
import {HorizontalBar,defaults} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';


const HBarChartsDistrictsInf = () =>{



   const [DadosPEFullMunicipiosfetched, setFetechedPEFullMunicipios] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPEFullMunicipios(await DadosPEFullMunicipios());
      }
 
      fetchAPI();
    },[setFetechedPEFullMunicipios]);
    //console.log(DadosPEFullfetched)


    //Ordena o array vindo do json
    var ordenação = DadosPEFullMunicipiosfetched.sort(function(a, b){return a.last_available_confirmed - b.last_available_confirmed; }).reverse()
  
  

    const barChart =(
      DadosPEFullMunicipiosfetched
      ? (
        <HorizontalBar
       
        height='2000vh'
         data={{
          labels:DadosPEFullMunicipiosfetched.map(({ city}) => city) ,
         
          datasets: [
          {
              label: 'Confirmados',
              borderColor: '#3333ff', 
              backgroundColor: 'rgba(30, 139, 195, 0.5)',
              data:DadosPEFullMunicipiosfetched.map(({ last_available_confirmed}) => last_available_confirmed),
          }],
        
         }}
        
         options={{
          title:{
            fontSize: 15,
            fontColor: "white",
            display: true,
            text: 'Casos confirmados por Municipio',
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
export default HBarChartsDistrictsInf;
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