import React, { Component} from 'react';

//Total Infectados
import {DadosACNewDeceased} from '../API/AC';
import {DadosALNewDeceased} from '../API/AL';
import {DadosAMNewDeceased} from '../API/AM';
import {DadosAPNewDeceased} from '../API/AP';
import {DadosBANewDeceased} from '../API/BA';
import {DadosCENewDeceased} from '../API/CE';
import {DadosDFNewDeceased} from '../API/DF';
import {DadosESNewDeceased} from '../API/ES';
import {DadosGONewDeceased} from '../API/GO';
import {DadosMANewDeceased} from '../API/MA';
import {DadosMGNewDeceased} from '../API/MG';
import {DadosMSNewDeceased} from '../API/MS';
import {DadosMTNewDeceased} from '../API/MT';
import {DadosPANewDeceased} from '../API/PA';
import {DadosPBNewDeceased} from '../API/PB';
import {DadosPENewDeceased} from '../API/PE';
import {DadosPINewDeceased} from '../API/PI';
import {DadosPRNewDeceased} from '../API/PR';
import {DadosRJNewDeceased} from '../API/RJ';
import {DadosRNNewDeceased} from '../API/RN';
import {DadosRONewDeceased} from '../API/RO';
import {DadosRRNewDeceased} from '../API/RR';
import {DadosRSNewDeceased} from '../API/RS';
import {DadosSCNewDeceased} from '../API/SC';
import {DadosSENewDeceased} from '../API/SE';
import {DadosSPNewDeceased} from '../API/SP';
import {DadosTONewDeceased} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesNewDeath extends Component {
state = {
DadosACNewDeceased:{},
DadosALNewDeceased:{},
DadosAMNewDeceased:{},
DadosAPNewDeceased:{},
DadosBANewDeceased:{},
DadosCENewDeceased:{},
DadosDFNewDeceased:{},
DadosESNewDeceased:{},
DadosGONewDeceased:{},
DadosMANewDeceased:{},
DadosMGNewDeceased:{},
DadosMSNewDeceased:{},
DadosMTNewDeceased:{},
DadosPANewDeceased:{},
DadosPBNewDeceased:{},
DadosPENewDeceased:{},
DadosPINewDeceased:{},
DadosPRNewDeceased:{},
DadosRJNewDeceased:{},
DadosRNNewDeceased:{},
DadosRONewDeceased:{},
DadosRRNewDeceased:{},
DadosRSNewDeceased:{},
DadosSCNewDeceased:{},
DadosSENewDeceased:{},
DadosSPNewDeceased:{},
DadosTONewDeceased:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACNewDeceased();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACNewDeceased: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALNewDeceased();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALNewDeceased: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMNewDeceased();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMNewDeceased: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPNewDeceased();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPNewDeceased: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBANewDeceased();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBANewDeceased: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCENewDeceased();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCENewDeceased: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFNewDeceased();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFNewDeceased: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESNewDeceased();
    //console.log(fetchedInfectedES);
    this.setState({DadosESNewDeceased: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGONewDeceased();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGONewDeceased: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMANewDeceased();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMANewDeceased: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGNewDeceased();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGNewDeceased: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSNewDeceased();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSNewDeceased: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTNewDeceased();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTNewDeceased: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPANewDeceased();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPANewDeceased: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBNewDeceased();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBNewDeceased: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPENewDeceased();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPENewDeceased: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPINewDeceased();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPINewDeceased: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRNewDeceased();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRNewDeceased: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJNewDeceased();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJNewDeceased: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNNewDeceased();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNNewDeceased: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosRONewDeceased();
    //console.log(fetchedInfectedRO);
    this.setState({DadosRONewDeceased: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRNewDeceased();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRNewDeceased: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSNewDeceased();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSNewDeceased: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCNewDeceased();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCNewDeceased: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSENewDeceased();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSENewDeceased: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPNewDeceased();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPNewDeceased: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTONewDeceased();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTONewDeceased: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACNewDeceased,
    DadosALNewDeceased,
    DadosAMNewDeceased,
    DadosAPNewDeceased,
    DadosBANewDeceased,
    DadosCENewDeceased,
    DadosDFNewDeceased,
    DadosESNewDeceased,
    DadosGONewDeceased,
    DadosMANewDeceased,
    DadosMGNewDeceased,
    DadosMSNewDeceased,
    DadosMTNewDeceased,
    DadosPANewDeceased,
    DadosPBNewDeceased,
    DadosPENewDeceased,
    DadosPINewDeceased,
    DadosPRNewDeceased,
    DadosRJNewDeceased,
    DadosRNNewDeceased,
    DadosRONewDeceased,
    DadosRRNewDeceased,
    DadosRSNewDeceased,
    DadosSCNewDeceased,
    DadosSENewDeceased,
    DadosSPNewDeceased,
    DadosTONewDeceased, } = this.state

    let data = {
      States: [
        { State: "Acre",NewDeceased:DadosACNewDeceased},
        { State: "Alagoas",NewDeceased:DadosALNewDeceased},
        { State: "Amazonas",NewDeceased: DadosAMNewDeceased},
        { State: "Amapá", NewDeceased:DadosAPNewDeceased},
        { State: "Bahia",NewDeceased: DadosBANewDeceased},
        { State: "Ceará",NewDeceased: DadosCENewDeceased},
        { State: "Distrito Federal",NewDeceased: DadosDFNewDeceased},
        { State: "Espirito Santo",NewDeceased: DadosESNewDeceased},
        { State: "Goiás",NewDeceased: DadosGONewDeceased},
        { State: "Maranhão",NewDeceased: DadosMANewDeceased},
        { State: "Mato Grosso",NewDeceased: DadosMTNewDeceased},
        { State: "Mato Grosso do Sul",NewDeceased: DadosMSNewDeceased},
        { State: "Minas Gerais",NewDeceased: DadosMGNewDeceased},
        { State: "Paraná",NewDeceased: DadosPRNewDeceased},
        { State: "Paraíba",NewDeceased: DadosPBNewDeceased},
        { State: "Pará",NewDeceased: DadosPANewDeceased},
        { State: "Pernambuco",NewDeceased: DadosPENewDeceased},
        { State: "Piauí",NewDeceased: DadosPINewDeceased},
        { State: "Rio Grande do Norte",NewDeceased: DadosRNNewDeceased},
        { State: "Rio Grande do Sul",NewDeceased: DadosRSNewDeceased},
        { State: "Rio de Janeiro",NewDeceased: DadosRJNewDeceased},
        { State: "Rondônia",NewDeceased: DadosRONewDeceased},
        { State: "Roraima",NewDeceased: DadosRRNewDeceased},
        { State: "Santa Catarina",NewDeceased: DadosSCNewDeceased},
        { State: "Sergipe",NewDeceased: DadosSENewDeceased},
        { State: "São Paulo",NewDeceased: DadosSPNewDeceased},
        { State: "Tocantins",NewDeceased: DadosTONewDeceased},
  
      ],
    };
    //console.log(data.States.map(({ NewDeceased}) => NewDeceased))
    var ordenação = data.States.sort(function(a, b){return a.NewDeceased - b.NewDeceased; }).reverse()

    return (
      <div>
        <HorizontalBar
       
       height='500vh'
        data={{
         labels:data.States.map(({ State}) => State) ,
        
         datasets: [
         {
          label: 'Confirmados',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          data:data.States.map(({ NewDeceased}) => NewDeceased),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Novas Mortes por Estado',
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
export default HBarChartsStatesNewDeath;

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ NewDeceased }) => NewDeceased).reverse(),
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
      CountriesTotalNewDeceased
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
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalNewDeceased}) => TotalNewDeceased).slice(0,15)) : null ,
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