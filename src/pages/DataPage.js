import Page from 'components/Page';
import React from 'react';
import FadeIn from 'components/FadeIn';
import 'styles/components/_data.scss';
import oneinfive from 'assets/img/logo/1in5.png';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import observador from 'assets/img/journals/observador.png';
import dn from 'assets/img/journals/dn.png';
import jn from 'assets/img/journals/jn.png';
import visao from 'assets/img/journals/visao.png';
import expresso from 'assets/img/journals/expresso.png';
import cm from 'assets/img/journals/cm.png';
import sabado from 'assets/img/journals/sabado.png';
import bola from 'assets/img/journals/bola.png';
import publico from 'assets/img/journals/publico.png';
import lr from 'assets/img/models/lr.jpg';
import knn from 'assets/img/models/knn.png';
import svm from 'assets/img/models/svm.png';
import nb from 'assets/img/models/nb.png';
import cnn from 'assets/img/models/cnn.png';
import lstm from 'assets/img/models/lstm.jpeg';
import bilstm from 'assets/img/models/bilstm.png';
import bert from 'assets/img/models/bert.png';
import random from 'assets/img/models/random.png';
import arch from 'assets/img/arch/arch.png';
import{ useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import {
  Row,
  CardImg,
  Card,
  Col,
} from 'reactstrap';

function CardJournal({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 130; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}



function HeroJournal ({ children }) {
  return (
    <div className="heroJournal">
      <div className="hero-bodyJournal">{children}</div>
    </div>
  );
}


const journals1 = [
  {
    image: publico,
    title: "Público"
  },
  {
    image: observador,
    title: "Observador"
  },
  {
    image: dn,
    title: "Diário de Notícias"
  },
  {
    image: expresso,
    title: "Expresso"
  },
  {
    image: cm,
    title: "Correio da Manhã"
  },

];


const journals2 = [
  {
    image: jn,
    title: "Jornal de Notícias"
  },
  {
    image: visao,
    title: "Visão"
  },
  {
    image: sabado,
    title: "Sábado"
  },
  {
    image: bola,
    title: "A Bola"
  },


];

const models1 = [
  {
    image: lr,
    title: "Logistic Regression (LR)"
  },
  {
    image: svm,
    title: "Support Vector Machine (SVM)"
  },
  {
    image: knn,
    title: "K-Nearest Neighbors (KNN)"
  },
  {
    image: nb,
    title: "Naive Bayes (NB)"
  },
  {
    image: random,
    title: "Random Forest (RF)"
  },

];


const models2 = [
  {
    image: cnn,
    title: "Convolutional Neural Network (CNN)"
  },
  {
    image: lstm,
    title: "Long Short-Term Memory (LSTM)"
  },
  {
    image: bilstm,
    title: "Bidirectional LSTM (Bi-LSTM)"
  },
  {
    image: bert,
    title: "BERTimbau"
  },

];

const DataPage = () => {
  return (
    <Page title="" >
      <Row>
      <div style={{backgroundImage:'linear-gradient(#ffd639, white)', width:"100%"}}>
      <FadeIn delay="400">
        <Row>
      <div style={{width:"1000px"}}>
      <Col>
      <div>
      <p className="dataTitle">Sobre o projeto</p>
      
      </div>
      <Row>
     
      <div className="fact3">
      <p className="fact3content">
      Estigma (Organização Mundial da Saúde): 
      </p>
      </div>
    
      <div className="fact4">
        <p className="fact4content">
        Marca distintiva que, ao aliar-se às perturbações mentais, cria um ambiente de exclusão
social e discriminação perante a pessoa estigmatizada
        </p>
      </div>
      
      </Row>
      </Col>
      </div>
      <div className="fact1img" style={{backgroundImage:'url(' + require('assets/img/journals/pin.png') + ')'}}>
      <div className="fact1">
      <Col>
      <Box className="dataBox">
        <CardImg src={oneinfive} style={{margin:10}}  />
      </Box>
      <p className="fact1content">
        1 em cada 5 portugueses sofre de uma doença mental
      </p>
      </Col>
      
      </div>
      </div>
      </Row>
      </FadeIn> 
      <FadeIn delay="800">
      <Row>
     <Card className='dataCard1'>
        
            <CardContent>
      
              <p className="dataFont">
              A presença de estigma na nossa sociedade é ainda bastante frequente. Quando o mesmo
é associado às doenças mentais, tem implicações negativas nos doentes, nos seus tratamentos e nos próprios profissionais de saúde. A estigmatização ocorre, geralmente, quando a doença é utilizada num sentido figurado/metafórico, para descrever entidades ou situações fora do contexto da saúde. Neste âmbito, surge a necessidade de combater o estigma presente na comunicação social, nomeadamente nos jornais de notícias <i>online</i>, visto a utilização de expressões estigmatizantes em artigos publicados nos mesmos ainda ser bastante comum, tanto por parte dos próprios autores
como dos indivíduos que os mesmos entrevistam ou citam. 
              </p>
              <p className="dataFont">
              Por outro lado, a análise de notícias jornalísticas tem apresentado um grande crescimento na área da investigação, bem como a crescente utilização de abordagens computacionais para a realizar.
Os métodos manuais caracterizam-se pela anotação, por humanos, dos textos a classificar,
enquanto que os métodos computacionais utilizam algoritmos de Inteligência Artificial. Os subcampos
da Inteligência Artificial mais relevantes para este processo são a aprendizagem de máquina ou <i>machine learning</i>, o processamento de linguagem natural (PLN) e a mineração
de texto. Todas estas tecnologias permitem aos
computadores extrair conhecimento a partir de um conjunto de dados e aprender a tomar
decisões de forma automática e independente, com intervenção mínima por parte de humanos, sendo a sua grande vantagem a eficiência e poupança de tempo e esforço humano. 
              </p>
              <p className="dataFont">
              Assim, o resultado deste projeto consiste num conjunto de algoritmos de classificação automática de texto, que permitem classificar o sentido dos artigos, presentes em jornais de notícias <i>online</i> e detentores de referências a doenças mentais, como estigmatizante ou literal. O sentido estigmatizante é conferido quando as referências são utilizadas dentro de um contexto inadequado, para revelar uma ideia que vai além do sentido literal dos termos, enquanto que o literal é atribuído quando os termos são utilizados apenas no seu sentido literal. Adicionalmente, foi também realizada a deteção automática de tópicos presentes nos artigos e uma análise final dos resultados obtidos. Todos os artigos foram recolhidos do repositório Arquivo.pt, a fonte oficial de dados.
              </p>
            </CardContent>
          </Card>
        


          <Card className='dataCard2'>
        
        <CardContent>
          <p className="dataTitleJornais">
           Doenças mentais em estudo
          </p>
          <p className="dataFont">
          
Foi decidido focar-se em artigos que estigmatizam a doença mental da <a className="dataFontSpecial">esquizofrenia</a>, visto estudos anteriores apresentarem-na como uma das doenças mais utilizadas, pela imprensa, num sentido metafórico. Esta doença faz parte das perturbações menos comuns (e mais graves) mas, ao mesmo tempo, das doenças que mais aparecem no nosso vocabulário de termos utilizados fora do seu contexto original. Para além disso, para aumentar o número de artigos recolhidos, foram também tidos em conta termos referentes à <a className="dataFontSpecial">psicose</a>, visto esta ser uma condição que faz parte dos sintomas da doença da esquizofrenia e ambos os transtornos serem, muitas vezes, utilizados de forma relacionada.
</p>
<p className="dataFont">Assim, tendo em conta todas as palavras que é possível derivar das palavras “esquizofrenia” e "psicose",
através do uso de sufixos de derivação e sem perder o significado original das mesmas, foram recolhidos, do Arquivo.pt, todos os artigos que possuísem pelo menos um dos seguintes termos: 

          </p>
          <div style={{textAlign:"center"}}>
          <p className="dataFontList">
          ["esquizofrenia", "esquizofrénico", "esquizofrenico", "esquizofrénica", "esquizofrenica", "esquizofrénicas", "esquizofrenicas", "esquizofrénicos", "esquizofrenicos", "esquizofrenicamente", "esquizofrenizar", "psicose", "psicótica", "psicotica", "psicóticas", "psicoticas", "psicótico", "psicotico", "psicóticos", "psicóticos"]
          </p>
          </div>

          <p className="dataTitleJornais">
           Jornais analisados
          </p>
          <p className="dataFont">
          Dada a grande quantidade de jornais
portugueses e o facto de nem todos eles apresentarem forte probabilidade de utilização
de termos referentes à esquizofrenia e psicose num sentido metafórico, foram selecionados apenas
<a className="dataFontSpecial">9</a> jornais eletrónicos. Os critérios de seleção foram a popularidade do jornal na Internet, a
sua relevância no âmbito do projeto e a sua longevidade, tendo sido recolhidos artigos desde 1996 até 2021.
</p>
<p className="dataFont">
Os 9 jornais podem ser visualizados abaixo:
          </p>

          <HeroJournal>
          <div className="containerJournal">
                  <div class="rowJournal">
                    {journals1.map((card, i) => (
                      
                        <FadeIn delay="2500">
                          <div className="divCard">
                        <CardJournal className="cardJournal">
                        <Box className="boxJournal"
                  >
                   <CardImg className="journalImg" src={card.image}/>
                   
                  </Box>
                        </CardJournal>
                        </div>
                        <div className="divJournalTitle">
                        <p className="dataFontJournal">
          {card.title}
          </p>
          </div>
                        </FadeIn>
                    
                    ))}
                    
                  </div>
             </div>
              </HeroJournal>

              <HeroJournal>
          <div className="containerJournal2">
                  <div class="rowJournal">
                    {journals2.map((card, i) => (
                      
                        <FadeIn delay="2500">
                          <div className="divCard2">
                        <CardJournal className="cardJournal">
                        <Box className="boxJournal"
                  >
                   <CardImg className="journalImg" src={card.image}/>
                  </Box>
                        </CardJournal>
                        </div>
                        <p className="dataFontJournal">
          {card.title}
          </p>
                        </FadeIn>
                    
                    ))}
                  </div>
             </div>
              </HeroJournal>

          <p className="dataTitleJornais">
           Algoritmos de Inteligência Artificial utilizados
          </p>
          <p className="dataFont">
          A classificação automática de texto é um problema que pertence à categoria de algoritmos que utilizam aprendizagem supervisionada, onde existe um conjunto de dados de treino já classificado ou anotado, e consiste num processo automático de associar dados
textuais a uma dada classe. O processo geral de classificação consiste numa etapa de limpeza e pré-processamento dos textos, numa etapa de extração de atributos relevantes, que consiste na representação dos atributos de cada objeto numa forma numérica, sendo a representação mais comum a vetorial, na etapa de classificação automáticas dos dados, recorrendo a algoritmos de <i>machine learning</i> ou <i>deep learning</i>, e numa etapa final de avaliação da performance e resultados desses modelos. 

          </p>
          <p className="dataFont">
          Neste projeto, foram desenvolvidos <a className="dataFontSpecial">5</a> modelos de <i>machine learning</i> e <a className="dataFontSpecial">4</a> modelos de <i>deep learning</i>. 
          Adicionalmente, foi também aplicada uma técnica de PLN, designada por <i>topic modeling</i>, através da utilização do algoritmo <i>top2vec</i>. <i>Topic modeling</i> corresponde a um processo de aprendizagem não supervisionada, ou seja sem necessidade de pré-anotaçao dos dados, que consiste na descoberta automática de
tópicos existentes num texto, através da análise da similaridade e da ocorrência de termos. 
          </p>
          <p className="dataFont">
          Os 9 algoritmos de classificação podem ser visualizados abaixo.
          </p>
          <HeroJournal>
          <div className="containerJournal">
                  <div class="rowJournal">
                    {models1.map((card, i) => (
                      
                        <FadeIn delay="3500">
                          <div className="divCardModel">
                        <CardJournal className="cardJournal">
                        <Box className="boxModel"
                  >
                   <CardImg className="modelImg" src={card.image}/>
                   
                  </Box>
                        </CardJournal>
                        </div>
                        <div className="divJournalTitle">
                        <p className="dataFontModel">
          <i>{card.title}</i>
          </p>
          </div>
                        </FadeIn>
                    
                    ))}
                    
                  </div>
             </div>
              </HeroJournal>

              <HeroJournal>
          <div className="containerModel2">
                  <div class="rowJournal">
                    {models2.map((card, i) => (
                      
                        <FadeIn delay="3500">
                          <div className="divCardModel">
                        <CardJournal className="cardModel">
                        <Box className="boxModel"
                  >
                   <CardImg className="modelImg" src={card.image}/>
                   
                  </Box>
                        </CardJournal>
                        </div>
                        <div className="divJournalTitle">
                        <p className="dataFontModel">
          <i>{card.title}</i>
          </p>
          </div>
                        </FadeIn>
                    
                    ))}
                    
                  </div>
             </div>
              </HeroJournal>
              
          
          <p className="dataTitleJornais">
           Arquitetura geral
          </p>
          <p className="dataFont">
          De uma forma geral, as 6 principais etapas deste projeto podem ser visualizadas na figura abaixo.
          </p>

          <CardImg className="arqImg" src={arch}/>
        </CardContent>
      </Card>

          </Row>
          </FadeIn>
          </div>
    </Row>
    </Page>
  );
};
      
export default DataPage;
