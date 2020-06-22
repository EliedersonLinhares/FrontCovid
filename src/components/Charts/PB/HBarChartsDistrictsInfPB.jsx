import React, {useState, useEffect} from 'react';
import {DadosPBFullMunicipios} from '../../API/PB';
import {HorizontalBar,defaults} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';


const HBarChartsDistrictsInf = () =>{



   const [DadosPBFullMunicipiosfetched, setFetechedPBFullMunicipios] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPBFullMunicipios(await DadosPBFullMunicipios());
      }
 
      fetchAPI();
    },[setFetechedPBFullMunicipios]);
    //console.log(DadosPBFullfetched)


    //Ordena o array vindo do json
    var ordenação = DadosPBFullMunicipiosfetched.sort(function(a, b){return a.last_available_confirmed - b.last_available_confirmed; }).reverse()
  
  

    const barChart =(
      DadosPBFullMunicipiosfetched
      ? (
        <HorizontalBar
       
        height='2000vh'
         data={{
          labels:DadosPBFullMunicipiosfetched.map(({ city}) => city) ,
         
          datasets: [
          {
              label: 'Confirmados',
              borderColor: '#3333ff', 
              backgroundColor: 'rgba(30, 139, 195, 0.5)',
              data:DadosPBFullMunicipiosfetched.map(({ last_available_confirmed}) => last_available_confirmed),
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
        DadosPB
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosPBfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosPBfetched.map(({ confirmed }) => confirmed).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosPBfetched.map(({ deaths }) => deaths).reverse(),
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