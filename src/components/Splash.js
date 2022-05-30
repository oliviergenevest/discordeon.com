import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../consts/style';
import { GatsbyImage } from 'gatsby-plugin-image';
import backgroundImage from "../images/splash-background.jpg"

const WrapperSplash = styled.div`
  max-height: 500px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position:relative;
  background:url(${backgroundImage});
  background-size:contain;
  padding:6rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: transparent;
  gap:6rem;
`;

const Logo = styled(GatsbyImage)`
  width:100%;
`;

const Teaser = styled.h1`
  color:${colors.light};
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300!important;
  font-size:2.4rem; 
  text-align:center;
  max-width:862px;
  ${mq.tabletSmall`
  font-size:1.8rem; 
  `}
`;





const Splash = ({teaser, logo, background}) => {

  return (

    <WrapperSplash >  
      <InnerWrapper>
        <Logo image={logo.gatsbyImageData} alt="Discordéon"/>
        <Teaser>{teaser}</Teaser>
      </InnerWrapper>
    </WrapperSplash>
  );
};

export default Splash;
