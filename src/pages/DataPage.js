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
    title: "P??blico"
  },
  {
    image: observador,
    title: "Observador"
  },
  {
    image: dn,
    title: "Di??rio de Not??cias"
  },
  {
    image: expresso,
    title: "Expresso"
  },
  {
    image: cm,
    title: "Correio da Manh??"
  },

];


const journals2 = [
  {
    image: jn,
    title: "Jornal de Not??cias"
  },
  {
    image: visao,
    title: "Vis??o"
  },
  {
    image: sabado,
    title: "S??bado"
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
      Estigma (Organiza????o Mundial da Sa??de): 
      </p>
      </div>
    
      <div className="fact4">
        <p className="fact4content">
        Marca distintiva que, ao aliar-se ??s perturba????es mentais, cria um ambiente de exclus??o
social e discrimina????o perante a pessoa estigmatizada
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
        1 em cada 5 portugueses sofre de uma doen??a mental
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
              A presen??a de estigma na nossa sociedade ?? ainda bastante frequente. Quando o mesmo
?? associado ??s doen??as mentais, tem implica????es negativas nos doentes, nos seus tratamentos e nos pr??prios profissionais de sa??de. A estigmatiza????o ocorre, geralmente, quando a doen??a ?? utilizada num sentido figurado/metaf??rico, para descrever entidades ou situa????es fora do contexto da sa??de. Neste ??mbito, surge a necessidade de combater o estigma presente na comunica????o social, nomeadamente nos jornais de not??cias <i>online</i>, visto a utiliza????o de express??es estigmatizantes em artigos publicados nos mesmos ainda ser bastante comum, tanto por parte dos pr??prios autores
como dos indiv??duos que os mesmos entrevistam ou citam. 
              </p>
              <p className="dataFont">
              Por outro lado, a an??lise de not??cias jornal??sticas tem apresentado um grande crescimento na ??rea da investiga????o, bem como a crescente utiliza????o de abordagens computacionais para a realizar.
Os m??todos manuais caracterizam-se pela anota????o, por humanos, dos textos a classificar,
enquanto que os m??todos computacionais utilizam algoritmos de Intelig??ncia Artificial. Os subcampos
da Intelig??ncia Artificial mais relevantes para este processo s??o a aprendizagem de m??quina ou <i>machine learning</i>, o processamento de linguagem natural (PLN) e a minera????o
de texto. Todas estas tecnologias permitem aos
computadores extrair conhecimento a partir de um conjunto de dados e aprender a tomar
decis??es de forma autom??tica e independente, com interven????o m??nima por parte de humanos, sendo a sua grande vantagem a efici??ncia e poupan??a de tempo e esfor??o humano. 
              </p>
              <p className="dataFont">
              Assim, o resultado deste projeto consiste num conjunto de algoritmos de classifica????o autom??tica de texto, que permitem classificar o sentido dos artigos, presentes em jornais de not??cias <i>online</i> e detentores de refer??ncias a doen??as mentais, como estigmatizante ou literal. O sentido estigmatizante ?? conferido quando as refer??ncias s??o utilizadas dentro de um contexto inadequado, para revelar uma ideia que vai al??m do sentido literal dos termos, enquanto que o literal ?? atribu??do quando os termos s??o utilizados apenas no seu sentido literal. Adicionalmente, foi tamb??m realizada a dete????o autom??tica de t??picos presentes nos artigos e uma an??lise final dos resultados obtidos. Todos os artigos foram recolhidos do reposit??rio Arquivo.pt, a fonte oficial de dados.
              </p>
            </CardContent>
          </Card>
        


          <Card className='dataCard2'>
        
        <CardContent>
          <p className="dataTitleJornais">
           Doen??as mentais em estudo
          </p>
          <p className="dataFont">
          
Foi decidido focar-se em artigos que estigmatizam a doen??a mental da <a className="dataFontSpecial">esquizofrenia</a>, visto estudos anteriores apresentarem-na como uma das doen??as mais utilizadas, pela imprensa, num sentido metaf??rico. Esta doen??a faz parte das perturba????es menos comuns (e mais graves) mas, ao mesmo tempo, das doen??as que mais aparecem no nosso vocabul??rio de termos utilizados fora do seu contexto original. Para al??m disso, para aumentar o n??mero de artigos recolhidos, foram tamb??m tidos em conta termos referentes ?? <a className="dataFontSpecial">psicose</a>, visto esta ser uma condi????o que faz parte dos sintomas da doen??a da esquizofrenia e ambos os transtornos serem, muitas vezes, utilizados de forma relacionada.
</p>
<p className="dataFont">Assim, tendo em conta todas as palavras que ?? poss??vel derivar das palavras ???esquizofrenia??? e "psicose",
atrav??s do uso de sufixos de deriva????o e sem perder o significado original das mesmas, foram recolhidos, do Arquivo.pt, todos os artigos que possu??sem pelo menos um dos seguintes termos: 

          </p>
          <div style={{textAlign:"center"}}>
          <p className="dataFontList">
          ["esquizofrenia", "esquizofr??nico", "esquizofrenico", "esquizofr??nica", "esquizofrenica", "esquizofr??nicas", "esquizofrenicas", "esquizofr??nicos", "esquizofrenicos", "esquizofrenicamente", "esquizofrenizar", "psicose", "psic??tica", "psicotica", "psic??ticas", "psicoticas", "psic??tico", "psicotico", "psic??ticos", "psic??ticos"]
          </p>
          </div>

          <p className="dataTitleJornais">
           Jornais analisados
          </p>
          <p className="dataFont">
          Dada a grande quantidade de jornais
portugueses e o facto de nem todos eles apresentarem forte probabilidade de utiliza????o
de termos referentes ?? esquizofrenia e psicose num sentido metaf??rico, foram selecionados apenas
<a className="dataFontSpecial">9</a> jornais eletr??nicos. Os crit??rios de sele????o foram a popularidade do jornal na Internet, a
sua relev??ncia no ??mbito do projeto e a sua longevidade, tendo sido recolhidos artigos desde 1996 at?? 2021.
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
           Algoritmos de Intelig??ncia Artificial utilizados
          </p>
          <p className="dataFont">
          A classifica????o autom??tica de texto ?? um problema que pertence ?? categoria de algoritmos que utilizam aprendizagem supervisionada, onde existe um conjunto de dados de treino j?? classificado ou anotado, e consiste num processo autom??tico de associar dados
textuais a uma dada classe. O processo geral de classifica????o consiste numa etapa de limpeza e pr??-processamento dos textos, numa etapa de extra????o de atributos relevantes, que consiste na representa????o dos atributos de cada objeto numa forma num??rica, sendo a representa????o mais comum a vetorial, na etapa de classifica????o autom??ticas dos dados, recorrendo a algoritmos de <i>machine learning</i> ou <i>deep learning</i>, e numa etapa final de avalia????o da performance e resultados desses modelos. 

          </p>
          <p className="dataFont">
          Neste projeto, foram desenvolvidos <a className="dataFontSpecial">5</a> modelos de <i>machine learning</i> e <a className="dataFontSpecial">4</a> modelos de <i>deep learning</i>. 
          Adicionalmente, foi tamb??m aplicada uma t??cnica de PLN, designada por <i>topic modeling</i>, atrav??s da utiliza????o do algoritmo <i>top2vec</i>. <i>Topic modeling</i> corresponde a um processo de aprendizagem n??o supervisionada, ou seja sem necessidade de pr??-anota??ao dos dados, que consiste na descoberta autom??tica de
t??picos existentes num texto, atrav??s da an??lise da similaridade e da ocorr??ncia de termos. 
          </p>
          <p className="dataFont">
          Os 9 algoritmos de classifica????o podem ser visualizados abaixo.
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
