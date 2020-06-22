import React, { Component} from 'react';

//Total Infectados
import {DadosACDeceased} from '../API/AC';
import {DadosALDeceased} from '../API/AL';
import {DadosAMDeceased} from '../API/AM';
import {DadosAPDeceased} from '../API/AP';
import {DadosBADeceased} from '../API/BA';
import {DadosCEDeceased} from '../API/CE';
import {DadosDFDeceased} from '../API/DF';
import {DadosESDeceased} from '../API/ES';
import {DadosGODeceased} from '../API/GO';
import {DadosMADeceased} from '../API/MA';
import {DadosMGDeceased} from '../API/MG';
import {DadosMSDeceased} from '../API/MS';
import {DadosMTDeceased} from '../API/MT';
import {DadosPADeceased} from '../API/PA';
import {DadosPBDeceased} from '../API/PB';
import {DadosPEDeceased} from '../API/PE';
import {DadosPIDeceased} from '../API/PI';
import {DadosPRDeceased} from '../API/PR';
import {DadosRJDeceased} from '../API/RJ';
import {DadosRNDeceased} from '../API/RN';
import {DadosRODeceased} from '../API/RO';
import {DadosRRDeceased} from '../API/RR';
import {DadosRSDeceased} from '../API/RS';
import {DadosSCDeceased} from '../API/SC';
import {DadosSEDeceased} from '../API/SE';
import {DadosSPDeceased} from '../API/SP';
import {DadosTODeceased} from '../API/TO';



import {HorizontalBar} from 'react-chartjs-2';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

class HBarChartsStatesDeath extends Component {
state = {
DadosACDeceased:{},
DadosALDeceased:{},
DadosAMDeceased:{},
DadosAPDeceased:{},
DadosBADeceased:{},
DadosCEDeceased:{},
DadosDFDeceased:{},
DadosESDeceased:{},
DadosGODeceased:{},
DadosMADeceased:{},
DadosMGDeceased:{},
DadosMSDeceased:{},
DadosMTDeceased:{},
DadosPADeceased:{},
DadosPBDeceased:{},
DadosPEDeceased:{},
DadosPIDeceased:{},
DadosPRDeceased:{},
DadosRJDeceased:{},
DadosRNDeceased:{},
DadosRODeceased:{},
DadosRRDeceased:{},
DadosRSDeceased:{},
DadosSCDeceased:{},
DadosSEDeceased:{},
DadosSPDeceased:{},
DadosTODeceased:{},

   }
   async componentDidMount() {

    const fetchedInfectedAC = await DadosACDeceased();
    //console.log(fetchedInfectedAC);
    this.setState({DadosACDeceased: fetchedInfectedAC});

    const fetchedInfectedAL = await DadosALDeceased();
    //console.log(fetchedInfectedAL);
    this.setState({DadosALDeceased: fetchedInfectedAL});

    const fetchedInfectedAM = await DadosAMDeceased();
    //console.log(fetchedInfectedAM);
    this.setState({DadosAMDeceased: fetchedInfectedAM});

    const fetchedInfectedAP = await DadosAPDeceased();
    //console.log(fetchedInfectedAP);
    this.setState({DadosAPDeceased: fetchedInfectedAP});

    const fetchedInfectedBA = await DadosBADeceased();
    //console.log(fetchedInfectedBA);
    this.setState({DadosBADeceased: fetchedInfectedBA});

    const fetchedInfectedCE = await DadosCEDeceased();
    //console.log(fetchedInfectedCE);
    this.setState({DadosCEDeceased: fetchedInfectedCE});

    const fetchedInfectedDF = await DadosDFDeceased();
    //console.log(fetchedInfectedDF);
    this.setState({DadosDFDeceased: fetchedInfectedDF});

    const fetchedInfectedES = await DadosESDeceased();
    //console.log(fetchedInfectedES);
    this.setState({DadosESDeceased: fetchedInfectedES});

    const fetchedInfectedGO = await DadosGODeceased();
    //console.log(fetchedInfectedGO);
    this.setState({DadosGODeceased: fetchedInfectedGO});
    
    const fetchedInfectedMA = await DadosMADeceased();
    //console.log(fetchedInfectedMA);
    this.setState({DadosMADeceased: fetchedInfectedMA});

    const fetchedInfectedMG = await DadosMGDeceased();
    //console.log(fetchedInfectedMG);
    this.setState({DadosMGDeceased: fetchedInfectedMG});

    const fetchedInfectedMS = await DadosMSDeceased();
    //console.log(fetchedInfectedMS);
    this.setState({DadosMSDeceased: fetchedInfectedMS});

    const fetchedInfectedMT = await DadosMTDeceased();
    //console.log(fetchedInfectedMT);
    this.setState({DadosMTDeceased: fetchedInfectedMT});

    const fetchedInfectedPA = await DadosPADeceased();
    //console.log(fetchedInfectedPA);
    this.setState({DadosPADeceased: fetchedInfectedPA});

    const fetchedInfectedPB = await DadosPBDeceased();
    //console.log(fetchedInfectedPB);
    this.setState({DadosPBDeceased: fetchedInfectedPB});

    const fetchedInfectedPE = await DadosPEDeceased();
    //console.log(fetchedInfectedPE);
    this.setState({DadosPEDeceased: fetchedInfectedPE});

    const fetchedInfectedPI = await DadosPIDeceased();
    //console.log(fetchedInfectedPI);
    this.setState({DadosPIDeceased: fetchedInfectedPI});

    const fetchedInfectedPR = await DadosPRDeceased();
    //console.log(fetchedInfectedPR);
    this.setState({DadosPRDeceased: fetchedInfectedPR});

    const fetchedInfectedRJ = await DadosRJDeceased();
    //console.log(fetchedInfectedRJ);
    this.setState({DadosRJDeceased: fetchedInfectedRJ});

    const fetchedInfectedRN = await DadosRNDeceased();
    //console.log(fetchedInfectedRN);
    this.setState({DadosRNDeceased: fetchedInfectedRN});

    const fetchedInfectedRO = await DadosRODeceased();
    //console.log(fetchedInfectedRO);
    this.setState({DadosRODeceased: fetchedInfectedRO});

    const fetchedInfectedRR = await DadosRRDeceased();
    //console.log(fetchedInfectedRR);
    this.setState({DadosRRDeceased: fetchedInfectedRR});

    const fetchedInfectedRS = await DadosRSDeceased();
    //console.log(fetchedInfectedRS);
    this.setState({DadosRSDeceased: fetchedInfectedRS});

    const fetchedInfectedSC = await DadosSCDeceased();
    //console.log(fetchedInfectedSC);
    this.setState({DadosSCDeceased: fetchedInfectedSC});

    const fetchedInfectedSE = await DadosSEDeceased();
    //console.log(fetchedInfectedSE);
    this.setState({DadosSEDeceased: fetchedInfectedSE});

    const fetchedInfectedSP = await DadosSPDeceased();
    //console.log(fetchedInfectedSP);
    this.setState({DadosSPDeceased: fetchedInfectedSP});

    const fetchedInfectedTO = await DadosTODeceased();
    //console.log(fetchedInfectedTO);
    this.setState({DadosTODeceased: fetchedInfectedTO});
   }

   

