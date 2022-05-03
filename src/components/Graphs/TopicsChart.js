import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import topic0 from "assets/img/topics/topic0.png";
import topic1 from "assets/img/topics/topic1.png";
import topic2 from "assets/img/topics/topic2.png";
import topic3 from "assets/img/topics/topic3.png";
import topic4 from "assets/img/topics/topic4.png";
import topic5 from "assets/img/topics/topic5.png";
import topic6 from "assets/img/topics/topic6.png";
import topic7 from "assets/img/topics/topic7.png";
import topic8 from "assets/img/topics/topic8.png";
import topic9 from "assets/img/topics/topic9.png";
import 'styles/components/_topics.scss';
import ReactEcharts from 'echarts-for-react'
import {
  Col,
  CardImg,
  Table,
  Button,
} from 'reactstrap';
import FadeIn from 'components/FadeIn';
import Row from 'reactstrap/lib/Row';

export default function TopicsChart() {
  const [value, setValue] = React.useState('0');
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tópico 0" value="0" />
            <Tab label="Tópico 1" value="1" />
            <Tab label="Tópico 2" value="2" />
            <Tab label="Tópico 3" value="3" />
            <Tab label="Tópico 4" value="4" />
            <Tab label="Tópico 5" value="5" />
            <Tab label="Tópico 6" value="6" />
            <Tab label="Tópico 7" value="7" />
            <Tab label="Tópico 8" value="8" />
            <Tab label="Tópico 9" value="9" />
          </TabList>
        </Box>

        
        <TabPanel value="0">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
             <Row>
            <p className="topicsTitle">Saúde</p><a className="topicsTitle2">232 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema da Medicina e Saúde.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {

                        color: "#06d6a0",
                        data: [13,219],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic0} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
           
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            
                <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido </p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Roche pronta a abrir produção de Tamiflu à concorrência</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20080321022421/http://jn.sapo.pt/2005/10/19/sociedade/roche_pronta_a_abrir_producao_tamifl.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Surfistas querem pôr fim à “esquizofrenia que reina na costa”</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200621223245/https://expresso.pt/sociedade/2020-06-03-Surfistas-querem-por-fim-a-esquizofrenia-que-reina-na-costa", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Pais temem riscos de cancro em pavilhão de escola em Braga</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20011019141236/http://jn.pt/textos/textho3.asp", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Consumo de canábis e esquizofrenia têm uma forte relação genética</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180906170500/https://expresso.sapo.pt/sociedade/2018-09-06-Consumo-de-canabis-e-esquizofrenia-tem-uma-forte-relacao-genetica", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Esquizofrenia pode resultar de alteração num gene</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20050222185813/http://jn.sapo.pt/2005/02/22/sociedade/esquizofrenia_pode_resultar_alteraca.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Internamentos por surto psicótico em consumidores de canábis aumentou</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20191217201415/https://expresso.pt/sociedade/2019-12-17-Internamentos-por-surto-psicotico-em-consumidores-de-canabis-aumentou", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
        </TabPanel>
        

        <TabPanel value="1">
        <FadeIn delay="300">
        <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Crime</p><a className="topicsTitle2">158 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema de crimes.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [13, 145],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic1} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido </p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>"Canibal de Rotemburgo" não é inimputável</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20040206130601/http://jornal.publico.pt/2004/01/24/Sociedade/S80.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>John McAfee condenado a pagar 25 milhões de dólares por tortura e homicídio de vizinho</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200122013240/https://visao.sapo.pt/exameinformatica/noticias-ei/insolitos/2019-03-21-john-mcafee-condenado-a-pagar-25-milhoes-de-dolares-por-tortura-e-homicidio-de-vizinho/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Viúva negra da Côte d’Azur (que envenenava homens em série) condenada a 22 anos de prisão</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180121082547/http://observador.pt/2018/01/19/viuva-negra-da-cote-dazur-que-envenenava-homens-em-serie-condenada-a-22-anos-de-prisao/amp/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Doente esquizofrénico mata amigo mas pode ser inimputável</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20160120072223/http://www.cmjornal.xl.pt/multimedia/videos/detalhe/doente_esquizofrenico_mata_amigo_mas_pode_ser_inimputavel.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>MP considera inimputável homem que atirou criança de um 2.º andar</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20170801181840/http://expresso.sapo.pt/sociedade/2017-07-31-MP-considera-inimputavel-homem-que-atirou-crianca-de-um-2.-andar", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Tribunal da Guarda condena mulher a 18 anos de prisão por ter matado o filho</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180712165935/https://www.cmjornal.pt/portugal/amp/20180712_0930_tribunal-da-guarda-condena-mulher-a-18-anos-de-prisao-por-ter-matado-o-filho", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
        </TabPanel>
        
        <TabPanel value="2">
        <FadeIn delay="300">
        <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Cinema</p><a className="topicsTitle2">112 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema do entretenimento, particularmente do Cinema.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [61, 51],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic2} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido </p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Cinema em Casa</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010930064316/http://jornal.publico.pt/publico/2001/09/30/Media/R04.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Cinema em Casa</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20020805013624/http://jornal.publico.pt/2002/07/11/Media/R06.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>O Gosto dos Outros</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20031011042907/http://jornal.publico.pt/2003/10/09/Media/R60.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Legendas</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20011101230624/http://jornal.publico.pt/2001/10/01/Publica/TM03CX01.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Cinema em Casa</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010809180720/http://jornal.publico.pt/2001/08/01/Media/R10.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Dennis Hopper (1936-2010) Dos dois lados da câmara</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20100602183733/http://jornal.publico.pt/noticia/30-05-2010/dennis-hopper-19362010--dos-dois-lados-da-camara-19511777.htm", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
        </TabPanel>

        <TabPanel value="3">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Economia</p><a className="topicsTitle2">92 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema da Economia.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [89, 3],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic3} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Passos e Monti defendem crescimento, mas sem descuidar disciplina orçamental</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20120229202210/http://economia.publico.pt/Noticia/passos-e-monti-defendem-crescimento-mas-sem-descuidar-disciplina-orcamental--1535875", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>O OE 2013 visto pelo FMI</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20121016154120/http://economia.publico.pt/Opiniao/Detalhe/o-oe-2013-visto-pelo-fmi--1567450", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>A esquizofrenia da austeridade</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20100927055254/http://jn.sapo.pt/Opiniao/default.aspx?content_id=1610142&opiniao=M%E1rio%20Mesquita", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Capitulação do bom senso</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20190618160106/https://observador.pt/opiniao/capitulacao-do-bom-senso/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Senhor do Bonfim abre em janeiro em Vila do Conde</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20141122034601/http://expresso.sapo.pt/senhor-do-bonfim-abre-em-janeiro-em-vila-do-conde=f898940", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>O supermercado PC</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200905181559/https://observador.pt/opiniao/o-supermercado-pc/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>


        <TabPanel value="4">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Conflitos militares</p><a className="topicsTitle2">85 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema dos conflitos militares.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [79, 6],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic4} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Putin diz que está preparado para divulgar gravação da conversa entre Trump e Lavro</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20170520054256/http://expresso.sapo.pt/internacional/2017-05-17-Putin-diz-que-esta-preparado-para-divulgar-gravacao-da-conversa-entre-Trump-e-Lavrov", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Paquistão, aliado dos taliban, promete colaborar com os EUA</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20030930090109/http://dossiers.publico.pt/atentado_estados_unidos/html/01_paquistao_aliado.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Paquistão, aliado dos taliban, promete colaborar com os EUA</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010914064032/http://jornal.publico.pt/publico/2001/09/14/Destaque/X30.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Ameaça de bomba em voo da Air France na Argentina</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20190717184315/https://observador.pt/2019/06/28/ameaca-de-bomba-em-voo-da-air-france-na-argentina/amp/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Fúrias de Lincoln causadas por comprimidos para a depressão</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010728064108/http://jornal.publico.pt/publico/2001/07/28/Terra/THTUBO01.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Deportado para o Iraque, onde nunca tinha estado, diabético morre dois meses depois</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20190811195731/https://expresso.pt/internacional/2019-08-09-Deportado-para-o-Iraque-onde-nunca-tinha-estado-diabetico-morre-dois-meses-depois-1", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>


        <TabPanel value="5">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Política</p><a className="topicsTitle2">80 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema da Política.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [77, 3],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic5} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Comissão política do PSD reúne-se terça-feira para discutir moção de censura do BE</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20110212173517/http://digital.publico.pt/Pol%C3%ADtica/comissao-politica-do-psd-reunese-tercafeira-para-discutir-mocao-de-censura-do-be_1479868", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>PSD decide hoje sobre moção de censura</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20110216175212/http://digital.publico.pt/Pol%C3%ADtica/psd-decide-hoje-sobre-mocao-de-censura_1480387", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>PSD decide voto esta terça-feira</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20110215224022/http://www.sabado.pt/Ultima-hora/Politica/PSD-decide-voto-esta-terca-feira.aspx", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Líder do Podemos usa imagem do vilão Joker depois de ser chamado de palhaço</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200514070825/https://observador.pt/2020/05/11/lider-do-podemos-usa-imagem-do-vilao-joker-depois-de-ser-chamado-de-palhaco/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>A impureza de Pureza</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20190209182314/https://observador.pt/opiniao/a-impureza-de-pureza/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>“Bela, recatada e do lar.” Quando o impeachment virou debate sobre o machismo</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20160430001453/http://observador.pt/2016/04/21/bela-recatada-do-lar-impeachment-virou-debate-machismo/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>


        <TabPanel value="6">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Literatura</p><a className="topicsTitle2">70 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema da Literatura.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [44, 26],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic6} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Inquérito os meus livros</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20030204153958/http://jornal.publico.pt/publico/2003/02/01/magoo/MilFolhas/TLLIV06.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>"Kiuba é veri bonita, ou seja muito priti, underestan?"</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20021023144138/http://jornal.publico.pt/2002/10/19/MilFolhas/TLFIC06.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>As Mulheres de Hemingway</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20021016103816/http://www.publico.clix.pt/docs/cmf/autores/ernestHemingway/mulheres.htm", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>A circe irlandesa</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010106064028/http://www.expresso.pt/ed1471/c171.asp", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Einmar Mar Gudmundsson - Além do bacalhau</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010710112057/http://jornal.publico.pt/publico/2001/06/09/sotexto/MilFolhas/TLFIC01CX02.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>O escritor que foi apagado pelos nazis</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200511134743/https://observador.pt/especiais/o-escritor-que-foi-apagado-pelos-nazis/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>


        <TabPanel value="7">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Música</p><a className="topicsTitle2">70 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema do entretenimento, particulamente da Música.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [63, 7],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic7} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>O som do futuro que vem do passado no regresso dos LCD Soundsystem a Lisboa</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180621020420/http://visao.sapo.pt/actualidade/visaose7e/ver/2018-06-15-O-som-do-futuro-que-vem-do-passado-no-regresso-dos-LCD-Soundsystem-a-Lisboa", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>'The Art of Slowing Down', de Slow J: Devagar se vai ao longe</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20170519211309/http://visao.sapo.pt/actualidade/visaose7e/livros-e-discos/2017-05-09-The-Art-of-Slowing-Down-de-Slow-J-Devagar-se-vai-ao-longe", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>na Cama com...</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20030501190538/http://jornal.publico.pt/publico/2003/04/18/magoo/Y/TADES01CX01.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>A música é o meu retrato</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20010708215208/http://jn.pt/textos/out5085.asp", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>"SYSTEM", novo álbum de ProfJam fica disponível hoje</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200729052839/https://observador.pt/2020/06/26/system-novo-album-de-profjam-fica-disponivel-hoje/amp/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Guitarrista e fundador da banda Fleetwood Mac, Peter Green, morreu aos 73 anos</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20200802034935/https://observador.pt/2020/07/25/guitarrista-e-fundador-da-banda-fleetwood-mac-morreu-aos-73-anos/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>


        <TabPanel value="8">
        <FadeIn delay="300">
        <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Desporto</p><a className="topicsTitle2">41 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema do Desporto.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [37, 4],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic8} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Quaresma não devia regressar no meio de tanta esquizofrenia</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20100904150907/http://jornal.publico.pt/noticia/04-09-2010/quaresma-nao-devia-regressar-no-meio-de-tanta-esquizofrenia-20142250.htm", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Treinador do Sporting de Braga espanta "psicose" Rio Ave... </td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20140926223822/http://www.jn.pt/PaginaInicial/Desporto/Interior.aspx?content_id=4146632&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JN-DESPORTO+%28JN+-+Desporto%29", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>O treinador Tuck e o Sacavenense</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20181016150806/https://abola.pt/Imprimir/641024", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Desporto em Santarém para angariar fundos</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20110106233725/http://dn.sapo.pt/inicio/portugal/interior.aspx?content_id=1749510&seccao=Centro", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Curso de Psicopatologia aproxima profissionais dos doentes psicóticos</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180405090308/https://www.jn.pt/nacional/especial-patrocinado/videos/interior/curso-de-psicopatologia-aproxima-profissionais-dos-doentes-psicoticos-9187581.html?autoplay=true", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Será que ser bilingue mantém o cérebro em forma?</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20160911015145/http://observador.pt/especiais/sera-que-ser-bilingue-mantem-o-cerebro-em-forma/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
        </TabPanel>


        <TabPanel value="9">
        <FadeIn delay="300">
          <Row>
            <div style={{width: "700px"}}>
             
            <Row>
            <p className="topicsTitle">Justiça</p><a className="topicsTitle2">38 artigos</a>
            </Row>
            <p className="topicsSubtitle">Tendo em conta os 50 termos mais descritivos,  detetados automaticamente, os artigos pertencentes a este tópico parecem abordar o tema da Justiça.</p>
            <ReactEcharts
                option={({
                  xAxis: {
                      type: 'category',
                      data: ['Estigmatizante', 'Literal'],                  
                    },
                    yAxis: {
                      type: 'value',
                      name: "Quantidade"
                    },
                    series: [
                      {
                        color: "#06d6a0",
                        data: [34, 4],
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                          borderRadius: 10,
                          borderColor: 'black',
                          borderWidth: 2
                        },
                      }
                    ],
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      textStyle: {
                        fontSize: 16,
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                      },
                    },
                })}
                style={{ height: "320px", width: "380px", marginLeft:"80px", marginTop:"30px"}}
            />
            </div>
            <div>
            <p className="legendaGraph">50 termos detetados como mais descritivos do tópico: </p>
            <CardImg src={topic9} style={{width:"600px", marginTop:"10px", height: "310px", marginLeft:"40px"}}/>
            </div>
            </Row>
            <Row style={{marginTop:"20px"}}>
              
            <Row>
                  <Col>
                  <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelA">estigmatizante</p>
                  </Row>
                        <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"70px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Algumas falácias na privatização de serviços públicos</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20041215063208/http://jornal.publico.pt/2004/12/13/SupEconomia/TEOPI01.html", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>A quem aproveita o desmantelamento da RTP?</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20111121020350/http://jornal.publico.pt/noticia/18-11-2011/a-quem-aproveita-o-desmantelamento-da-rtp-23452108.htm", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>A solidão de Jean Wyllys num país homofóbico</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20190227212627/https://www.publico.pt/2016/06/26/mundo/noticia/a-solidao-de-jean-wyllys-num-pais-homofobico-1735753/amp", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                              </tr>
                          </tbody>
                        </Table>
                        </Col>

                        <Col>
                        <Row>
                  <p className="topicsLabel">Top 3 artigos com sentido</p>
                  <p className="topicsLabelB">literal</p>
                  </Row>
                  <Table style={{backgroundColor: "white", width:"550px", marginTop:"30px", marginLeft:"100px"}}>
                          <thead >
                            <tr>
                              <th >#</th>
                              <th >Título</th>
                              <th >Acesso</th>
                        
                            </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <th scope="row">1</th>
                              <td>Vale e Azevedo julgado por peculato a 12 de Outubro</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20100929043822/http://dn.sapo.pt/inicio/tag.aspx?tag=portugal&page=6", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Detidos oito suspeitos de burlas com receitas</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20110127173835/http://jornal.publico.pt/noticia/27-01-2011/detidos-oito-suspeitos-de-burlas-com-receitas-21140771.htm", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>PSD. Rui Rio processa candidatos às autárquicas com gastos excessivos</td>
                              <td><Button outline color="warning" onClick={() => {window.open("https://arquivo.pt/wayback/20180901171658/https://observador.pt/2018/08/31/psd-rui-rio-processa-candidatos-as-autarquicas-com-gastos-excessivos/amp/", "_blank")}} style={{width:"90px", height:"40px"}}>Aceder</Button></td>
                        
                            </tr>
                        
                          </tbody>
                        </Table>
                        </Col>
                        </Row>
               </Row>
               </FadeIn>
               </TabPanel>
      </TabContext>
    </Box>
  );
}