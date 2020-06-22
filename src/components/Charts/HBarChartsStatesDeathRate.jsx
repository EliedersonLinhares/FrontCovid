import React, { Component} from 'react';

//Total Infectados
import {DadosACDeathRate} from '../API/AC';
import {DadosALDeathRate} from '../API/AL';
import {DadosAMDeathRate} from '../API/AM';
import {DadosAPDeathRate} from '../API/AP';
import {DadosBADeathRate} from '../API/BA';
import {DadosCEDeathRate} from '../API/CE';
import {DadosDFDeathRate} from '../API/DF';
import {DadosESDeathRate} from '../API/ES';
import {DadosGODeathRate} from '../API/GO';
import {DadosMADeathRate} from '../API/MA';
import {DadosMGDeathRate} from '../API/MG';
import {DadosMSDeathRate} from '../API/MS';
import {DadosMTDeathRate} from '../API/MT';
import {DadosPADeathRate} from '../API/PA';
import {DadosPBDeathRate} from '../API/PB';
import {DadosPEDeathRate} from '../API/PE';
import {DadosPIDeathRate} from '../API/PI';
import {DadosPRDeathRate} from '../API/PR';
import {DadosRJDeathRate} from '../API/RJ';
import {DadosRNDeathRate} from '../API/RN';
import {DadosRODeathRate} from '../API/RO';
import {DadosRRDeathRate} from '../API/RR';
import {DadosRSDeathRate} from '../API/RS';
import {DadosSCDeathRate} from '../API/SC';
import {DadosSEDeathRate} from '../API/SE';
import {DadosSPDeathRate} from '../API/SP';
import {DadosTODeathRate} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesDeathRate extends Component {
state = {
DadosACDeathRate:{},
DadosALDeathRate:{},
DadosAMDeathRate:{},
DadosAPDeathRate:{},
DadosBADeathRate:{},
DadosCEDeathRate:{},
DadosDFDeathRate:{},
DadosESDeathRate:{},
DadosGODeathRate:{},
DadosMADeathRate:{},
DadosMGDeathRate:{},
DadosMSDeathRate:{},
DadosMTDeathRate:{},
DadosPADeathRate:{},
DadosPBDeathRate:{},
DadosPEDeathRate:{},
DadosPIDeathRate:{},
DadosPRDeathRate:{},
DadosRJDeathRate:{},
DadosRNDeathRate:{},
DadosRODeathRate:{},
DadosRRDeathRate:{},
DadosRSDeathRate:{},
DadosSCDeathRate:{},
DadosSEDeathRate:{},
DadosSPDeathRate:{},
DadosTODeathRate:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACDeathRate();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACDeathRate: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALDeathRate();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALDeathRate: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMDeathRate();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMDeathRate: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPDeathRate();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPDeathRate: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBADeathRate();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBADeathRate: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCEDeathRate();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCEDeathRate: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFDeathRate();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFDeathRate: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESDeathRate();
    //console.log(fetchedInfectedES);
    this.setState({DadosESDeathRate: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGODeathRate();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGODeathRate: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMADeathRate();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMADeathRate: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGDeathRate();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGDeathRate: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSDeathRate();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSDeathRate: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTDeathRate();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTDeathRate: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPADeathRate();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPADeathRate: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBDeathRate();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBDeathRate: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPEDeathRate();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPEDeathRate: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPIDeathRate();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPIDeathRate: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRDeathRate();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRDeathRate: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJDeathRate();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJDeathRate: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNDeathRate();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNDeathRate: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosRODeathRate();
    //console.log(fetchedInfectedRO);
    this.setState({DadosRODeathRate: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRDeathRate();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRDeathRate: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSDeathRate();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSDeathRate: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCDeathRate();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCDeathRate: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSEDeathRate();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSEDeathRate: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPDeathRate();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPDeathRate: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTODeathRate();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTODeathRate: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACDeathRate,
    DadosALDeathRate,
    DadosAMDeathRate,
    DadosAPDeathRate,
    DadosBADeathRate,
    DadosCEDeathRate,
    DadosDFDeathRate,
    DadosESDeathRate,
    DadosGODeathRate,
    DadosMADeathRate,
    DadosMGDeathRate,
    DadosMSDeathRate,
    DadosMTDeathRate,
    DadosPADeathRate,
    DadosPBDeathRate,
    DadosPEDeathRate,
    DadosPIDeathRate,
    DadosPRDeathRate,
    DadosRJDeathRate,
    DadosRNDeathRate,
    DadosRODeathRate,
    DadosRRDeathRate,
    DadosRSDeathRate,
    DadosSCDeathRate,
    DadosSEDeathRate,
    DadosSPDeathRate,
    DadosTODeathRate, } = this.state

    let data = {
      States: [
        { State: "Acre",DeathRate:(DadosACDeathRate)},
        { State: "Alagoas",DeathRate:DadosALDeathRate},
        { State: "Amazonas",DeathRate: DadosAMDeathRate},
        { State: "Amapá", DeathRate:DadosAPDeathRate},
        { State: "Bahia",DeathRate: DadosBADeathRate},
        { State: "Ceará",DeathRate: DadosCEDeathRate},
        { State: "Distrito Federal",DeathRate: DadosDFDeathRate},
        { State: "Espirito Santo",DeathRate: DadosESDeathRate},
        { State: "Goiás",DeathRate: DadosGODeathRate},
        { State: "Maranhão",DeathRate: DadosMADeathRate},
        { State: "Mato Grosso",DeathRate: DadosMTDeathRate},
        { State: "Mato Grosso do Sul",DeathRate: DadosMSDeathRate},
        { State: "Minas Gerais",DeathRate: DadosMGDeathRate},
        { State: "Paraná",DeathRate: DadosPRDeathRate},
        { State: "Paraíba",DeathRate: DadosPBDeathRate},
        { State: "Pará",DeathRate: DadosPADeathRate},
        { State: "Pernambuco",DeathRate: DadosPEDeathRate},
        { State: "Piauí",DeathRate: DadosPIDeathRate},
        { State: "Rio Grande do Norte",DeathRate: DadosRNDeathRate},
        { State: "Rio Grande do Sul",DeathRate: DadosRSDeathRate},
        { State: "Rio de Janeiro",DeathRate: DadosRJDeathRate},
        { State: "Rondônia",DeathRate: DadosRODeathRate},
        { State: "Roraima",DeathRate: DadosRRDeathRate},
        { State: "Santa Catarina",DeathRate: DadosSCDeathRate},
        { State: "Sergipe",DeathRate: DadosSEDeathRate},
        { State: "São Paulo",DeathRate: DadosSPDeathRate},
        { State: "Tocantins",DeathRate: DadosTODeathRate},
  
      ],
    };
    function formatter(arr) {
      for (var m = 0, res = []; m < arr.length; m++) {
        var arrayElement = data.States[m];
        console.log("original element is " + arrayElement);
        if (!isNaN(arrayElement)) {
          res.push(arrayElement.toFixed(3))
        } else {
          if (arrayElement === "-") {
            res.push(".000")
          }
        }
      }
      return res
    }
    
  
    //console.log(data.States.map(({ DeathRate}) => DeathRate))
    var ordenação = data.States.sort(function(a, b){return a.DeathRate - b.DeathRate; }).reverse()

    return (
      <div>
        <HorizontalBar
       
       height='500vh'
        data={{
         labels:data.States.map(({ State}) => State) ,
        
         datasets: [
         {
          label: 'Confirmados',
          borderColor: '#f67b55',
          backgroundColor: 'rgba(246, 123, 85, 0.5)',
          data:data.States.map(({ DeathRate}) =>  ((DeathRate*100).toFixed(2))),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Letalidade por Estado',
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
                 fontColor: "white",
                
                }

               }]
            },
          
          
            legend: {
              display: false,
            }
        }}
        
       />
     ) : null
 );
      </div>
    );
  }
}
export default HBarChartsStatesDeathRate;

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ DeathRate }) => DeathRate).reverse(),
                   label: 'Confirmados',
                   borderColor: '#3333ff', 
                   backgroundColor: 'rgba(255, 0, 0.5, 0)',
                   fill: true,
                }, 
                {
                    data: DadosRJfetched.map(({ deaths }) => deaths).reverse(),
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
/**
 const barChart =(
      CountriesTotalDeathRate
      ? (
        <HorizontalBar
       
        height='500vh'
         data={{
          labels:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ Country}) => Country).slice(0,15)) : null ,
         
          datasets: [
          {
              label: 'Confirmados',
              borderColor: '#3333ff', 
              backgroundColor: 'rgba(30, 139, 195, 0.5)',
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalDeathRate}) => TotalDeathRate).slice(0,15)) : null ,
          }],
        
         }}
        
         options={{
          title:{
            fontSize: 15,
            fontColor: "white",
            display: true,
            text: 'Total de Casos por país',
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

 */