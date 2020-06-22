import React, { Component} from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Row,
} from 'reactstrap';




///////
import {
  LineChartsPI,
  LineChartsPIDia,
  LineChartsPIConfRate,
  LineChartsPILetal,
 // CardsPI,
  HBarChartsDistrictsInfPI,
  HBarChartsDistrictsDeathPI
} from '../../components';
//Como o arquivo é o index.js não precisa escreve-lo diretamente
import { DadosPIConfirmed,DadosPIDeceased} from '../../components/API/PI';
import { dateUpdate} from '../../components/API';


import Moment from 'react-moment';
//import NumberFormat from 'react-number-format';
import ReactCountUp from 'react-countup-v2';

import styles from './Piaui.css';






class Piaui extends Component {
  state = {
    DadosPIConfirmed: {},
    DadosPIDeceased :{},
    dateUpdate: {},
   
  
   }
   async componentDidMount() {

    const fetchedInfected = await DadosPIConfirmed();
    //console.log(fetchedInfected);
    this.setState({DadosPIConfirmed: fetchedInfected});

    const fetchedDeceased = await DadosPIDeceased ();
    //console.log(fetchedInfected);
    this.setState({DadosPIDeceased : fetchedDeceased});

    const fetcheddateUpdate = await dateUpdate ();
    //console.log(fetcheddateUpdate);
    this.setState({dateUpdate: fetcheddateUpdate});
    
    
}

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
//infected: 101147, deceased: 7025, lastUpdatedAtSource:


  render() {
    const { DadosPIConfirmed ,DadosPIDeceased,dateUpdate} = this.state
   // console.log(data)

   const calcDeathRate = () => ((DadosPIDeceased/DadosPIConfirmed)*100).toFixed(2)
   //const calcEstimateInfected = () => ((calcDeathRate() - 2 ) * DadosPIConfirmed ).toFixed(0)
  // const calcPercentPopulationInfected = () => ((calcEstimateInfected()/3273227	)*100).toFixed(2)
   //const calcDoubleTimeDeaths = () => DadosPIFull.filter(el => el.new_deaths[1])
 


    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A'}}>
        

        <Row>
        <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              <div className="float-right">
                  <img src={require('../../assets/img/brand/PI.gif')} alt="PI" height='34' width='56'></img>
                </div>
                <div className="text-value">
                Piauí
                  </div>
                  
                <div>População estimada(2019):&nbsp;3.273.227	 </div>
                <br></br>
                <br></br>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(236, 246, 249, 0.5)', borderColor: '#ecf6f9'}}></CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              <div className="float-right">
                  <img src={require('../../assets/img/brand/bacteria.png')} alt="Infected" height='40' width='40'></img>
                </div>
                <div className="text-value">
                <ReactCountUp delay={10} endVal={DadosPIConfirmed} duration= {2.5} />
                  </div>
                <div><h5>Casos Confirmados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                {dateUpdate}
               </Moment>
                </div>
                <br></br>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(85, 187, 246, 0.2', borderColor: '#8fccf7'}}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
              <div className="float-right">
                  <img src={require('../../assets/img/brand/box.png')} alt="Death" height='40' width='40'></img>
                </div>
                <div className="text-value">
                <ReactCountUp delay={10} endVal={DadosPIDeceased} duration= {2.5} />
                  </div>
                <div><h5>Mortes</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                {dateUpdate}
               </Moment>
                </div>
                <div>
                Letalidade:&nbsp;{calcDeathRate()} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: '#f5273c'}}></CardFooter>
            </Card>
          </Col>
          </Row>

        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsPI></LineChartsPI>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsPIDia></LineChartsPIDia>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsPIConfRate></LineChartsPIConfRate>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsPILetal></LineChartsPILetal>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsDistrictsInfPI></HBarChartsDistrictsInfPI>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
           <HBarChartsDistrictsDeathPI></HBarChartsDistrictsDeathPI>
            </Card>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default Piaui;


/**

        
        <Row>
        <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              
                <div className="text-value">
                <NumberFormat value= {calcEstimateInfected()} displayType={'text'} thousandSeparator={true} />
                  </div>
                <div>Número casos estimado para um índice de letalidade de 2%</div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
                <div className="text-value">
                 {calcPercentPopulationInfected()}%
                  </div>
               <div>Porcentagem da população infectada no estado para uma letalidade de 2%</div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" lg="4">
          <CardsPI></CardsPI>
          </Col>
          </Row>

         
 * 
 * 
   <Row >
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartPIInf></PieChartPIInf>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartPIDeat></PieChartPIDeat>
            </Card>
          </Col>
          </Row>



           <div>Segundo Instituto john Hopkins a mortalidade da covid-19 está entre 1 e 3% dependendo do país</div>
 */

// <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />
//  Letalidade:&nbsp;{((deceased*100)/infected).toFixed(2)} %