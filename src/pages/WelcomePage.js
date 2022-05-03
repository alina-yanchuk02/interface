import Page from 'components/Page';
import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import 'styles/components/_welcome.scss';
import FadeIn from 'components/FadeIn';
import card1 from 'assets/img/news/card1.png';
import card2 from 'assets/img/news/card2.png';
import Box from '@mui/material/Box';

import {
  CardImg,
  Row,
} from 'reactstrap';

function Card({ children }) {
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
      className="cardWelcome"
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
        const dampen = 50; // Lower the number the less rotation
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



function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}


const cards = [
  {
    image: card1
  },
  {
    image: card2
  },

];

const WelcomePage = () => {
  return (
    <Page title="" >
      <Row>
      <div style={{backgroundImage:'linear-gradient(#ffd639, white)', height:"100vh", width:"100%"}}>
        <FadeIn delay="500">
        <p className="headingWelcome">CONSEGUE DESCOBRIR A DIFERENÇA ENTRE OS SEGUINTES DOIS TÍTULOS DE NOTÍCIAS?</p>
        </FadeIn>
        <Hero>
                <div className="container">
                 
                  <div className="row">
                    {cards.map((card, i) => (
                      <div className="column">
                        <FadeIn delay="2500">
                        <Card className="cardWelcome">
                        <Box className="boxWelcome"
                  >
                   <CardImg className="welcomeImg" src={card.image}/>
                  </Box>
                        </Card>
                        </FadeIn>
                      </div>
                    ))}
                  </div>
                </div>
              </Hero>
              <FadeIn delay="6200">
              <p className="headingAnswer1">O primeiro referencia uma doença mental num contexto adequado, sem a estigmatizar.</p>
              </FadeIn>
              <FadeIn delay="8500">
                <Row>
              <p className="headingAnswer2">O segundo utiliza a mesma doença como uma </p> 
              <p className="headingAnswer3"> metáfora.</p>
              </Row>
              </FadeIn>
          </div>
          </Row>
    </Page>
  );
};

export default WelcomePage;
