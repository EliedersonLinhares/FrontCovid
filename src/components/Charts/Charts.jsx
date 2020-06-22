import React, {useState, useEffect} from 'react';
import {fetchStates3, fetchStates4, fetchStates5,BRData} from '../API';
import {Bar} from 'react-chartjs-2';


const Charts = () =>{

    

    const [fetchedStates5, setFetechedState5] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
       setFetechedState5(await fetchStates5());
      }
 
      fetchAPI();
    },[setFetechedState5]);
    //console.log(fetchedStates5)

const [fetchedStates3, setFetechedState3] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
       setFetechedState3(await fetchStates3());
      }
 
      fetchAPI();
    },[setFetechedState3]);
   // console.log(fetchedStates3)

    const [fetchedStates4, setFetechedState4] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
       setFetechedState4(await fetchStates4());
      }
 
      fetchAPI();
    },[setFetechedState4]);
    //console.log(fetchedStates4)


    const [fetchedCountryBR, setfetchedCountryBR] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setfetchedCountryBR(await BRData());
      }
 
      fetchAPI();
    },[setfetchedCountryBR]);
    //console.log(fetchedCountryBR)
 
    
    ///var item =  fetchedStates3.indexOf("SP")
    //var ordenação = fetchedStates3.filter(function(a){if(item !== -1){ return  a[item] = "São Paulo";} })
    
    
    const barChart =(
        fetchedStates3
        ? (
          <Bar
         
          
           data={{
            labels:fetchedStates3.map(({ state}) => state) ,
           
            datasets: [
            {
                label: 'Confirmados',
                backgroundColor:'rgba(85, 187, 246, 0.5)',
                borderColor: '#8fccf7',
                data:fetchedStates5.map(({ count}) => count),
                
            },
            {
                label: 'Mortes',
                backgroundColor:'rgba(255, 0, 0, 0.5)',
                borderColor:'red',
                data:fetchedStates4.map(({ count}) => count),
            }
           
            ],
          
           }}
           options={{
            title:{
              fontSize: 15,
              fontColor: "white",
              display: true,
              text: 'Casos confirmados/mortes por estados',
             },
            responsive: true,
             scales:{
              xAxes: [
                {
                  gridLines: {
                    color: '#44475a',
                    offsetGridLines: true
                },
                  display: true,
                  ticks: {
                    fontColor: "white"}
                }],
              yAxes: [
                  {
                    gridLines: {
                      color: '#44475a'
                  },
                  display: true,
                  ticks: {
                    fontColor: "white"}
                  }]
               },
             
             
               legend: {
                 display: true,
                 labels: {
                  fontColor: "white",
                  
              }}
           }}
           
          />
        ) : null
    );

    return(
      <div > 
         {barChart}
        </div>
      )
}
export default Charts;