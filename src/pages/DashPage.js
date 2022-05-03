import React from 'react';
import Page from 'components/Page';
import 'styles/components/_dash.scss';
import FadeIn from 'components/FadeIn';
import Row from 'reactstrap/lib/Row';
import logo1 from "assets/img/logo/logo_1.png"
import logo2 from "assets/img/logo/logo_2.png"
import logo3 from "assets/img/logo/logo_3.png"
import { NumberWidget, IconWidget } from 'components/Widget';
import CardContent from '@mui/material/CardContent';
import DoughnutChart from 'components/Graphs/DoughnutChart'
import BarChart from 'components/Graphs/BarChart'
import BarChartJournal from 'components/Graphs/BarChartJournal'
import PieChart from 'components/Graphs/PieChart'
import TopicsChart from 'components/Graphs/TopicsChart'
import {
    Card,
    Col,
    CardImg,
    
  } from 'reactstrap';

class DashPage extends React.Component {


  constructor() {
    super();
  }

  


  

  render() {
  return (
    <Page>
    <Row >
    <div style={{backgroundImage:'linear-gradient(#ffd639, white)', width:"100%"}}>
    <FadeIn delay="400">
    <p className="dashTitle">Resultados</p>
    <p className="dashTitleSubheading">
        Análise e visualização dos resultados obtidos pelo melhor algoritmo de classificação e modelo de <i>topic modeling</i>.
      </p>
    </FadeIn>
    <FadeIn delay="800">
    <Row>
     
            <Card className='dashCard1'>
                <CardContent>
                    <Row>
                    <CardImg src={logo2} style={{width:"80px", marginTop:"20px", marginLeft:"35px"}}/>
                    <p className="dashCard2Title">9</p>
                    <p className="dashCardSubtitle"> Jornais analisados </p>
                    </Row>
                </CardContent>
            </Card>
            <Card className='dashCard1'>
                <CardContent>
                    <Row>
                    <CardImg src={logo1} style={{width:"80px", marginTop:"20px", marginLeft:"35px"}}/>
                    <p className="dashCardTitle">978 </p>
                    <p className="dashCardSubtitle">Artigos recolhidos </p>
                    </Row>
                </CardContent>
            </Card>
            <Card className='dashCard3'>
                <CardContent>
                    <Row>
                    <CardImg src={logo3} style={{width:"90px",height:"75px", marginTop:"0px", marginLeft:"45px"}}/>
                    <p className="dashCard3Title">10</p>
                    <p className="dashCard3Subtitle"> Algoritmos de Inteligência Artificial</p>
                    <NumberWidget
                      number=""
                      progress={{
                        value: 93,
                        label: 'Precisão e exatidão do melhor algoritmo de classificação',
                      }}
                    />
                    </Row>
                </CardContent>
            </Card>
    </Row>
      </FadeIn>
      <FadeIn delay="1200">
    <Col>
     
              <Card className="dashCard2">
                <Row>
                <p className="titleGraph">Todos os artigos</p>
                <p className="subtitleGraph">Classificação do sentido de todos os artigos e agrupamento por ano de arquivamento no Arquivo.pt</p>
                </Row>
                <Row>
                <DoughnutChart height="500px"
                                    color={[
                                        "red",
                                        "black",]}>
                </DoughnutChart>
                <BarChart>

                </BarChart>
                </Row>
                </Card>

                <Card className="dashCard2">
                  
                  <p className="titleGraph">Artigos por jornal</p>

                  <p className="subtitleGraph">Classificação do sentido dos artigos por jornal</p>
                  
                  <BarChartJournal></BarChartJournal>
                  <Row>
                  <p className="subtitleGraph">Artigos </p>
                  <p className="subtitleGraphSpecial">estigmatizantes</p> 
                  <p className="subtitleGraphEnd">por jornal e sua evolução ao longo dos anos</p>
                  </Row>
                  <Row>
                    <PieChart></PieChart>
                  </Row>
                  </Card>

                                    
             <Card className="dashCard2">
                <Row>
                <p className="titleGraph">Artigos por tópico</p>

                <p className="subtitleGraph">Agrupamento dos artigos classificados por tópico detetado</p>
                </Row>
                <div style={{marginTop:"50px"}}>
                <TopicsChart></TopicsChart>
                </div>
                </Card>
              
      </Col>
     

    </FadeIn>
    </div>
    </Row>
    </Page>
  );
  }
}


export default DashPage;

