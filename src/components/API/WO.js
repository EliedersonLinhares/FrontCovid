
import axios from 'axios';


const url5= "https://api.covid19api.com"
const url6= "https://cors-anywhere.herokuapp.com/https://covid19-api.org/api"


const modifiedData = [];

export const WorldInfected = async () => {
  try{
      const {data:{Global:{ TotalConfirmed}}}  = await axios.get(`${url5}/summary`);
      //console.log(data);
      return  TotalConfirmed;
  }catch(error){
    console.log(error);
  }  
}

export const WorldDeceased = async () => {
try{
    const {data:{Global:{ TotalDeaths}}}  = await axios.get(`${url5}/summary`);
    //console.log(data);
    return TotalDeaths;
}catch(error){
  console.log(error);
}  
}

export const WorldRecovered = async () => {
try{
  //desetruturando a resposta da url para pegar somente alguns dados
  const  {data:{Global:{TotalRecovered}}}= await axios.get(`${url5}/summary`);
  return TotalRecovered;

}catch(error){
console.log(error)
}}

export const WorldCountriesTotal = async () => {
  try{ 
      const {data:{Countries}}  = await axios.get(`${url5}/summary`);
     
      const modifiedData = Countries.map((Countries) =>({
      Country: Countries.Country,
      TotalDeaths: Countries.TotalDeaths,
      TotalConfirmed: Countries.TotalConfirmed,
      TotalRecovered: Countries.TotalRecovered,
      NewConfirmed: Countries.NewConfirmed,
      NewDeaths: Countries.NewDeaths,
      NewRecovered: Countries.NewRecovered,
    }));
   
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const USAData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/united-states/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const BRData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/brazil/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const RUData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/russia/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const UKData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/united-kingdom/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const ESData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/spain/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const ITData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/italy/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const FRData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/france/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const GEData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/germany/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const CAData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/canada/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const TUData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/turkey/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const IRData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/iran/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const IDData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/india/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const PEData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/peru/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const MEData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/mexico/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}
export const SAData = async () => {
  try{
      const {data} = await axios.get(`${url5}/total/dayone/country/saudi-arabia/status/confirmed`)
      const modifiedData = data.map((data) =>({
        Cases: data.Cases,
        date: data.Date
      }));
      return modifiedData;
  }catch(error){
    console.log(error);
  }  
}

export const CountriesTotalConfirmed = async () => {
  try{ 
      const {data:{Countries}}  = await axios.get(`${url5}/summary`);
     
      const modifiedData = Countries.map((Countries) =>({
      Country: Countries.Country,
      TotalConfirmed: Countries.TotalConfirmed,
    }));
   
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const CountriesTotalDeath = async () => {
  try{ 
      const {data:{Countries}}  = await axios.get(`${url5}/summary`);
     
      const modifiedData = Countries.map((Countries) =>({
      Country: Countries.Country,
      TotalDeaths: Countries.TotalDeaths,
    }));
   
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}
export const CountriesNewConfirmed = async () => {
  try{ 
      const {data:{Countries}}  = await axios.get(`${url5}/summary`);
     
      const modifiedData = Countries.map((Countries) =>({
      Country: Countries.Country,
      NewConfirmed: Countries.NewConfirmed,
    }));
   
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}

export const CountriesNewDeaths = async () => {
  try{ 
      const {data:{Countries}}  = await axios.get(`${url5}/summary`);
     
      const [modifiedData] = Countries.map((Countries) =>({
      Country: Countries.Country,
      NewDeaths: Countries.NewDeaths,
    }));
   
    return [modifiedData];
   
  }catch(error){
    console.log(error);
  }  
}

///////////////
export const WorldTimeline = async () => {
  try{ 
      const {data}  = await axios.get(`${url6}/timeline`);
     
      const modifiedData = data.map((data) =>({
      last_update: data.last_update,
      total_cases: data.total_cases,
      total_deaths: data.total_deaths,
      total_recovered: data.total_recovered,
    }));
   
    return modifiedData;
   
  }catch(error){
    console.log(error);
  }  
}