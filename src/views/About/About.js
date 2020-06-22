import React, { Component} from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Row,
} from 'reactstrap';




import styles from './About.css';

class About extends Component {


  render() {
    return (
      <div className="animated fadeIn" style={{ backgroundColor: '#13131A'}}>
        

        <Row>
         <Col>
            <Card className="text-white " style={{ backgroundColor: '#2F353A', borderColor: 'rgba(94, 128, 237, 0.2)' }}>
              <CardBody className="pb-4"  >
             <div>Sistema desenvolvido para fins de estudo, não devendo ser usado como unica fonte de informações
               sobre a pandemia de COVID-19, para informações oficias visite do Ministério da Saude: <a href="https://covid.saude.gov.br/">Coronavírus Brasil</a>
               <br></br>
               <br></br>
               Fontes:
               <br></br>
               <a href="https://brasil.io/dataset/covid19/caso/">Boletins informativos e casos do coronavírus por município por dia</a><br></br>
               <a href="https://github.com/mathdroid/covid-19-api">COVID-19 global data (from JHU CSSE for now) as-a-service - mathdroid</a><br></br>
               <a href="https://covid19api.com/">A free API for data on the Coronavirus - Kyle Redelinghuys</a><br></br>
               <a href="https://covid19-api.org/">Free COVID-19 API</a><br></br>
               <br></br>
           
               
             </div>
               
              </CardBody>
              <CardFooter style={{ backgroundColor: 'rgba(236, 246, 249, 0.5)', borderColor: '#ecf6f9'}}></CardFooter>
            </Card>
          </Col>
        
          </Row>

       
      </div>
    );
  }
}

export default About;


