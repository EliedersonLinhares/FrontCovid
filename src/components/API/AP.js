import axios from 'axios';


const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"


export const DadosAPFull = async () => {
  try{
      const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=&is_repeated=`);
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
export const DadosAPConfirmed = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosAPDeceased = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosAPDate = async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.date);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosAPNewConfirmed= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_confirmed);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosAPNewDeceased= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.new_deaths);
     
    }catch(error){
      console.log(error);
    }  
  }
  export const DadosAPConfirmed100k= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_confirmed_per_100k_inhabitants);
     
    }catch(error){
      console.log(error);
    }  
  }

  export const DadosAPDeathRate= async () => {
    try{
        //const data  = await axios.get(url);
        const {data:{results}} = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=state&last_available_date=&is_last=True&is_repeated=`)
        return results.map((results) => results.last_available_death_rate);
     
    }catch(error){
      console.log(error);
    }  
  }


  export const DadosAPFullMunicipios = async () => {
    try{
        const {data:{results}}  = await axios.get(`${url4}?search=&epidemiological_week=&date=&order_for_place=&state=AP&city=&city_ibge_code=&place_type=city&last_available_date=&is_last=True&is_repeated=`);
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
    DadosAPAPInf,
    DadosAPsgInf,
    DadosAPdcInf,
    DadosAPniInf,
    DadosAPntInf,

} from '../../API/AP';
import {Pie} from 'react-chartjs-2';
import RioDeJaneiro from '../../../views/RioDeJaneiro/RioDeJaneiro';


const PieChartAPInf= () =>{

///////////////////
/////Rio de Janeiro
   const [DadosAPAPInffetched, setFetechedAPAPInf] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedAPAPInf(await DadosAPAPInf());
      }
 
      fetchAPI();
    },[setFetechedAPAPInf]);
    //console.log(DadosAPAPInffetched)

    /////////////////
    /////São Gonçalo
   const [DadosAPsgInffetched, setFetechedAPsgInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedAPsgInf(await DadosAPsgInf());
     }

     fetchAPI();
   },[setFetechedAPsgInf]);
   //console.log(DadosAPsgInffetched)

   /////////////////////
   /////Duque de Caxias
   const [DadosAPdcInffetched, setFetechedAPdcInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedAPdcInf(await DadosAPdcInf());
     }

     fetchAPI();
   },[setFetechedAPdcInf]);
   //console.log(DadosAPdcInfInffetched)

   /////////////////////
   /////Nova Iguaçu
   const [DadosAPniInffetched, setFetechedAPniInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedAPniInf(await DadosAPniInf());
     }

     fetchAPI();
   },[setFetechedAPniInf]);
   //console.log(DadosAPniInfInffetched)

   /////////////////////
   /////Niteroí
   const [DadosAPntInffetched, setFetechedAPntInf] = useState([])
   useEffect(() => {
     const fetchAPI = async () =>{
        setFetechedAPntInf(await DadosAPntInf());
     }

     fetchAPI();
   },[setFetechedAPntInf]);
   //console.log(DadosAPntInffetched)

    const PieChart =(
      
        DadosAPAPInf
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
                        DadosAPAPInffetched,
                        DadosAPsgInffetched,
                        DadosAPdcInffetched,
                        DadosAPniInffetched,
                        DadosAPntInffetched
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
export default PieChartAPInf;
   */