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
  LineChartsMS,
  LineChartsMSDia,
  LineChartsMSConfRate,
  LineChartsMSLetal,
  //CardsMS,
  HBarChartsDistrictsInfMS,
  HBarChartsDistrictsDeathMS
} from '../../components';
//Como o arquivo é o index.js não precisa escreve-lo diretamente
import { DadosMSConfirmed,DadosMSDeceased} from '../../components/API/MS';
import { dateUpdate} from '../../components/API';


import Moment from 'react-moment';
//import NumberFormat from 'react-number-format';
import ReactCountUp from 'react-countup-v2';

import styles from './MatoGrossoDoSul.css';






class MatoGrossoDoSul extends Component {
  state = {
    DadosMSConfirmed: {},
    DadosMSDeceased :{},
    dateUpdate: {},
   
  
   }
   async componentDidMount() {

    const fetchedInfected = await DadosMSConfirmed();
    //console.log(fetchedInfected);
    this.setState({DadosMSConfirmed: fetchedInfected});

    const fetchedDeceased = await DadosMSDeceased ();
    //console.log(fetchedInfected);
    this.setState({DadosMSDeceased : fetchedDeceased});

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
    const { DadosMSConfirmed ,DadosMSDeceased,dateUpdate} = this.state
   // console.log(data)

   const calcDeathRate = () => ((DadosMSDeceased/DadosMSConfirmed)*100).toFixed(2)
  // const calcEstimateInfected = () => ((calcDeathRate() - 2 ) * DadosMSConfirmed ).toFixed(0)
   //const calcPercentPopulationInfected = () => ((calcEstimateInfected()/2778986)*100).toFixed(2)
   //const calcDoubleTimeDeaths = () => DadosMSFull.filter(el => el.new_deaths[1])
 


    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A'}}>
        

        <Row>
        <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              <div className="float-right">
                  <img src={require('../../assets/img/brand/MS.gif')} alt="MS" height='34' width='56'></img>
                </div>
                <div className="text-value">
                 Mato Grosso Do Sul 
                  </div>
                  
                <div>População estimada(2019):&nbsp;2.778.986</div>
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
                <ReactCountUp delay={10} endVal={DadosMSConfirmed} duration= {2.5} />
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
                <ReactCountUp delay={10} endVal={DadosMSDeceased} duration= {2.5} />
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
            <LineChartsMS></LineChartsMS>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsMSDia></LineChartsMSDia>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsMSConfRate></LineChartsMSConfRate>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsMSLetal></LineChartsMSLetal>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsDistrictsInfMS></HBarChartsDistrictsInfMS>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
           <HBarChartsDistrictsDeathMS></HBarChartsDistrictsDeathMS>
            </Card>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default MatoGrossoDoSul;


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
          <CardsMS></CardsMS>
          </Col>
          </Row>

 * 
   <Row >
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartMSInf></PieChartMSInf>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartMSDeat></PieChartMSDeat>
            </Card>
          </Col>
          </Row>



           <div>Segundo Instituto john Hopkins a mortalidade da covid-19 está entre 1 e 3% dependendo do país</div>
 */

// <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />
//  Letalidade:&nbsp;{((deceased*100)/infected).toFixed(2)} %