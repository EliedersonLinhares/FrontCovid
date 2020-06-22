import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosPBFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosPBConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPBDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPBDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosPBNewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPBNewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosPBConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosPBDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosPBFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=PB&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosPBPBInf,
    DadosPBsgInf,
    DadosPBdcInf,
    DadosPBniInf,
    DadosPBntInf,

} from '../../API/PB';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartPBInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosPBPBInffetched, setFetechedPBPBInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedPBPBInf(await DadosPBPBInf());
      }
 
      fetchAPI();
    },[setFetechedPBPBInf]);
    //console.log(DadosPBPBInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosPBsgInffetched, setFetechedPBsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPBsgInf(await DadosPBsgInf());
     }

     fetchAPI();
   },[setFetechedPBsgInf]);
   //console.log(DadosPBsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosPBdcInffetched, setFetechedPBdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPBdcInf(await DadosPBdcInf());
     }

     fetchAPI();
   },[setFetechedPBdcInf]);
   //console.log(DadosPBdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosPBniInffetched, setFetechedPBniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPBniInf(await DadosPBniInf());
     }

     fetchAPI();
   },[setFetechedPBniInf]);
   //console.log(DadosPBniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosPBntInffetched, setFetechedPBntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedPBntInf(await DadosPBntInf());
     }

     fetchAPI();
   },[setFetechedPBntInf]);
   //console.log(DadosPBntInffetched)

    const PieChart =(
      
        DadosPBPBInf
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
                        DadosPBPBInffetched,
                        DadosPBsgInffetched,
                        DadosPBdcInffetched,
                        DadosPBniInffetched,
                        DadosPBntInffetched
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
export default PieChartPBInf;
   */