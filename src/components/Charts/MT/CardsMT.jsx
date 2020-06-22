import React, {useState, useEffect} from 'react';
import {DadosMTFull} from '../../API/MT';
import {
    Card,
    CardBody,
  } from 'reactstrap';
  import NumberFormat from 'react-number-format';

const Cards = () =>{
    const [DadosMTFullfetched, setFetechedMTFull] = useState([])
    useEffect(() => {
      const fetchAPI = async () =>{
        setFetechedMTFull(await DadosMTFull());
      }
 
      fetchAPI();
    },[setFetechedMTFull]);
    //console.log(DadosMTFullfetched)

    

    var deathsDay = DadosMTFullfetched.map(({ new_deaths }) => new_deaths);
    const calcDoubleTimeDeaths = () => Math.round(7/((deathsDay[1]/deathsDay[8])/7))
     
    var infectedDay = DadosMTFullfetched.map(({ new_confirmed }) => new_confirmed);
    const calcDoubleTimeInfected = () => Math.round(7/((infectedDay[1]/infectedDay[8])/7))

    var confirmeds = DadosMTFullfetched.map(({  last_available_confirmed}) =>  last_available_confirmed);
    var lambda = (confirmeds[1]/confirmeds[8])/7
   // console.log(lambda)
    const calcr0 = () => (1 +(lambda/0.25)) * (1 + lambda)
    //console.log(calcr0().toFixed(2))

    return(
           <div > 
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              
                <div className="text-value">
                <NumberFormat value= {calcDoubleTimeDeaths()} displayType={'text'} thousandSeparator={true} />
                  </div>
                <div>Dias estimados para que o numeros de mortes dobre</div>
                <div className="text-value">
                R0:<NumberFormat value= {calcr0().toFixed(2)} displayType={'text'} thousandSeparator={true} />
                  </div>
                <div>R0 estimado, numero de pessoas que o infectado contamina</div>
              
              </CardBody>
             
            </Card>
          </div>
        )
}
export default Cards