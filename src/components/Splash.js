import React from 'react';
import styled from 'styled-components';
import { colors, mq } from '../consts/style';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArrowDown } from '@styled-icons/bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
/*import backgroundImage from "../images/splash-background.jpg"*/
import backgroundImage from "../images/splash-background2.jpg"
/*import backgroundImage from "../images/splash-background3.jpg"*/
/*
const headerQuery = graphql`
  {
    data: datoCmsHomepage {
      projetsHomepage {
          slug
          titre
          id
          lieu
          imagePrincipale {
            fluid(maxWidth: 1980, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }    
      }
    }
  }
`;*/


const WrapperSplash = styled.div`
  /*min-height: 100vh;*/
  height:calc(100vh - 2rem - 110px);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position:relative;
  background:url(${backgroundImage});
  background-size:contain;
  padding:4rem;
  margin:2rem;
  margin-top:0; 
  padding-top:0; 
  ${mq.tabletSmall`
  height:calc(100vh - 4rem - 80px);
  `}
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
 /* width:100%;*/
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


const GoToContentWrapper = styled.div `
  width: 100px;
  height: 50px; /* as the half of the width */
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 1px solid white;
  border-bottom: 0;
  background-color:white;
  text-align:center;
  
  position: absolute;
  bottom: 0;
  
  right: auto;
  
  ${mq.mobile`
  /*display: none;*/
  `}
  transition: all 0.25s;
   
  &:hover {
    transform:scale(1.1);
     transition: all 0.25s ease-in-out;
    cursor:pointer;
  }
`;

const ArrowDownIcon = styled(ArrowDown)`
  color: ${colors.blue};
  padding-top: 0.9rem;
  background: transparent;
  width: 50px;

`;




const Splash = ({teaser, logo, background}) => {

  return (

    <WrapperSplash >  
      <InnerWrapper>
        <Logo image={logo.gatsbyImageData} alt="Discordéon"/>
        <Teaser>{teaser}</Teaser>
      </InnerWrapper>
        <GoToContentWrapper>
          <ArrowDownIcon  onClick={() => scrollTo('#top-content')} />
       </GoToContentWrapper>
       
    </WrapperSplash>
  );
};

export default Splash;
