import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosSEFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosSEConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSEDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSEDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosSENewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSENewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosSEConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosSEDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosSEFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=SE&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosSESEInf,
    DadosSEsgInf,
    DadosSEdcInf,
    DadosSEniInf,
    DadosSEntInf,

} from '../../API/SE';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartSEInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosSESEInffetched, setFetechedSESEInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedSESEInf(await DadosSESEInf());
      }
 
      fetchAPI();
    },[setFetechedSESEInf]);
    //console.log(DadosSESEInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosSEsgInffetched, setFetechedSEsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSEsgInf(await DadosSEsgInf());
     }

     fetchAPI();
   },[setFetechedSEsgInf]);
   //console.log(DadosSEsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosSEdcInffetched, setFetechedSEdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSEdcInf(await DadosSEdcInf());
     }

     fetchAPI();
   },[setFetechedSEdcInf]);
   //console.log(DadosSEdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosSEniInffetched, setFetechedSEniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSEniInf(await DadosSEniInf());
     }

     fetchAPI();
   },[setFetechedSEniInf]);
   //console.log(DadosSEniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosSEntInffetched, setFetechedSEntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedSEntInf(await DadosSEntInf());
     }

     fetchAPI();
   },[setFetechedSEntInf]);
   //console.log(DadosSEntInffetched)

    const PieChart =(
      
        DadosSESEInf
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
                        DadosSESEInffetched,
                        DadosSEsgInffetched,
                        DadosSEdcInffetched,
                        DadosSEniInffetched,
                        DadosSEntInffetched
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
export default PieChartSEInf;
   */