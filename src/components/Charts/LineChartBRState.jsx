import React, { useState, useEffect } from 'react';
import { DadosRJFull } from '../API/RJ';
import { DadosSPFull } from '../API/SP';
import { DadosMGFull } from '../API/MG';
import { DadosESFull } from '../API/ES';

import { DadosPRFull } from '../API/PR';
import { DadosSCFull } from '../API/SC';
import { DadosRSFull } from '../API/RS';

import { DadosGOFull } from '../API/GO';
import { DadosMTFull } from '../API/MT';
import { DadosMSFull } from '../API/MS';

import { DadosALFull } from '../API/AL';
import { DadosBAFull } from '../API/BA';
import { DadosCEFull } from '../API/CE';
import { DadosMAFull } from '../API/MA';
import { DadosPBFull } from '../API/PB';
import { DadosPEFull } from '../API/PE';
import { DadosPIFull } from '../API/PI';
import { DadosRNFull } from '../API/RN';
import { DadosSEFull } from '../API/SE';

import { DadosACFull } from '../API/AC';
import { DadosAPFull } from '../API/AP';
import { DadosAMFull } from '../API/AM';
import { DadosPAFull } from '../API/PA';
import { DadosROFull } from '../API/RO';
import { DadosRRFull } from '../API/RR';
import { DadosTOFull } from '../API/TO';

import { Line } from 'react-chartjs-2';


