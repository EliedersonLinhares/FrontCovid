import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosROFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosROConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRODeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRODate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosRONewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRONewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosROConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosRODeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosROFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RO&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosROROInf,
    DadosROsgInf,
    DadosROdcInf,
    DadosROniInf,
    DadosROntInf,

} from '../../API/RO';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartROInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosROROInffetched, setFetechedROROInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedROROInf(await DadosROROInf());
      }
 
      fetchAPI();
    },[setFetechedROROInf]);
    //console.log(DadosROROInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosROsgInffetched, setFetechedROsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedROsgInf(await DadosROsgInf());
     }

     fetchAPI();
   },[setFetechedROsgInf]);
   //console.log(DadosROsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosROdcInffetched, setFetechedROdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedROdcInf(await DadosROdcInf());
     }

     fetchAPI();
   },[setFetechedROdcInf]);
   //console.log(DadosROdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosROniInffetched, setFetechedROniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedROniInf(await DadosROniInf());
     }

     fetchAPI();
   },[setFetechedROniInf]);
   //console.log(DadosROniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosROntInffetched, setFetechedROntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedROntInf(await DadosROntInf());
     }

     fetchAPI();
   },[setFetechedROntInf]);
   //console.log(DadosROntInffetched)

    const PieChart =(
      
        DadosROROInf
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
                        DadosROROInffetched,
                        DadosROsgInffetched,
                        DadosROdcInffetched,
                        DadosROniInffetched,
                        DadosROntInffetched
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
export default PieChartROInf;
   */