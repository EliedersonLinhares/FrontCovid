import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosSCFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
    const modifiedData = results.map((results) =>({
      last_available_confirmed: results.last_available_confirmed,
      date: results.date,
      last_available_deaths: results.last_available_deaths,
      new_confirmed: results.new_confirmed,
      new_deaths: results.new_deaths,
      last_available_confirmed_per_100k_inhabitants: results.last_available_confirmed_per_100k_inhabitants,
      last_available_death_rate: results.last_available_death_rate,
    }));
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const DadosSCConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSCDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSCDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosSCNewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSCNewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSCConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosSCDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosSCFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SC&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
      const modifiedData = results.map((results) =>({
        last_available_confirmed: results.last_available_confirmed,
        last_available_deaths: results.last_available_deaths,
        city: results.city
      }));
      return modifiedData;
     
    }catch(error){
      console.log(error);
    }  
  }
  /**
   * 
   * Exemplo de Pie chart
   * 
   import React, {useState, useEffect} from 'react';
import {
    DadosSCSCInf,
    DadosSCsgInf,
    DadosSCdcInf,
    DadosSCniInf,
    DadosSCntInf,

} from '../../API/SC';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartSCInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosSCSCInffetched, setFetechedSCSCInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedSCSCInf(await DadosSCSCInf());
      }
 
      fetchAPI();
    },[setFetechedSCSCInf]);
    //console.log(DadosSCSCInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosSCsgInffetched, setFetechedSCsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSCsgInf(await DadosSCsgInf());
     }

     fetchAPI();
   },[setFetechedSCsgInf]);
   //console.log(DadosSCsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosSCdcInffetched, setFetechedSCdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSCdcInf(await DadosSCdcInf());
     }

     fetchAPI();
   },[setFetechedSCdcInf]);
   //console.log(DadosSCdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosSCniInffetched, setFetechedSCniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSCniInf(await DadosSCniInf());
     }

     fetchAPI();
   },[setFetechedSCniInf]);
   //console.log(DadosSCniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosSCntInffetched, setFetechedSCntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSCntInf(await DadosSCntInf());
     }

     fetchAPI();
   },[setFetechedSCntInf]);
   //console.log(DadosSCntInffetched)

    const PieChart =(
      
        DadosSCSCInf
        ? (
            <Pie
            
            data={{
               // labels: DadosSPfetched.map(({ date }) => date).reverse(),
                labels: [
                    'Rio de Janeiro',
                    'São Gonçalo',
                    'Duque de Caxias',
                    'Nova Iguaçu',
                    'Niteroí'
                    ],
                datasets: [
                  {
                    data: [
                        DadosSCSCInffetched,
                        DadosSCsgInffetched,
                        DadosSCdcInffetched,
                        DadosSCniInffetched,
                        DadosSCntInffetched
                    ],
                    backgroundColor: [
                        '#ed5e5e',//vermelho
                        '#f4f257',//amarelo
                        '#77d666',//verde
                        '#6d8fd0',//azul
                        '#d06dba',//rosa

                    ],
                    fill: true,
                 }, 
                
               ],
            }}
            options={{ 
                title:{
                    fontSize: 13,
                    fontColor: "white",
                    display: true,
                    text: 'Confirmados nos maiores municipios',
                   },
                maintainAspectRatio: false,
                responsive: false,
                legend: {
                  position: 'left',
                  labels: {
                    fontColor: "white",
                    boxWidth: 10
                  }
                }
            }}
            />) : null
    
    );

    return(
      <div > 
         {PieChart}
        </div>
      )
}
export default PieChartSCInf;
   */