const LineCharts = () => {


  ////RIO DE JANEIRO
  const [DadosRJFullfetched, setFetechedRJFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedRJFull(await DadosRJFull());
    }

    fetchAPI();
  }, [setFetechedRJFull]);
  //console.log("RJ: " + DadosRJFullfetched.length)


  /////SAO PAULO
  const [DadosSPFullfetched, setFetechedSPFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedSPFull(await DadosSPFull());
    }

    fetchAPI();
  }, [setFetechedSPFull]);
  //console.log("SP: " + DadosSPFullfetched.length)

  /////MINAS GERAIS
  const [DadosMGFullfetched, setFetechedMGFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedMGFull(await DadosMGFull());
    }

    fetchAPI();
  }, [setFetechedMGFull]);
 // console.log("MG: " + DadosMGFullfetched.length)

  ////ESPIRITO SANTO
  const [DadosESFullfetched, setFetechedESFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedESFull(await DadosESFull());
    }

    fetchAPI();
  }, [setFetechedESFull]);
  //console.log("ES: " + DadosESFullfetched.length)

  //////PARANA
  const [DadosPRFullfetched, setFetechedPRFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPRFull(await DadosPRFull());
    }

    fetchAPI();
  }, [setFetechedPRFull]);
 // console.log("PR: " + DadosPRFullfetched.length)

  //////SANTA CATARINA
  const [DadosSCFullfetched, setFetechedSCFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedSCFull(await DadosSCFull());
    }

    fetchAPI();
  }, [setFetechedSCFull]);
 // console.log("SC: " + DadosSCFullfetched.length)

  //////RIO GRANDE DO SUL
  const [DadosRSFullfetched, setFetechedRSFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedRSFull(await DadosRSFull());
    }

    fetchAPI();
  }, [setFetechedRSFull]);
  //console.log("RS: " + DadosRSFullfetched.length)

  //////GOIAS
  const [DadosGOFullfetched, setFetechedGOFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedGOFull(await DadosGOFull());
    }

    fetchAPI();
  }, [setFetechedGOFull]);
  //console.log("GO: " + DadosGOFullfetched.length)

  //////MATO GROSSO
  const [DadosMTFullfetched, setFetechedMTFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedMTFull(await DadosMTFull());
    }

    fetchAPI();
  }, [setFetechedMTFull]);
  //console.log("MT: " + DadosMTFullfetched.length)

  //////MATO GROSSO DO SUL
  const [DadosMSFullfetched, setFetechedMSFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedMSFull(await DadosMSFull());
    }

    fetchAPI();
  }, [setFetechedMSFull]);
  //console.log("MS: " + DadosMSFullfetched.length)

  //////ALAGOAS
  const [DadosALFullfetched, setFetechedALFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedALFull(await DadosALFull());
    }

    fetchAPI();
  }, [setFetechedALFull]);
  //console.log("AL: " + DadosALFullfetched.length)

  //////BAHIA
  const [DadosBAFullfetched, setFetechedBAFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedBAFull(await DadosBAFull());
    }

    fetchAPI();
  }, [setFetechedBAFull]);
  //console.log("BA: " + DadosBAFullfetched.length)

  //////CEARA
  const [DadosCEFullfetched, setFetechedCEFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedCEFull(await DadosCEFull());
    }

    fetchAPI();
  }, [setFetechedCEFull]);
  //console.log("CE: " + DadosCEFullfetched.length)

  //////MARANHÃO
  const [DadosMAFullfetched, setFetechedMAFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedMAFull(await DadosMAFull());
    }

    fetchAPI();
  }, [setFetechedMAFull]);
  //console.log("MA: " + DadosMAFullfetched.length)

  //////PARAIBA
  const [DadosPBFullfetched, setFetechedPBFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPBFull(await DadosPBFull());
    }

    fetchAPI();
  }, [setFetechedPBFull]);
  //console.log("PB: " + DadosPBFullfetched.length)

  //////PERNAMBUCO
  const [DadosPEFullfetched, setFetechedPEFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPEFull(await DadosPEFull());
    }

    fetchAPI();
  }, [setFetechedPEFull]);
  //console.log("PE: " + DadosPEFullfetched.length)

  //////PIAUI
  const [DadosPIFullfetched, setFetechedPIFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPIFull(await DadosPIFull());
    }

    fetchAPI();
  }, [setFetechedPIFull]);
  //console.log("PI: " + DadosPIFullfetched.length)

  //////RIO GRANDE DO NORTE
  const [DadosRNFullfetched, setFetechedRNFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedRNFull(await DadosRNFull());
    }

    fetchAPI();
  }, [setFetechedRNFull]);
  //console.log("RN: " + DadosRNFullfetched.length)

  //////SERGIPE
  const [DadosSEFullfetched, setFetechedSEFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedSEFull(await DadosSEFull());
    }

    fetchAPI();
  }, [setFetechedSEFull]);
  //console.log("SE: " + DadosSEFullfetched.length)

  //////ACRE
  const [DadosACFullfetched, setFetechedACFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedACFull(await DadosACFull());
    }

    fetchAPI();
  }, [setFetechedACFull]);
  //console.log("AC: " + DadosACFullfetched.length)

  //////AMAPA
  const [DadosAPFullfetched, setFetechedAPFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedAPFull(await DadosAPFull());
    }

    fetchAPI();
  }, [setFetechedAPFull]);
 // console.log("AP: " + DadosAPFullfetched.length)

  //////AMAZONAS
  const [DadosAMFullfetched, setFetechedAMFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedAMFull(await DadosAMFull());
    }

    fetchAPI();
  }, [setFetechedAMFull]);
 // console.log("AM: " + DadosAMFullfetched.length)

  //////PARA
  const [DadosPAFullfetched, setFetechedPAFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedPAFull(await DadosPAFull());
    }

    fetchAPI();
  }, [setFetechedPAFull]);
 // console.log("PA: " + DadosPAFullfetched.length)

  //////RONDONIA
  const [DadosROFullfetched, setFetechedROFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedROFull(await DadosROFull());
    }

    fetchAPI();
  }, [setFetechedROFull]);
  //console.log("RO: " + DadosROFullfetched.length)

  //////RORAIMA
  const [DadosRRFullfetched, setFetechedRRFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedRRFull(await DadosRRFull());
    }

    fetchAPI();
  }, [setFetechedRRFull]);
  //console.log("RR: " + DadosRRFullfetched.length)

  //////TOCANTINS
  const [DadosTOFullfetched, setFetechedTOFull] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetechedTOFull(await DadosTOFull());
    }

    fetchAPI();
  }, [setFetechedTOFull]);
  //console.log("TO: " + DadosTOFullfetched.length)



  const LineChart = (
    DadosRJFull
      ? (
        <Line
       
          data={
            {// labels: DadosSPfetched.map(({ date }) => date).reverse(),
            //labels: DadosRJFullfetched.map(({ date }) => date).reverse(),
            datasets: [
              {
                data: DadosRJFullfetched.map(({ last_available_confirmed }) => last_available_confirmed).reverse(),
                label: 'Confirmados',
                borderColor: '#3333ff',
              },
              {
                data: DadosTOFullfetched.map(({ last_available_confirmed }) => last_available_confirmed).reverse(),
                label: 'Confirmados',
                borderColor: '#3333ff',
              },
              ],
            }
            }
          options={{
            elements: {
              point:{
                  radius: 0
              }
          },

            title: {
              fontSize: 15,
              fontColor: "white",
              display: true,
              text: 'Rio de Janeiro',
            },
            responsive: true,
            scales: {
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
                    }
                  },
                  ticks: {
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 4,
                    fontSize: 10,
                    fontColor: "white"
                  }
                }],
              yAxes: [
                {
                  gridLines: {
                    color: '#44475a'
                  },
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: true,
                    maxTicksLimit: 4,
                    fontSize: 10,
                    fontColor: "white"
                  }
                }]
            },
            legend: {
              display: true,
              labels: {
                fontColor: "white",

              }
            }
          }}
          tooltips={{
            callbacks: {
              label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var index = tooltipItem.index;
                return dataset.labels[index] + ': ' + dataset.data[index];
              }
            }
          }}
        />) : null

  );

  return (
    <div >
      {LineChart}
    </div>
  )
}
export default LineCharts;
