import React from 'react';
import Page from 'components/Page';
import 'styles/components/_jornais.scss';
import classNames from 'classnames';
import news0 from 'assets/img/news/news0.png';
import news1 from 'assets/img/news/news1.png';
import news2 from 'assets/img/news/news2.png';
import news3 from 'assets/img/news/news3.png';
import news4 from 'assets/img/news/news4.png';
import news5 from 'assets/img/news/news5.png';
import swal from 'sweetalert'
import {
    Button,
    Row,
  } from 'reactstrap';

class CitiesSlider extends React.Component {

  toggle = modalType => () => {

    this.generate_text()

    
  };

    constructor(props) {
      super(props);

      this.generate_answer_non = this.generate_answer_non.bind(this);
      this.generate_answer_yes = this.generate_answer_yes.bind(this);
      
      this.IMAGE_PARTS = 4;
      
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 4000;
      
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };

    }

    ErrorData = {
      title: "Oops..",
      type: "error",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>"
    };

    generate_text() {
      if (this.state.activeSlide==0) {
        swal({
          title: 'EXPRESSO - Descoberta científica abre a porta à prevenção da esquizofrenia',
          text: 'Havia a dúvida, faltava a certeza e, na quinta-feira, um artigo publicado na conceituada revista especializada “Nature Communications” por uma equipa do Imperial e do King’s College, em Londres, de que faz parte o psiquiatra português Tiago Reis Marques, apresentou a evidência há muito buscada. Ao longo da última década, os investigadores que estudam a esquizofrenia levantavam a hipótese de o cérebro destes doentes ter menos sinapses — a forma como dois neurónios comunicam entre si — do que o cérebro de pessoas saudáveis. A utilização de um equipamento habitualmente usado em doentes oncológicos (PET — Tomografia de Emissão de Positrões) para captar imagens do cérebro de pessoas com esquizofrenia revelou estruturas visualmente mais uniformes em termos cromáticos. Mais importante do que a evidência encontrada é a porta que com ela se abre: a hipótese de se prevenir a esquizofrenia, doença complexa e altamente incapacitante e de cujas causas ainda se sabe pouco. “O impacto deste estudo reflete-se em dois principais domínios. Em primeiro lugar, permite-nos compreender melhor a neurobiologia da doença, isto é, o que se passa no cérebro de pessoas com esta doença mental. E, sobretudo, uma possível área terapêutica, com o desenvolvimento de fármacos que permitam aumentar ou evitar a redução do número de sinapses”, explica o médico português, de 43 anos, docente do Instituto de Psiquiatria do King’s College.',
          buttons: {
            cancel: "OK",
            catch: {
              text: "Aceder ao artigo no Arquivo.pt",
              value: "catch",
            }
          },
        })
        .then((value) => {
          switch (value) {
            case "catch":
              window.open("https://arquivo.pt/wayback/20200123200837/https://expresso.pt/sociedade/2020-01-19-Descoberta-cientifica-abre-a-porta-a-prevencao-da-esquizofrenia", '_blank')
          }
        });
      }
        else if (this.state.activeSlide==1) {
          swal({
          title: 'OBSERVADOR - Socialistas saltam fora da “Aula Magna” do centro-direita. “Seria esquizofrenia política”, diz Assis',
          text: "O eurodeputado socialista Francisco Assis e o deputado  Paulo Trigo Pereira, eleito inicialmente pelas listas do PS, afinal não vão estar presentes na Convenção do Movimento Europa e Liberdade por entenderem que o evento se tornou eminentemente político de crítica e combate ao governo. Nas palavras de Francisco Assis, que deu conta da sua desistência aos organizadores do evento, uma eventual participação num evento com as características agora publicitadas só poderia ser entendido como um ato de pura esquizofrenia política. Os pressupostos subjacentes ao convite que me foi dirigido a fim de participar num debate promovido pelo MEL-Movimento Europa e Liberdade, a realizar no próximo dia 11, e que me levaram a aceitar o mesmo, foram drasticamente alterados nos últimos dias dada a natureza de várias notícias vindas a público sobre tal iniciativa e dado o sentido de declarações proferidas pelo próprio presidente do movimento organizador, começou por dizer o eurodeputado numa nota dirigida a um dos organizadores do evento, Paulo Carmona...",
          buttons: {
            cancel: "OK",
            catch: {
              text: "Aceder ao artigo completo no Arquivo.pt",
              value: "catch",
            }
          },
        })
        .then((value) => {
          switch (value) {
            case "catch":
              window.open("https://arquivo.pt/wayback/20190104211146/https://observador.pt/2019/01/03/socialistas-saltam-fora-da-aula-magna-do-centro-direita-seria-esquizofrenia-politica-diz-assis/", '_blank')
          }
        });
        }
        else if (this.state.activeSlide==2) {
          swal({
          title: 'PÚBLICO - A psicose, os demónios e a minha linda filha',
          text: 'No mês passado, perdi a minha querida filha na luta contra a doença mental. Suicidou-se a poucas semanas de fazer 29 anos, atirando-se para a frente de um comboio em Baltimore. A Natalie e eu escrevemos um livro juntas quando ela tinha 16 anos: Promise You Won’t Freak Out: A teenager tells her mother the truth about boys, booze, body piercing and other touchy topics (and Mom responds) — “Promete que não te passas: Uma adolescente conta à mãe a verdade sobre rapazes, álcool, piercings e outros temas sensíveis (e a mãe responde)”. A ideia de uma adolescente contar à mãe os seus segredos era tão atraente que aparecemos na capa do Baltimore Sun e mais duas dezenas de jornais, fomos a programas de televisão de um lado ao outro do país, incluindo aos programas da manhã, e pagaram-nos para dar conferências. A Oprah ligou-me. No livro, usávamos um dispositivo para assinalar quando uma grande reviravolta estava prestes a acontecer: Até que… Na introdução, defini os momentos Até que… como “uma daquelas alturas críticas em que a minha alegre sensação de que tudo estava bem no mundo colidia com a prova irrefutável de que não, não estava”. O livro foi publicado uma semana antes de a Natalie terminar o liceu e recebeu óptimas críticas. A Amazon considerou-o o melhor livro sobre parentalidade de 2004. Foi nomeado para um prémio nacional. Foi traduzido para lituano e chinês. Até que... Aos 22 anos, durante a segunda parte do seu último ano de faculdade, Natalie teve um surto psicótico. No prazo de poucas semanas, passou de uma jovem adulta brilhante com o mundo aos seus pés para uma paciente numa instituição psiquiátrica com cadastro criminal...',
          buttons: {
            cancel: "OK",
            catch: {
              text: "Aceder ao artigo completo no Arquivo.pt",
              value: "catch",
            }
          },
        })
        .then((value) => {
          switch (value) {
            case "catch":
              window.open("https://arquivo.pt/wayback/20160707041038/https://www.publico.pt/sociedade/noticia/a-psicose-os-demonios-e-a-minha-linda-filha-1694108", '_blank')
          }
        });
        }
        else if (this.state.activeSlide==3) {
          swal({
            width: 900,
            title: 'DIÁRIO DE NOTÍCIAS - Sol e praia',
            text: 'O Presidente da República apelou há dias aos autarcas para que não cedam à pressão dos construtores civis. Velha questão esta que, apesar dos muitos planos de ordenamento e de urbanismo, continua a degradar o litoral português e a contaminar a definição de melhores estratégias para um desenvolvimento económico mais eficaz e coerente. A nossa realidade litoral já é, em muitos casos, de uma trágica irreversibilidade. Mas basta olhar para as costas espanholas e para o debate que começa a nascer em Espanha sobre a falência do modelo turístico assente no sol e praia e na consequente construção a um ritmo infernal para rapidamente concluirmos o que não queremos para o que ainda se pode salvar. Em Espanha, grande parte da costa mediterrânica está indefesa face ao avanço do cimento, afogada em problemas de poluição gerados pelas águas residuais e palco de processos de investigação por corrupção associada à emissão de licenças e alvarás. Valência, Andaluzia e Múrcia são as pontas de um icebergue que há muito domina a economia espanhola, um território por onde circulam 50 mil milhões de euros em notas de 500, uma quarta parte das que são emitidas pelo Banco Central Europeu. No caso do Algarve e de alguns pontos do litoral na área metropolitana de Lisboa e no Norte os danos já são muito óbvios. Mas para outras áreas uma boa aprendizagem da grande ressaca espanhola seria essencial para que os erros não se perpetuem. Pouco adianta definir no papel os melhores planos de ordenamento do território se as câmaras continuarem muito dependentes das receitas da construção para a melhor saúde dos seus cofres. Esta esquizofrenia é insuportável por muito mais tempo e o seu fim seria a melhor maneira de acabar com a promiscuidade existente em muitas zonas do País entre o poder político, não necessariamente apenas autárquico, e os interesses da construção e especulação imobiliária. Seria, aliás, bom que o Governo recuperasse como linha essencial da sua acção a boa consciência ecológica que o primeiro-ministro exibia há uns anos. Desde logo, seria bom que essa recuperação significasse um maior protagonismo das políticas ambientais na acção governativa. O ministro do Ambiente é reconhecidamente um técnico competente, talvez não fosse mau se tivesse maior espaço político dentro do Executivo. Se não o homem, pelo menos as suas ideias. ',
            buttons: {
              cancel: "OK",
              catch: {
                text: "Aceder ao artigo no Arquivo.pt",
                value: "catch",
              }
            },
          })
          .then((value) => {
            switch (value) {
              case "catch":
                window.open("https://arquivo.pt/wayback/20060710052729/http://dn.sapo.pt/2006/07/10/editorial/sol_e_praia.html", '_blank')
            }
          });
          }
        else if (this.state.activeSlide==4) {
          swal({
            width: 900,
            title: 'JORNAL DE NOTÍCIAS - Aluna chinesa encontrada nua e inconsciente em Braga sofreu surto psicótico',
            text: 'A jovem estudante de intercâmbio, de origem chinesa, que esta sexta-feira foi encontrada nua e inconsciente em Braga sofreu um surto psicótico. PJ descarta violação. A jovem estava inconsciente e completamente nua num apartamento em obras, já com a porta aberta, tendo sido encontrada por um grupo de operários que se preparava para mais um dia de trabalho, numa urbanização situada na Rua Padre Manuel Guimarães, em São Martinho de Dume, no concelho de Braga, na zona entre o Estádio Municipal de Braga e a Quinta Pedagógica. A jovem, que aparentemente não conseguia falar, estava em estado de choque, tendo após primeira intervenção do Instituto Nacional de Emergência Médica (INEM) e Companhia dos Bombeiros Sapadores de Braga, sido logo transportada para o Serviço de Urgência do Hospital de Braga, seguindo para o Gabinete Médico-Legal e Forense do Cávado, em Braga. Através desses exames foi desbaratada a possibilidade de a jovem ter sido violada. O JN apurou que a jovem, que estaria a viver sozinha em Portugal, sofreu um surto psicótico. O INEM esteve no local com uma equipa da Unidade Móvel de Intervenção Psicológica de Emergência (UMIOE), oriunda da Delegação Regional do Norte, sediada na cidade do Porto.',
            buttons: {
              cancel: "OK",
              catch: {
                text: "Aceder ao artigo no Arquivo.pt",
                value: "catch",
              }
            },
          })
          .then((value) => {
            switch (value) {
              case "catch":
                window.open("https://arquivo.pt/wayback/20190317211004/https://www.jn.pt/justica/interior/psp-investiga-caso-de-jovem-chinesa-encontrada-nua-e-inconsciente-em-braga--10684305.html?utm_referrer=https%3A%2F%2Fzen.yandex.com", '_blank')
            }
          });
          }
        else if (this.state.activeSlide==5) {
          swal({
            width: 900,
            title: 'VISÃO - "The Art of Slowing Down", de Slow J: Devagar se vai ao longe',
            text: 'Um álbum de estreia que confirma Slow J como um dos mais talentosos músicos da nova geração nacional. The Art of Slowing Down é candidato a disco do ano em Portugal. Quando regressou de Londres, onde estudou engenharia de som, poucos sabiam quem era João Batista Coelho e muito menos conheciam o seu alter-ego musical Slow J, que se revelaria nesse mesmo ano de 2013 com The Free Food Tape. O EP, composto por apenas sete músicas, foi o suficiente para começar a criar à sua volta um pequeno burburinho, cada vez mais ruidoso, à medida que a sua música ia extravasando o nicho inicial do hip-hop onde tudo começou, criando um fenómeno de culto como há muito não se via na música portuguesa. Desde logo ali deu para ver que Slow J era muito mais que um simples rapper, como tão bem demonstrou em Cristalina, um tema entretanto tornado viral, no qual parecia juntar coisas tão diferentes como James Blake ou Manel Cruz e mesmo assim soar a algo novo. Tal como aconteceu agora, com o álbum de estreia The Art of Slowing Down, que apenas veio confirmar todas as expectativas criadas à volta do músico, cantor e produtor setubalense. Como a sua música, que viaja sem pudores pelos mais variados ambientes estéticos e sonoros, também Slow J é difícil de catalogar enquanto artista – “Sou uma pessoa que faz música”, apresenta-se. Ao longo dos “14 temas totalmente esquizofrénicos” que compõem The Art of Slowing Down, como o próprio define o disco, Slow J canta, rima e toca, com o mesmo à vontade com que vagueia pelo hip-hop e a eletrónica, mas também pelo semba, rock e até fado. Filho de um pai angolano e de uma mãe portuguesa, a mistura está-lhe no sangue, mas a forma natural e sem preconceitos como consegue baralhar tudo isto para construir um disco perfeito, essa tem outra génese e chama-se talento.',
            buttons: {
              cancel: "OK",
              catch: {
                text: "Aceder ao artigo no Arquivo.pt",
                value: "catch",
              }
            },
          })
          .then((value) => {
            switch (value) {
              case "catch":
                window.open("https://arquivo.pt/wayback/20170519211309/http://visao.sapo.pt/actualidade/visaose7e/livros-e-discos/2017-05-09-The-Art-of-Slowing-Down-de-Slow-J-Devagar-se-vai-ao-longe", '_blank')
            }
          });
          }
        

    }
  

    generate_answer_non() {
      if(this.state.activeSlide==0) {
        swal({ 
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como literal!",
          icon: 'success'
        })
      }
      else if(this.state.activeSlide==1) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como estigmatizante!",
          icon: 'error'
        })
      }
      else if(this.state.activeSlide==2) {
        swal({
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como literal!",
          icon: 'success'
        })
      }
      else if(this.state.activeSlide==3) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como estigmatizante!",
          icon: 'error'
        })
      }
      else if(this.state.activeSlide==4) {
        swal({
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como literal!",
          icon: 'success'
        })
      }
      else if(this.state.activeSlide==5) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como estigmatizante!",
          icon: 'error'
        })
      }
    }

    generate_answer_yes() {
      if(this.state.activeSlide==0) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como literal!",
          icon: 'error'
        })
      }
      else if(this.state.activeSlide==1) {
        swal({
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como estigmatizante!",
          icon: 'success'
        })
      }
      else if(this.state.activeSlide==2) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como literal!",
          icon: 'error'
        })
      }
      else if(this.state.activeSlide==3) {
        swal({
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como estigmatizante!",
          icon: 'success'
        })
      }
      else if(this.state.activeSlide==4) {
        swal({
          title: "Talvez incorreto...",
          text: "O nosso melhor algoritmo classificou o sentido deste artigo  como literal!",
          icon: 'error'
        })
      }
      else if(this.state.activeSlide==5) {
        swal({
          title: "Correto!",
          text: "O nosso melhor algoritmo também classificou o sentido deste artigo  como estigmatizante!",
          icon: 'success'
        })
      }
    }


    
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
    
    componentDidMount() {
      
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
    
    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }
    
    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }

    
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
         
          <div className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <div
              
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                key={slide.city}
                >
                    
                <div className="slider__slide-content">
                  <h2 className="slider__slide-heading">Classificaria o sentido deste artigo como...?</h2>
                  <Row>
                  <Button color="warning" onClick={this.generate_answer_yes} className="slider__slide-subheading">ESTIGMATIZANTE</Button>
                  <Button color="purple" onClick={this.generate_answer_non} className="slider__slide-subheading2">LITERAL</Button>
                  </Row>
                  <p onClick={this.toggle()} className="slider__slide-readmore">Ler artigo completo</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>
      );
    }
  }
  
  const slides = [
    {
      img: news0,
    },
    {
      img: news1,
    },
    {
      img: news2,
    },
    {
      img: news3,
    },
    {
      img:news4
    },
    {
      img:news5
    },
  ];

const JornaisPage = () => {
  return (
    <Page>
      <CitiesSlider slides={slides} />
    </Page>
  );
};

export default JornaisPage;
