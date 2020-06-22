
import axios from 'axios';

const url= "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true"
const url2= "https://covid19.mathdro.id/api"
const url3= "https://brasil.io/api/dataset/covid19/caso/data/"
const url4= "https://brasil.io/api/dataset/covid19/caso_full/data/"
const url5= "https://api.covid19api.com"


export const Infected = async () => {
    try{
        const {data:{infected}}  = await axios.get(url);
        //console.log(data);
        return infected;
    }catch(error){
      console.log(error);
    }  
}

export const Deceased = async () => {
  try{
      const {data:{deceased}}  = await axios.get(url);
      //console.log(data);
      return deceased;
  }catch(error){
    console.log(error);
  }  
}



export const Recovered = async () => {
try{
    //desetruturando a resposta da url para pegar somente alguns dados
    const  {data: {recovered}}= await axios.get(`${url2}/countries/Brazil`);
    return recovered.value;

}catch(error){
 console.log(error)
}}

export const dateUpdate = async () => {
  try{
    const {data:{lastUpdate}}  = await axios.get(`${url2}/countries/Brazil`);
    //console.log(data);
    return lastUpdate;
}catch(error){
  console.log(error);
}  }




export const fetchStates3 = async () => {
  try{
      //const data  = await axios.get(url);
      const {data: {deceasedByRegion}} = await axios.get(url)
      //return deceasedByRegion.map((country) => country.state);
      const modifiedData = deceasedByRegion.map((deceasedByRegion) =>({
        state: deceasedByRegion.state

      }));

      return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const fetchStates4 = async () => {
  try{
      //const data  = await axios.get(url);
      const {data: {deceasedByRegion}} = await axios.get(url)
      //return deceasedByRegion.map((country) => country.state);
      const modifiedData = deceasedByRegion.map((deceasedByRegion) =>({
        state: deceasedByRegion.state,
        count: deceasedByRegion.count

      }));

      return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const fetchStates5 = async () => {
  try{
      const {data: {infectedByRegion}} = await axios.get(url)
      const modifiedData = infectedByRegion.map((infectedByRegion) =>({
        state: infectedByRegion.state,
        count: infectedByRegion.count

      }));

      return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}

export const BRData = async () => {
  try{
      //const data  = await axios.get(url);
      const {data} = await axios.get(`${url5}/dayone/country/brazil`)
      //return deceasedByRegion.map((country) => country.state);
      const modifiedData = data.map((data) =>({
        Confirmed: data.Confirmed,
        Deaths: data.Deaths,
        Recovered: data.Recovered,
        Date: data.Date

      }));

      return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}


/**
  

const modifiedData = results.map((results) =>({
      confirmed: results.confirmed

    }));

    return modifiedData;



  export const fetchStates2 = async () => {
  try{
      //const data  = await axios.get(url);
      const {data: {deceasedByRegion}} = await axios.get(url)
    console.log(deceasedByRegion);
   
  }catch(error){
    console.log(error);
  }  
 */