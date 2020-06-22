import React, { Component} from 'react';

//Total Infectados
import {DadosACConfirmed100k} from '../API/AC';
import {DadosALConfirmed100k} from '../API/AL';
import {DadosAMConfirmed100k} from '../API/AM';
import {DadosAPConfirmed100k} from '../API/AP';
import {DadosBAConfirmed100k} from '../API/BA';
import {DadosCEConfirmed100k} from '../API/CE';
import {DadosDFConfirmed100k} from '../API/DF';
import {DadosESConfirmed100k} from '../API/ES';
import {DadosGOConfirmed100k} from '../API/GO';
import {DadosMAConfirmed100k} from '../API/MA';
import {DadosMGConfirmed100k} from '../API/MG';
import {DadosMSConfirmed100k} from '../API/MS';
import {DadosMTConfirmed100k} from '../API/MT';
import {DadosPAConfirmed100k} from '../API/PA';
import {DadosPBConfirmed100k} from '../API/PB';
import {DadosPEConfirmed100k} from '../API/PE';
import {DadosPIConfirmed100k} from '../API/PI';
import {DadosPRConfirmed100k} from '../API/PR';
import {DadosRJConfirmed100k} from '../API/RJ';
import {DadosRNConfirmed100k} from '../API/RN';
import {DadosROConfirmed100k} from '../API/RO';
import {DadosRRConfirmed100k} from '../API/RR';
import {DadosRSConfirmed100k} from '../API/RS';
import {DadosSCConfirmed100k} from '../API/SC';
import {DadosSEConfirmed100k} from '../API/SE';
import {DadosSPConfirmed100k} from '../API/SP';
import {DadosTOConfirmed100k} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesConfirmed100k extends Component {
state = {
DadosACConfirmed100k:{},
DadosALConfirmed100k:{},
DadosAMConfirmed100k:{},
DadosAPConfirmed100k:{},
DadosBAConfirmed100k:{},
DadosCEConfirmed100k:{},
DadosDFConfirmed100k:{},
DadosESConfirmed100k:{},
DadosGOConfirmed100k:{},
DadosMAConfirmed100k:{},
DadosMGConfirmed100k:{},
DadosMSConfirmed100k:{},
DadosMTConfirmed100k:{},
DadosPAConfirmed100k:{},
DadosPBConfirmed100k:{},
DadosPEConfirmed100k:{},
DadosPIConfirmed100k:{},
DadosPRConfirmed100k:{},
DadosRJConfirmed100k:{},
DadosRNConfirmed100k:{},
DadosROConfirmed100k:{},
DadosRRConfirmed100k:{},
DadosRSConfirmed100k:{},
DadosSCConfirmed100k:{},
DadosSEConfirmed100k:{},
DadosSPConfirmed100k:{},
DadosTOConfirmed100k:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACConfirmed100k();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACConfirmed100k: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALConfirmed100k();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALConfirmed100k: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMConfirmed100k();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMConfirmed100k: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPConfirmed100k();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPConfirmed100k: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBAConfirmed100k();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBAConfirmed100k: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCEConfirmed100k();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCEConfirmed100k: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFConfirmed100k();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFConfirmed100k: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESConfirmed100k();
    //console.log(fetchedInfectedES);
    this.setState({DadosESConfirmed100k: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGOConfirmed100k();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGOConfirmed100k: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMAConfirmed100k();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMAConfirmed100k: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGConfirmed100k();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGConfirmed100k: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSConfirmed100k();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSConfirmed100k: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTConfirmed100k();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTConfirmed100k: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPAConfirmed100k();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPAConfirmed100k: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBConfirmed100k();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBConfirmed100k: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPEConfirmed100k();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPEConfirmed100k: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPIConfirmed100k();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPIConfirmed100k: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRConfirmed100k();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRConfirmed100k: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJConfirmed100k();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJConfirmed100k: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNConfirmed100k();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNConfirmed100k: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosROConfirmed100k();
    //console.log(fetchedInfectedRO);
    this.setState({DadosROConfirmed100k: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRConfirmed100k();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRConfirmed100k: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSConfirmed100k();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSConfirmed100k: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCConfirmed100k();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCConfirmed100k: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSEConfirmed100k();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSEConfirmed100k: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPConfirmed100k();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPConfirmed100k: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTOConfirmed100k();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTOConfirmed100k: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACConfirmed100k,
    DadosALConfirmed100k,
    DadosAMConfirmed100k,
    DadosAPConfirmed100k,
    DadosBAConfirmed100k,
    DadosCEConfirmed100k,
    DadosDFConfirmed100k,
    DadosESConfirmed100k,
    DadosGOConfirmed100k,
    DadosMAConfirmed100k,
    DadosMGConfirmed100k,
    DadosMSConfirmed100k,
    DadosMTConfirmed100k,
    DadosPAConfirmed100k,
    DadosPBConfirmed100k,
    DadosPEConfirmed100k,
    DadosPIConfirmed100k,
    DadosPRConfirmed100k,
    DadosRJConfirmed100k,
    DadosRNConfirmed100k,
    DadosROConfirmed100k,
    DadosRRConfirmed100k,
    DadosRSConfirmed100k,
    DadosSCConfirmed100k,
    DadosSEConfirmed100k,
    DadosSPConfirmed100k,
    DadosTOConfirmed100k, } = this.state

    let data = {
      States: [
        { State: "Acre",Confirmed100k:DadosACConfirmed100k},
        { State: "Alagoas",Confirmed100k:DadosALConfirmed100k},
        { State: "Amazonas",Confirmed100k: DadosAMConfirmed100k},
        { State: "Amapá", Confirmed100k:DadosAPConfirmed100k},
        { State: "Bahia",Confirmed100k: DadosBAConfirmed100k},
        { State: "Ceará",Confirmed100k: DadosCEConfirmed100k},
        { State: "Distrito Federal",Confirmed100k: DadosDFConfirmed100k},
        { State: "Espirito Santo",Confirmed100k: DadosESConfirmed100k},
        { State: "Goiás",Confirmed100k: DadosGOConfirmed100k},
        { State: "Maranhão",Confirmed100k: DadosMAConfirmed100k},
        { State: "Mato Grosso",Confirmed100k: DadosMTConfirmed100k},
        { State: "Mato Grosso do Sul",Confirmed100k: DadosMSConfirmed100k},
        { State: "Minas Gerais",Confirmed100k: DadosMGConfirmed100k},
        { State: "Paraná",Confirmed100k: DadosPRConfirmed100k},
        { State: "Paraíba",Confirmed100k: DadosPBConfirmed100k},
        { State: "Pará",Confirmed100k: DadosPAConfirmed100k},
        { State: "Pernambuco",Confirmed100k: DadosPEConfirmed100k},
        { State: "Piauí",Confirmed100k: DadosPIConfirmed100k},
        { State: "Rio Grande do Norte",Confirmed100k: DadosRNConfirmed100k},
        { State: "Rio Grande do Sul",Confirmed100k: DadosRSConfirmed100k},
        { State: "Rio de Janeiro",Confirmed100k: DadosRJConfirmed100k},
        { State: "Rondônia",Confirmed100k: DadosROConfirmed100k},
        { State: "Roraima",Confirmed100k: DadosRRConfirmed100k},
        { State: "Santa Catarina",Confirmed100k: DadosSCConfirmed100k},
        { State: "Sergipe",Confirmed100k: DadosSEConfirmed100k},
        { State: "São Paulo",Confirmed100k: DadosSPConfirmed100k},
        { State: "Tocantins",Confirmed100k: DadosTOConfirmed100k},
  
      ],
    };
    //console.log(data.States.map(({ Confirmed100k}) => Confirmed100k))
    var ordenação = data.States.sort(function(a, b){return a.Confirmed100k - b.Confirmed100k; }).reverse()

    return (
      <div>
        <HorizontalBar
       
       height='500vh'
        data={{
         labels:data.States.map(({ State}) => State) ,
        
         datasets: [
         {
          label: 'Confirmados',
          borderColor: '#b76df3',
          backgroundColor: 'rgba(183, 109, 243, 0.5)',
          data:data.States.map(({ Confirmed100k}) => ((Confirmed100k*1).toFixed(2))),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Confirmações por 100k habitantes',
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
export default HBarChartsStatesConfirmed100k;

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ Confirmed100k }) => Confirmed100k).reverse(),
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
      CountriesTotalConfirmed100k
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
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalConfirmed100k}) => TotalConfirmed100k).slice(0,15)) : null ,
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