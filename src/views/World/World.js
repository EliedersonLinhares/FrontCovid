import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Row,
} from 'reactstrap';


///////
import {
  LineChartUSAInf,
 // LineChartBRInf,
  LineChartRUInf,
  //LineChartCAInf,
 // LineChartMEInf,
 // LineChartESInf,
 // LineChartFRInf,
 // LineChartGEInf,
  LineChartIDInf,
 // LineChartIRInf,
//  LineChartITInf,
//  LineChartPEInf,
//  LineChartSAInf,
//  LineChartTUInf,
//  LineChartUKInf,
  LineChartWorld,
} from '../../components';
//Como o arquivo é o index.js não precisa escreve-lo diretamente
import { dateUpdate } from '../../components/API';
import { WorldInfected, WorldDeceased, WorldRecovered } from '../../components/API/WO'


import Moment from 'react-moment';
//import NumberFormat from 'react-number-format';
import ReactCountUp from 'react-countup-v2';

import styles from './World.css';





class World extends Component {
  state = {

    dateUpdate: {},
    worldinfected: {},
    worldDeceased: {},
    worldRecovered: {},


  }
  async componentDidMount() {

    const fetchedDateUpdate = await dateUpdate();
    //console.log(fetchedDateUpdate);
    this.setState({ dateUpdate: fetchedDateUpdate });


    const fetchedWorldInfected = await WorldInfected();
    //console.log(fetchedWorldInfected);
    this.setState({ worldinfected: fetchedWorldInfected });

    const fetchedWorldDeceased = await WorldDeceased();
    //console.log(fetchedWorldDeceased);
    this.setState({ worldDeceased: fetchedWorldDeceased });

    const fetchedWorldRecovered = await WorldRecovered();
    //console.log(fetchedWorldRecovered);
    this.setState({ worldRecovered: fetchedWorldRecovered });



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
    const { dateUpdate, worldinfected, worldDeceased, worldRecovered } = this.state
    // console.log(data)



    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A' }}>
       <Row>
          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
                <div className="float-right">
                  <img src={require('../../assets/img/brand/bacteria.png')} alt="Infected" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp delay={10} endVal={worldinfected} duration={2.5} />
                </div>
                <div><h5>Casos Confirmados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <br></br>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(85, 187, 246, 0.2)', borderColor: '#8fccf7' }}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
                <div className="float-right">
                  <img src={require('../../assets/img/brand/box.png')} alt="Death" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp delay={10} endVal={worldDeceased} duration={2.5} />
                </div>
                <div><h5>Mortes</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <div>
                  Letalidade:&nbsp;{((worldDeceased * 100) / worldinfected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: '#f5273c' }}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white" style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
                <div className="float-right">
                  <img src={require('../../assets/img/brand/tools-and-utensils.png')} alt="Recovered" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp  endVal={worldRecovered} duration={2.5} />

                </div>
                <div><h5>Recuperados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <div>
                  Taxa de Recuperação:&nbsp;{((worldRecovered * 100) / worldinfected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(99, 234, 97, 0.2)', borderColor: '#2cde1f' }}></CardFooter>
            </Card>
          </Col>
        </Row>


       <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartWorld></LineChartWorld>
            </Card>
          </Col>
        </Row>
       

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartUSAInf></LineChartUSAInf>
            </Card>
          </Col>
          
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartIDInf></LineChartIDInf>
            </Card>
          </Col>
          
       
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartRUInf></LineChartRUInf>
            </Card>
          </Col>
        </Row>

        




      </div>
    );
  }
}

export default World;

// <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />

/**

 <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartBRState></LineChartBRState>
            </Card>
          </Col>
        </Row>



        <i className="flag-icon flag-icon-br h1" title="br" id="br"></i>






 <Row>
          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
                <div className="float-right">
                  <img src={require('../../assets/img/brand/bacteria.png')} alt="Infected" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp delay={10} endVal={worldinfected} duration={2.5} />
                </div>
                <div><h5>Casos Confirmados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <br></br>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(85, 187, 246, 0.2)', borderColor: '#8fccf7' }}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
                <div className="float-right">
                  <img src={require('../../assets/img/brand/box.png')} alt="Death" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp delay={10} endVal={worldDeceased} duration={2.5} />
                </div>
                <div><h5>Mortes</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <div>
                  Letalidade:&nbsp;{((worldDeceased * 100) / worldinfected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)', borderColor: '#f5273c' }}></CardFooter>
            </Card>
          </Col>

          <Col xs="12" sm="4" lg="4">
            <Card className="text-white" style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4">
                <div className="float-right">
                  <img src={require('../../assets/img/brand/tools-and-utensils.png')} alt="Recovered" height='40' width='40'></img>
                </div>
                <div className="text-value">
                  <ReactCountUp  endVal={worldRecovered} duration={2.5} />

                </div>
                <div><h5>Recuperados</h5></div>
                <div>Última Atualização:&nbsp;
                <Moment format="DD/MM/YYYY">
                    {dateUpdate}
                  </Moment>
                </div>
                <div>
                  Taxa de Recuperação:&nbsp;{((worldRecovered * 100) / worldinfected).toFixed(2)} %
                </div>
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(99, 234, 97, 0.2)', borderColor: '#2cde1f' }}></CardFooter>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <HBarChartsCountriesInfected></HBarChartsCountriesInfected>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <HBarChartsCountriesNewInf ></HBarChartsCountriesNewInf>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <HBarChartsCountriesDeath></HBarChartsCountriesDeath>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <HBarChartsCountriesNewDeath></HBarChartsCountriesNewDeath>
            </Card>
          </Col>
        </Row>


 */

 /**
  <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartITInf></LineChartITInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartUKInf></LineChartUKInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartFRInf></LineChartFRInf>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartGEInf></LineChartGEInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartCAInf></LineChartCAInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartESInf></LineChartESInf>
            </Card>
          </Col>
        </Row>

        
        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartTUInf></LineChartTUInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartSAInf></LineChartSAInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartIRInf></LineChartIRInf>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartMEInf></LineChartMEInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartIDInf></LineChartIDInf>
            </Card>
          </Col>
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <LineChartPEInf></LineChartPEInf>
            </Card>
          </Col>
        </Row>
           
          <Col Col xs="12" sm="4" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
            
              <LineChartBRInf></LineChartBRInf>
            </Card>
          </Col>
  */