  render() {

    const { 
    DadosACDeceased,
    DadosALDeceased,
    DadosAMDeceased,
    DadosAPDeceased,
    DadosBADeceased,
    DadosCEDeceased,
    DadosDFDeceased,
    DadosESDeceased,
    DadosGODeceased,
    DadosMADeceased,
    DadosMGDeceased,
    DadosMSDeceased,
    DadosMTDeceased,
    DadosPADeceased,
    DadosPBDeceased,
    DadosPEDeceased,
    DadosPIDeceased,
    DadosPRDeceased,
    DadosRJDeceased,
    DadosRNDeceased,
    DadosRODeceased,
    DadosRRDeceased,
    DadosRSDeceased,
    DadosSCDeceased,
    DadosSEDeceased,
    DadosSPDeceased,
    DadosTODeceased, } = this.state

    let data = {
      States: [
        { State: "Acre",Deceased:DadosACDeceased},
        { State: "Alagoas",Deceased:DadosALDeceased},
        { State: "Amazonas",Deceased: DadosAMDeceased},
        { State: "Amapá", Deceased:DadosAPDeceased},
        { State: "Bahia",Deceased: DadosBADeceased},
        { State: "Ceará",Deceased: DadosCEDeceased},
        { State: "Distrito Federal",Deceased: DadosDFDeceased},
        { State: "Espirito Santo",Deceased: DadosESDeceased},
        { State: "Goiás",Deceased: DadosGODeceased},
        { State: "Maranhão",Deceased: DadosMADeceased},
        { State: "Mato Grosso",Deceased: DadosMTDeceased},
        { State: "Mato Grosso do Sul",Deceased: DadosMSDeceased},
        { State: "Minas Gerais",Deceased: DadosMGDeceased},
        { State: "Paraná",Deceased: DadosPRDeceased},
        { State: "Paraíba",Deceased: DadosPBDeceased},
        { State: "Pará",Deceased: DadosPADeceased},
        { State: "Pernambuco",Deceased: DadosPEDeceased},
        { State: "Piauí",Deceased: DadosPIDeceased},
        { State: "Rio Grande do Norte",Deceased: DadosRNDeceased},
        { State: "Rio Grande do Sul",Deceased: DadosRSDeceased},
        { State: "Rio de Janeiro",Deceased: DadosRJDeceased},
        { State: "Rondônia",Deceased: DadosRODeceased},
        { State: "Roraima",Deceased: DadosRRDeceased},
        { State: "Santa Catarina",Deceased: DadosSCDeceased},
        { State: "Sergipe",Deceased: DadosSEDeceased},
        { State: "São Paulo",Deceased: DadosSPDeceased},
        { State: "Tocantins",Deceased: DadosTODeceased},
  
      ],
    };
    //console.log(data.States.map(({ Deceased}) => Deceased))
    var ordenação = data.States.sort(function(a, b){return a.Deceased - b.Deceased; }).reverse()

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
          data:data.States.map(({ Deceased}) => Deceased),
         }],
       
        }}
       
        options={{
         title:{
           fontSize: 15,
           fontColor: "white",
           display: true,
           text: 'Mortes por Estado',
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
export default HBarChartsStatesDeath;

/** 
 const LineChart =(
        DadosRJ
        ? (
            <Line 
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: DadosRJfetched.map(({ date }) => date).reverse(),
                datasets: [{
                   data: DadosRJfetched.map(({ Deceased }) => Deceased).reverse(),
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
      CountriesTotalDeceased
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
              data:WorldCountriesTotalfetched ? (WorldCountriesTotalfetched.map(({ TotalDeceased}) => TotalDeceased).slice(0,15)) : null ,
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