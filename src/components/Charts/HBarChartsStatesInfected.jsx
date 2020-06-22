import React, { Component} from 'react';

//Total Infectados
import {DadosACConfirmed} from '../API/AC';
import {DadosALConfirmed} from '../API/AL';
import {DadosAMConfirmed} from '../API/AM';
import {DadosAPConfirmed} from '../API/AP';
import {DadosBAConfirmed} from '../API/BA';
import {DadosCEConfirmed} from '../API/CE';
import {DadosDFConfirmed} from '../API/DF';
import {DadosESConfirmed} from '../API/ES';
import {DadosGOConfirmed} from '../API/GO';
import {DadosMAConfirmed} from '../API/MA';
import {DadosMGConfirmed} from '../API/MG';
import {DadosMSConfirmed} from '../API/MS';
import {DadosMTConfirmed} from '../API/MT';
import {DadosPAConfirmed} from '../API/PA';
import {DadosPBConfirmed} from '../API/PB';
import {DadosPEConfirmed} from '../API/PE';
import {DadosPIConfirmed} from '../API/PI';
import {DadosPRConfirmed} from '../API/PR';
import {DadosRJConfirmed} from '../API/RJ';
import {DadosRNConfirmed} from '../API/RN';
import {DadosROConfirmed} from '../API/RO';
import {DadosRRConfirmed} from '../API/RR';
import {DadosRSConfirmed} from '../API/RS';
import {DadosSCConfirmed} from '../API/SC';
import {DadosSEConfirmed} from '../API/SE';
import {DadosSPConfirmed} from '../API/SP';
import {DadosTOConfirmed} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesInfected extends Component {
state = {
DadosACConfirmed:{},
DadosALConfirmed:{},
DadosAMConfirmed:{},
DadosAPConfirmed:{},
DadosBAConfirmed:{},
DadosCEConfirmed:{},
DadosDFConfirmed:{},
DadosESConfirmed:{},
DadosGOConfirmed:{},
DadosMAConfirmed:{},
DadosMGConfirmed:{},
DadosMSConfirmed:{},
DadosMTConfirmed:{},
DadosPAConfirmed:{},
DadosPBConfirmed:{},
DadosPEConfirmed:{},
DadosPIConfirmed:{},
DadosPRConfirmed:{},
DadosRJConfirmed:{},
DadosRNConfirmed:{},
DadosROConfirmed:{},
DadosRRConfirmed:{},
DadosRSConfirmed:{},
DadosSCConfirmed:{},
DadosSEConfirmed:{},
DadosSPConfirmed:{},
DadosTOConfirmed:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACConfirmed();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACConfirmed: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALConfirmed();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALConfirmed: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMConfirmed();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMConfirmed: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPConfirmed();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPConfirmed: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBAConfirmed();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBAConfirmed: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCEConfirmed();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCEConfirmed: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFConfirmed();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFConfirmed: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESConfirmed();
    //console.log(fetchedInfectedES);
    this.setState({DadosESConfirmed: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGOConfirmed();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGOConfirmed: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMAConfirmed();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMAConfirmed: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGConfirmed();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGConfirmed: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSConfirmed();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSConfirmed: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTConfirmed();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTConfirmed: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPAConfirmed();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPAConfirmed: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBConfirmed();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBConfirmed: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPEConfirmed();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPEConfirmed: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPIConfirmed();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPIConfirmed: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRConfirmed();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRConfirmed: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJConfirmed();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJConfirmed: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNConfirmed();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNConfirmed: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosROConfirmed();
    //console.log(fetchedInfectedRO);
    this.setState({DadosROConfirmed: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRConfirmed();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRConfirmed: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSConfirmed();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSConfirmed: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCConfirmed();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCConfirmed: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSEConfirmed();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSEConfirmed: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPConfirmed();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPConfirmed: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTOConfirmed();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTOConfirmed: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACConfirmed,
    DadosALConfirmed,
    DadosAMConfirmed,
    DadosAPConfirmed,
    DadosBAConfirmed,
    DadosCEConfirmed,
    DadosDFConfirmed,
    DadosESConfirmed,
    DadosGOConfirmed,
    DadosMAConfirmed,
    DadosMGConfirmed,
    DadosMSConfirmed,
    DadosMTConfirmed,
    DadosPAConfirmed,
    DadosPBConfirmed,
    DadosPEConfirmed,
    DadosPIConfirmed,
    DadosPRConfirmed,
    DadosRJConfirmed,
    DadosRNConfirmed,
    DadosROConfirmed,
    DadosRRConfirmed,
    DadosRSConfirmed,
    DadosSCConfirmed,
    DadosSEConfirmed,
    DadosSPConfirmed,
    DadosTOConfirmed, } = this.state

    let data = {
      States: [
        { State: "Acre",Confirmed:DadosACConfirmed},
        { State: "Alagoas",Confirmed:DadosALConfirmed},
        { State: "Amazonas",Confirmed: DadosAMConfirmed},
        { State: "Amapá", Confirmed:DadosAPConfirmed},
        { State: "Bahia",Confirmed: DadosBAConfirmed},
        { State: "Ceará",Confirmed: DadosCEConfirmed},
        { State: "Distrito Federal",Confirmed: DadosDFConfirmed},
        { State: "Espirito Santo",Confirmed: DadosESConfirmed},
        { State: "Goiás",Confirmed: DadosGOConfirmed},
        { State: "Maranhão",Confirmed: DadosMAConfirmed},
        { State: "Mato Grosso",Confirmed: DadosMTConfirmed},
        { State: "Mato Grosso do Sul",Confirmed: DadosMSConfirmed},
        { State: "Minas Gerais",Confirmed: DadosMGConfirmed},
        { State: "Paraná",Confirmed: DadosPRConfirmed},
        { State: "Paraíba",Confirmed: DadosPBConfirmed},
        { State: "Pará",Confirmed: DadosPAConfirmed},
        { State: "Pernambuco",Confirmed: DadosPEConfirmed},
        { State: "Piauí",Confirmed: DadosPIConfirmed},
        { State: "Rio Grande do Norte",Confirmed: DadosRNConfirmed},
        { State: "Rio Grande do Sul",Confirmed: DadosRSConfirmed},
        { State: "Rio de Janeiro",Confirmed: DadosRJConfirmed},
        { State: "Rondônia",Confirmed: DadosROConfirmed},
        { State: "Roraima",Confirmed: DadosRRConfirmed},
        { State: "Santa Catarina",Confirmed: DadosSCConfirmed},
        { State: "Sergipe",Confirmed: DadosSEConfirmed},
        { State: "São Paulo",Confirmed: DadosSPConfirmed},
        { State: "Tocantins",Confirmed: DadosTOConfirmed},
  
      ],
    };
    //console.log(data.States.map(({ Confirmed}) => Confirmed))
    var ordenação = data.States.sort(function(a, b){return a.Confirmed - b.Confirmed; }).reverse()

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
          data:data.States.map(({ Confirmed}) => Confirmed),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Casos por Estado',
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
export default HBarChartsStatesInfected;

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ confirmed }) => confirmed).reverse(),
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
      CountriesTotalConfirmed
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
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalConfirmed}) => TotalConfirmed).slice(0,15)) : null ,
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