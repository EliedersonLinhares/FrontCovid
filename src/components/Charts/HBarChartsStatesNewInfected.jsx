import React, { Component} from 'react';

//Total Infectados
import {DadosACNewConfirmed} from '../API/AC';
import {DadosALNewConfirmed} from '../API/AL';
import {DadosAMNewConfirmed} from '../API/AM';
import {DadosAPNewConfirmed} from '../API/AP';
import {DadosBANewConfirmed} from '../API/BA';
import {DadosCENewConfirmed} from '../API/CE';
import {DadosDFNewConfirmed} from '../API/DF';
import {DadosESNewConfirmed} from '../API/ES';
import {DadosGONewConfirmed} from '../API/GO';
import {DadosMANewConfirmed} from '../API/MA';
import {DadosMGNewConfirmed} from '../API/MG';
import {DadosMSNewConfirmed} from '../API/MS';
import {DadosMTNewConfirmed} from '../API/MT';
import {DadosPANewConfirmed} from '../API/PA';
import {DadosPBNewConfirmed} from '../API/PB';
import {DadosPENewConfirmed} from '../API/PE';
import {DadosPINewConfirmed} from '../API/PI';
import {DadosPRNewConfirmed} from '../API/PR';
import {DadosRJNewConfirmed} from '../API/RJ';
import {DadosRNNewConfirmed} from '../API/RN';
import {DadosRONewConfirmed} from '../API/RO';
import {DadosRRNewConfirmed} from '../API/RR';
import {DadosRSNewConfirmed} from '../API/RS';
import {DadosSCNewConfirmed} from '../API/SC';
import {DadosSENewConfirmed} from '../API/SE';
import {DadosSPNewConfirmed} from '../API/SP';
import {DadosTONewConfirmed} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesNewInfected extends Component {
state = {
DadosACNewConfirmed:{},
DadosALNewConfirmed:{},
DadosAMNewConfirmed:{},
DadosAPNewConfirmed:{},
DadosBANewConfirmed:{},
DadosCENewConfirmed:{},
DadosDFNewConfirmed:{},
DadosESNewConfirmed:{},
DadosGONewConfirmed:{},
DadosMANewConfirmed:{},
DadosMGNewConfirmed:{},
DadosMSNewConfirmed:{},
DadosMTNewConfirmed:{},
DadosPANewConfirmed:{},
DadosPBNewConfirmed:{},
DadosPENewConfirmed:{},
DadosPINewConfirmed:{},
DadosPRNewConfirmed:{},
DadosRJNewConfirmed:{},
DadosRNNewConfirmed:{},
DadosRONewConfirmed:{},
DadosRRNewConfirmed:{},
DadosRSNewConfirmed:{},
DadosSCNewConfirmed:{},
DadosSENewConfirmed:{},
DadosSPNewConfirmed:{},
DadosTONewConfirmed:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACNewConfirmed();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACNewConfirmed: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALNewConfirmed();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALNewConfirmed: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMNewConfirmed();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMNewConfirmed: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPNewConfirmed();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPNewConfirmed: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBANewConfirmed();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBANewConfirmed: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCENewConfirmed();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCENewConfirmed: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFNewConfirmed();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFNewConfirmed: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESNewConfirmed();
    //console.log(fetchedInfectedES);
    this.setState({DadosESNewConfirmed: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGONewConfirmed();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGONewConfirmed: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMANewConfirmed();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMANewConfirmed: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGNewConfirmed();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGNewConfirmed: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSNewConfirmed();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSNewConfirmed: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTNewConfirmed();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTNewConfirmed: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPANewConfirmed();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPANewConfirmed: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBNewConfirmed();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBNewConfirmed: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPENewConfirmed();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPENewConfirmed: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPINewConfirmed();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPINewConfirmed: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRNewConfirmed();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRNewConfirmed: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJNewConfirmed();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJNewConfirmed: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNNewConfirmed();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNNewConfirmed: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosRONewConfirmed();
    //console.log(fetchedInfectedRO);
    this.setState({DadosRONewConfirmed: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRNewConfirmed();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRNewConfirmed: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSNewConfirmed();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSNewConfirmed: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCNewConfirmed();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCNewConfirmed: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSENewConfirmed();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSENewConfirmed: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPNewConfirmed();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPNewConfirmed: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTONewConfirmed();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTONewConfirmed: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACNewConfirmed,
    DadosALNewConfirmed,
    DadosAMNewConfirmed,
    DadosAPNewConfirmed,
    DadosBANewConfirmed,
    DadosCENewConfirmed,
    DadosDFNewConfirmed,
    DadosESNewConfirmed,
    DadosGONewConfirmed,
    DadosMANewConfirmed,
    DadosMGNewConfirmed,
    DadosMSNewConfirmed,
    DadosMTNewConfirmed,
    DadosPANewConfirmed,
    DadosPBNewConfirmed,
    DadosPENewConfirmed,
    DadosPINewConfirmed,
    DadosPRNewConfirmed,
    DadosRJNewConfirmed,
    DadosRNNewConfirmed,
    DadosRONewConfirmed,
    DadosRRNewConfirmed,
    DadosRSNewConfirmed,
    DadosSCNewConfirmed,
    DadosSENewConfirmed,
    DadosSPNewConfirmed,
    DadosTONewConfirmed, } = this.state

    let data = {
      States: [
        { State: "Acre",NewConfirmed:DadosACNewConfirmed},
        { State: "Alagoas",NewConfirmed:DadosALNewConfirmed},
        { State: "Amazonas",NewConfirmed: DadosAMNewConfirmed},
        { State: "Amapá", NewConfirmed:DadosAPNewConfirmed},
        { State: "Bahia",NewConfirmed: DadosBANewConfirmed},
        { State: "Ceará",NewConfirmed: DadosCENewConfirmed},
        { State: "Distrito Federal",NewConfirmed: DadosDFNewConfirmed},
        { State: "Espirito Santo",NewConfirmed: DadosESNewConfirmed},
        { State: "Goiás",NewConfirmed: DadosGONewConfirmed},
        { State: "Maranhão",NewConfirmed: DadosMANewConfirmed},
        { State: "Mato Grosso",NewConfirmed: DadosMTNewConfirmed},
        { State: "Mato Grosso do Sul",NewConfirmed: DadosMSNewConfirmed},
        { State: "Minas Gerais",NewConfirmed: DadosMGNewConfirmed},
        { State: "Paraná",NewConfirmed: DadosPRNewConfirmed},
        { State: "Paraíba",NewConfirmed: DadosPBNewConfirmed},
        { State: "Pará",NewConfirmed: DadosPANewConfirmed},
        { State: "Pernambuco",NewConfirmed: DadosPENewConfirmed},
        { State: "Piauí",NewConfirmed: DadosPINewConfirmed},
        { State: "Rio Grande do Norte",NewConfirmed: DadosRNNewConfirmed},
        { State: "Rio Grande do Sul",NewConfirmed: DadosRSNewConfirmed},
        { State: "Rio de Janeiro",NewConfirmed: DadosRJNewConfirmed},
        { State: "Rondônia",NewConfirmed: DadosRONewConfirmed},
        { State: "Roraima",NewConfirmed: DadosRRNewConfirmed},
        { State: "Santa Catarina",NewConfirmed: DadosSCNewConfirmed},
        { State: "Sergipe",NewConfirmed: DadosSENewConfirmed},
        { State: "São Paulo",NewConfirmed: DadosSPNewConfirmed},
        { State: "Tocantins",NewConfirmed: DadosTONewConfirmed},
  
      ],
    };
    //console.log(data.States.map(({ NewConfirmed}) => NewConfirmed))
    var ordenação = data.States.sort(function(a, b){return a.NewConfirmed - b.NewConfirmed; }).reverse()

    return (
      <div>
        <HorizontalBar
       
       height='500vh'
        data={{
         labels:data.States.map(({ State}) => State) ,
        
         datasets: [
         {
          label: 'Confirmados',
          borderColor: '#3333ff', 
          backgroundColor: 'rgba(30, 139, 195, 0.5)',
          data:data.States.map(({ NewConfirmed}) => NewConfirmed),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Novos Casos por Estado',
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
export default HBarChartsStatesNewInfected

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ NewConfirmed }) => NewConfirmed).reverse(),
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
      CountriesTotalNewConfirmed
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
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalNewConfirmed}) => TotalNewConfirmed).slice(0,15)) : null ,
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