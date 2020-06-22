import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosPRFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosPRConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPRDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPRDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosPRNewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPRNewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPRConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosPRDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosPRFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PR&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosPRPRInf,
    DadosPRsgInf,
    DadosPRdcInf,
    DadosPRniInf,
    DadosPRntInf,

} from '../../API/PR';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartPRInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosPRPRInffetched, setFetechedPRPRInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPRPRInf(await DadosPRPRInf());
      }
 
      fetchAPI();
    },[setFetechedPRPRInf]);
    //console.log(DadosPRPRInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosPRsgInffetched, setFetechedPRsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPRsgInf(await DadosPRsgInf());
     }

     fetchAPI();
   },[setFetechedPRsgInf]);
   //console.log(DadosPRsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosPRdcInffetched, setFetechedPRdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPRdcInf(await DadosPRdcInf());
     }

     fetchAPI();
   },[setFetechedPRdcInf]);
   //console.log(DadosPRdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosPRniInffetched, setFetechedPRniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPRniInf(await DadosPRniInf());
     }

     fetchAPI();
   },[setFetechedPRniInf]);
   //console.log(DadosPRniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosPRntInffetched, setFetechedPRntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPRntInf(await DadosPRntInf());
     }

     fetchAPI();
   },[setFetechedPRntInf]);
   //console.log(DadosPRntInffetched)

    const PieChart =(
      
        DadosPRPRInf
        ? (
            <Pie
            
            data={{
               // labels: DadosPRfetched.map(({ date }) => date).reverse(),
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
                        DadosPRPRInffetched,
                        DadosPRsgInffetched,
                        DadosPRdcInffetched,
                        DadosPRniInffetched,
                        DadosPRntInffetched
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
                    diPRlay: true,
                    text: 'Confirmados nos maiores municipios',
                   },
                maintainAPRectRatio: false,
                rePRonsive: false,
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
export default PieChartPRInf;
   */