import axios from 'axios';


const url4= "https://cors-anywhere.herokuapp.com/https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosRJFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosRJConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRJDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRJDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosRJNewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRJNewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosRJConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosRJDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }








  export const DadosRJFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=RJ&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosRJrjInf,
    DadosRJsgInf,
    DadosRJdcInf,
    DadosRJniInf,
    DadosRJntInf,

} from '../../API/RJ';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartRJInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosRJrjInffetched, setFetechedRJrjInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedRJrjInf(await DadosRJrjInf());
      }
 
      fetchAPI();
    },[setFetechedRJrjInf]);
    //console.log(DadosRJrjInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosRJsgInffetched, setFetechedRJsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedRJsgInf(await DadosRJsgInf());
     }

     fetchAPI();
   },[setFetechedRJsgInf]);
   //console.log(DadosRJsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosRJdcInffetched, setFetechedRJdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedRJdcInf(await DadosRJdcInf());
     }

     fetchAPI();
   },[setFetechedRJdcInf]);
   //console.log(DadosRJdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosRJniInffetched, setFetechedRJniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedRJniInf(await DadosRJniInf());
     }

     fetchAPI();
   },[setFetechedRJniInf]);
   //console.log(DadosRJniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosRJntInffetched, setFetechedRJntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedRJntInf(await DadosRJntInf());
     }

     fetchAPI();
   },[setFetechedRJntInf]);
   //console.log(DadosRJntInffetched)

    const PieChart =(
      
        DadosRJrjInf
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
                        DadosRJrjInffetched,
                        DadosRJsgInffetched,
                        DadosRJdcInffetched,
                        DadosRJniInffetched,
                        DadosRJntInffetched
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
export default PieChartRJInf;
   */