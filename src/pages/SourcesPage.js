import React from 'react';
import alina from 'assets/img/logo/alinaa.png';
import alinatrifan from 'assets/img/logo/alinatrifan.png';
import jlo from 'assets/img/logo/jlo.png';
import olga from 'assets/img/logo/olga.png';
import logoArquivo from 'assets/img/logo/arquivo.png';
import logoPaper from 'assets/img/logo/paper.png';
import logoCode from 'assets/img/logo/code.png';
import logoDatabase from 'assets/img/logo/database.jpg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from 'components/Typography';
import Container from '@mui/material/Container';
import Page from 'components/Page';
import 'styles/components/_sources.scss';
import FadeIn from 'components/FadeIn';

import {
  CardImg,
  Button,
} from 'reactstrap';
import Row from 'reactstrap/lib/Row';


function Copyright(props) {
  return (
    <Typography className="font" style={{color:"rgb(64, 62, 49)", borderWidth:"350px", borderColor:"white", fontWeight:"600"}} variant="body2" align="center" {...props}>
      {'Copyright © 2022   Implementado na  '}
      <a className="font" style={{color:"green", fontWeight:"600"}} target="_blank" href="https://www.ua.pt">Universidade de Aveiro</a>
    </Typography>
  );
}

const tiers = [
  {
    title: 'Projeto',
    image: logoCode,
    description: [
      'Código-aberto do projeto',
    ],
    buttonText:  <a target="_blank" className="buttonText" href="https://github.com/alina-yanchuk02/stigmaClassification">Aceder ao projeto</a>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Relatório técnico',
    image: logoPaper,
    description: [
      'Relatório técnico do projeto',,
    ],
    buttonText: <a className="buttonText" target="_blank" href="https://drive.google.com/drive/folders/1HwqpYzgixXrQAeMVGnh5lpfLijFtTV3-?usp=sharing">Aceder ao relatório</a>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Arquivo.pt',
    image: logoArquivo,
    description: [
      'Fonte oficial dos dados',
    ],
    buttonText: <a className="buttonText" target="_blank" href="https://arquivo.pt/">Aceder ao Arquivo.pt</a>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Base de dados',
    image: logoDatabase,
    description: [
      'Dados manualmente anotados',
    ],
    buttonText: <a className="buttonText" target="_blank" href="https://drive.google.com/drive/folders/1HwqpYzgixXrQAeMVGnh5lpfLijFtTV3-?usp=sharing">Aceder aos dados</a>,
    buttonVariant: 'outlined',
  },
 
];



const SourcesPage = () => {
  return (
    <Page>
    <Row >
    <div style={{backgroundImage:'linear-gradient(#ffd639, white)', width:"100%"}}>
      <CssBaseline />
      {/* Hero unit */}
      <FadeIn delay="400">
      <p className="authorsTitle">RECURSOS</p>
  
  
      <p className="subheading">
        Os principais recursos e referências referentes a este projeto podem ser encontrados abaixo.
      </p>
      </FadeIn>
      {/* End hero unit */}
      <Container  style={{marginTop:"70px"}}>
        <Grid container spacing={3} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
            className="font"
              item
              key={tier.title}
              xs={4}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={3}
            >
              <FadeIn  delay={700}>
              <Card className='recurso'>
                <p className='fontTitle' style={{fontSize:"21px",textAlign: "center", marginTop:"20px"}}>{tier.title}</p>
                <CardContent className="recursosos">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb:2,
                    
                    }}
                    className="boxrecurso"
                  >
                   <CardImg className="imgrecurso" src={tier.image} style={{margin:10}}  />
                  </Box>
                  <p>
                    {tier.description.map((line) => (
                      <p className='font' style={{fontSize:"15px",textAlign: "center", marginTop:"20px"}}>{tier.description}</p>
                    ))}
                  </p>
                </CardContent>
                <CardActions>
                  <Button style={{width:"100%"}}outline color="warning">
                    {tier.buttonText}
                    
                  </Button>
                </CardActions>
              </Card>
            </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FadeIn delay="400">
      <p style={{marginTop:"100px"}} className="authorsTitle">Contactos</p>
      </FadeIn> 
      
        <Row style={{marginLeft:"100px"}}>
        <FadeIn delay={700}>
        <Card className='autor'>
          
              <p className='fontTitle' style={{fontSize:"21px",textAlign: "center", marginTop:"20px"}}>Alina Yanchuk</p>
          
                <CardContent style={{textAlign:"center"}}>
                  <Box
                  
                    
                  >
                   <CardImg src={alina} style={{height:"160px", width:"160px"}}  />
                  </Box>
                  <p className="title">
                    Autora
                  </p>
                  <p className="font">
                   Estudante de Mestrado em Engenharia Informática 
                  </p>
                  <p className="font">
                  E-mail: alinayanchuk@ua.pt
                  </p>
                </CardContent>
              
              </Card>
              </FadeIn>
              <FadeIn delay={450}>
              <Card className='autor'>
          
              <p className='fontTitle' style={{fontSize:"21px",textAlign: "center", marginTop:"20px"}}>Alina Trifan</p>
          
                <CardContent style={{textAlign:"center"}}>
                  <Box
                  
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb:2,
                    
                    }}
                  >
                   <CardImg src={alinatrifan} style={{height:"170px", width:"170px"}}  />
                  </Box>
                  <p className="title">
                    Orientadora
                  </p>
                  <p className="font">
                   Investigadora no Instituto de Engenharia Electrónica e Telemática de Aveiro (IEETA)
                  </p>
                  <p className="font">
                  E-mail: alina.trifan@ua.pt
                  </p>
                </CardContent>
              
              </Card>
              </FadeIn>
              <FadeIn delay={450}>
              <Card className='autor'>
          
              <p className='fontTitle' style={{fontSize:"21px",textAlign: "center", marginTop:"20px"}}>José Luís Oliveira</p>
          
                <CardContent style={{textAlign:"center"}}>
                  <Box
                  
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb:2,
                    
                    }}
                  >
                   <CardImg src={jlo} style={{height:"170px", width:"170px"}}  />
                  </Box>
                  <p className="title">
                    Orientador
                  </p>
                  <p className="font">
                   Professor no Departamento de Eletrónica, Telecomunicações e Informática (DETI)
                  </p>
                  <p className="font">
                  E-mail: jlo@ua.pt
                  </p>
                </CardContent>
              
              </Card>
              </FadeIn>
              <FadeIn delay={450}>
              <Card className='autor'>
          
          <p className='fontTitle' style={{fontSize:"21px",textAlign: "center", marginTop:"20px"}}>Olga Oliveira</p>
      
            <CardContent style={{textAlign:"center"}}>
              <Box
              
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb:2,
                
                }}
              >
               <CardImg src={olga} style={{height:"170px", width:"170px"}}  />
              </Box>
              <p className="title">
               Orientadora
              </p>
              <p className="font">
               Investigadora no Departamento de Eletrónica, Telecomunicações e Informática (DETI)
              </p>
              <p className="font">
              E-mail: olga.oliveira@ua.pt
              </p>
            </CardContent>
          
          </Card>
              </FadeIn>
        </Row>
      
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `3px solid ${theme.palette.divider}`,
          mt: 10,
          py: [3, 3],
        }}
      >
      
        <Copyright  />
      </Container>
     
     
    </div>
    </Row>
    </Page>
  );
}

export default SourcesPage;