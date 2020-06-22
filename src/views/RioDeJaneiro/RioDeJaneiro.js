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
  LineChartsRJ,
  LineChartsRJDia,
  LineChartsRJConfRate,
  LineChartsRJLetal,
  //CardsRJ,
  HBarChartsDistrictsInfRJ,
  HBarChartsDistrictsDeathRJ
} from '../../components';
//Como o arquivo é o index.js não precisa escreve-lo diretamente
import { DadosRJConfirmed,DadosRJDeceased} from '../../components/API/RJ';
import { dateUpdate} from '../../components/API';


import Moment from 'react-moment';
//import NumberFormat from 'react-number-format';
import ReactCountUp from 'react-countup-v2';

import styles from './RioDeJaneiro.css';






class RioDeJaneiro extends Component {
  state = {
    DadosRJConfirmed: {},
    DadosRJDeceased :{},
    dateUpdate: {},
   
  
   }
   async componentDidMount() {

    const fetchedInfected = await DadosRJConfirmed();
    //console.log(fetchedInfected);
    this.setState({DadosRJConfirmed: fetchedInfected});

    const fetchedDeceased = await DadosRJDeceased ();
    //console.log(fetchedInfected);
    this.setState({DadosRJDeceased : fetchedDeceased});

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
    const { DadosRJConfirmed ,DadosRJDeceased,dateUpdate} = this.state
   // console.log(data)

   const calcDeathRate = () => ((DadosRJDeceased/DadosRJConfirmed)*100).toFixed(2)
   //const calcEstimateInfected = () => ((calcDeathRate() - 2 ) * DadosRJConfirmed ).toFixed(0)
   //const calcPercentPopulationInfected = () => ((calcEstimateInfected()/17264943)*100).toFixed(2)
   //const calcDoubleTimeDeaths = () => DadosRJFull.filter(el => el.new_deaths[1])
 


    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A'}}>
        

        <Row>
        <Col xs="12" sm="4" lg="4">
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
              <div className="float-right">
                  <img src={require('../../assets/img/brand/RJ.gif')} alt="RJ" height='34' width='56'></img>
                </div>
                <div className="text-value">
                Rio De Janeiro 
                  </div>
                  
                <div>População estimada(2019):&nbsp;17.264.943 </div>
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
                <ReactCountUp delay={10} endVal={DadosRJConfirmed} duration= {2.5} />
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
                <ReactCountUp delay={10} endVal={DadosRJDeceased} duration= {2.5} />
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
            <LineChartsRJ></LineChartsRJ>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsRJDia></LineChartsRJDia>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsRJConfRate></LineChartsRJConfRate>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <LineChartsRJLetal></LineChartsRJLetal>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <HBarChartsDistrictsInfRJ></HBarChartsDistrictsInfRJ>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="6">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
           <HBarChartsDistrictsDeathRJ></HBarChartsDistrictsDeathRJ>
            </Card>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default RioDeJaneiro;


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
          <CardsRJ></CardsRJ>
          </Col>
          </Row>

 * 
 * 
   <Row >
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartRJInf></PieChartRJInf>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Card style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)'}}>
            <PieChartRJDeat></PieChartRJDeat>
            </Card>
          </Col>
          </Row>



           <div>Segundo Instituto john Hopkins a mortalidade da covid-19 está entre 1 e 3% dependendo do país</div>
 */

// <NumberFormat value={recovered} displayType={'text'} thousandSeparator={true} />
//  Letalidade:&nbsp;{((deceased*100)/infected).toFixed(2)} %