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
  Maps, 
 // Charts,
  LineChartBR,
 // LineChartBRState,
  LineChartBRStateRJ,
  LineChartBRStateES,
  LineChartBRStateSP,
  LineChartBRStateMG,
  LineChartBRStatePR,
  LineChartBRStateSC,
  LineChartBRStateRS,
  LineChartBRStateDF,
  LineChartBRStateGO,
  LineChartBRStateMT,
  LineChartBRStateMS,
  LineChartBRStateAL,
  LineChartBRStateBA,
  LineChartBRStateCE,
  LineChartBRStateMA,
  LineChartBRStatePB,
  LineChartBRStatePE,
  LineChartBRStatePI,
  LineChartBRStateRN,
  LineChartBRStateSE,
  LineChartBRStateAC,
  LineChartBRStateAP,
  LineChartBRStateAM,
  LineChartBRStatePA,
  LineChartBRStateRO,
  LineChartBRStateRR,
  LineChartBRStateTO,
  HBarChartsStatesInfected,
 // HBarChartsStatesNewInfected,
  HBarChartsStatesDeath,
 // HBarChartsStatesNewDeath,
 // HBarChartsStatesConfirmed100k,
 // HBarChartsStatesDeathRate,
 } from '../../components';
//Como o arquivo é o index.js não precisa escreve-lo diretamente
import { Infected,Deceased,Recovered,dateUpdate } from '../../components/API';


import Moment from 'react-moment';
//import NumberFormat from 'react-number-format';
import ReactCountUp from 'react-countup-v2';

import styles from './Dashboard.css';


 


class Dashboard extends Component {
  state = {
    infected: {},
    deceased: {},
    recovered : {},
    dateUpdate : {},
  
  
   }
   async componentDidMount() {

    const fetchedInfected = await Infected();
    //console.log(fetchedInfected);
    this.setState({infected: fetchedInfected});

    const fetchedDeceased = await Deceased();
    //console.log(fetchedDeceased);
    this.setState({deceased: fetchedDeceased});

    const fetchedRecovered = await Recovered();
   // console.log(fetchedRecovered);
    this.setState({recovered : fetchedRecovered});

    const fetchedDateUpdate = await dateUpdate();
    //console.log(fetchedDateUpdate);
    this.setState({dateUpdate : fetchedDateUpdate});

    
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
    const { infected,deceased, recovered,dateUpdate } = this.state
   // console.log(data)



    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A'}}>
        <Row>
          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              <div className="float-right">
                  <img src={require('../../assets/img/brand/bacteria.png')} alt="Infected" height='40' width='40'></img>
                </div>
                <div className="text-value">
                <ReactCountUp delay={10} endVal={infected} duration= {2.5} />
                  </div>
                <div><h5>Casos Confirmados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                {dateUpdate}
               </Moment>
                </div>
                <br></br>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(85, 187, 246, 0.2)', borderColor: '#8fccf7'}}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
              <div className="float-right">
                  <img src={require('../../assets/img/brand/box.png')} alt="Death" height='40' width='40'></img>
                </div>
                <div className="text-value">
                <ReactCountUp delay={10} endVal={deceased} duration= {2.5} />
                  </div>
                <div><h5>Mortes</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                {dateUpdate}
               </Moment>
                </div>
                <div>
                Letalidade:&nbsp;{((deceased*100)/infected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: '#f5273c'}}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white" style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
              <div className="float-right">
                  <img src={require('../../assets/img/brand/tools-and-utensils.png')} alt="Recovered" height='40' width='40'></img>
                </div>
                <div className="text-value">
                <ReactCountUp delay={10} endVal={recovered} duration= {2.5} />
                
                  </div>
                <div><h5>Recuperados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                {dateUpdate}
               </Moment>
                </div>
                <div>
                Taxa de Recuperação:&nbsp;{((recovered*100)/infected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(99, 234, 97, 0.2)', borderColor: '#2cde1f' }}></CardFooter>
            </Card>
          </Col>

         
        </Row>
       
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
                <Maps ></Maps>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBR></LineChartBR>
            </Card>
          </Col>
        </Row>
       
       
       
        



      </div>
    );
  }
}

export default Dashboard;

// <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />

/**
 
 <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRState></LineChartBRState>
            </Card>
          </Col>
        </Row>


         <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <Charts  ></Charts>
            </Card>
          </Col>
        </Row>
            <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsStatesNewDeath></HBarChartsStatesNewDeath>
            </Card>
          </Col>
           <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsStatesNewInfected></HBarChartsStatesNewInfected>
            </Card>
          </Col>


           <Row>
           <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsStatesInfected></HBarChartsStatesInfected>
            </Card>
          </Col>
           <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsStatesDeath></HBarChartsStatesDeath>
            </Card>
          </Col>
      
        </Row>


        
        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateRJ ></LineChartBRStateRJ >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateES></LineChartBRStateES>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateSP></LineChartBRStateSP>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateMG ></LineChartBRStateMG >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStatePR></LineChartBRStatePR>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateSC></LineChartBRStateSC>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateRS ></LineChartBRStateRS >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateDF></LineChartBRStateDF>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateGO></LineChartBRStateGO>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateMT ></LineChartBRStateMT >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateMS></LineChartBRStateMS>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateAL></LineChartBRStateAL>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateBA ></LineChartBRStateBA >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateCE></LineChartBRStateCE>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateMA></LineChartBRStateMA>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStatePB ></LineChartBRStatePB >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStatePE></LineChartBRStatePE>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStatePI></LineChartBRStatePI>
            </Card>
          </Col>
        </Row>
       
        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateRN></LineChartBRStateRN >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateSE></LineChartBRStateSE>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateAC></LineChartBRStateAC>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateAP></LineChartBRStateAP >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateAM></LineChartBRStateAM>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStatePA></LineChartBRStatePA>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateRO ></LineChartBRStateRO >
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateRR></LineChartBRStateRR>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRStateTO></LineChartBRStateTO>
            </Card>
          </Col>
        </Row>

        
 */