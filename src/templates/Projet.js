import React, { Fragment, useRef } from 'react';
import {  graphql } from 'gatsby';
import Link from '../components/ExtendedLink';
import styled from 'styled-components';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import { Banner, PageWrapper, PageInner, PageTitle, Title,Spacer, Text2Col, ArrowLeftLink, ArrowRightLink, ArrowLeftIcon, ArrowRightIcon,Text } from '../components/Elements';
import { colors, mq } from '../consts/style';
import { projetTypes } from '../types/propTypes';
import Seo from '../components/Seo';
import Boop from '../components/boop';
import { GatsbyImage } from 'gatsby-plugin-image';

const PageInnerActivite = styled.div`
  width: 100%; 
  position:relative;
  display:grid;
  
  grid-template-columns: 2fr 1fr;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  grid-gap:5rem;

  ${mq.tablet` 
  grid-template-columns: 1fr;
  grid-template-columns:  minmax(0, 1fr);
  grid-gap:1rem;
  `
}
`;

const LeftCol = styled.div`
  z-index:0;
`;

const EncartWrap = styled.div`
    margin-top: -20vh;
    grid-area: 1 / 2 / auto / auto;
    position:relative;
    ${mq.tablet` 
    grid-area: 1 / 1 / auto / auto;
    margin-top: -10vh;
    `
  }
`;

const Encart =  styled.div`
  background: ${colors.yellowLight};
  background:linear-gradient(90deg, rgba(241,239,212,1) 5%, rgba(246,234,203,1) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: sticky;
  top: 150px;
  margin: 0px auto;
  text-align: left;
  max-width:500px;
  padding:3rem;
  margin-bottom:2rem;
  ${mq.tablet` 
    position: relative;
    top: 0;
    padding:2rem;
  `}

  
`;

const EncartTitle = styled.div`

  text-align:left;
  margin-top:-1rem;
  margin-bottom:1rem;
  font-size:2.2rem;
`;

const EncartPicto = styled.div`
    position:absolute;
    
    right:0;
    top:0;
    transform:translateY(-50%) scale(.75  );
    & > * {cursor:default!important;}
`;
const EncartText = styled.div`
   font-size:1.6rem;
   font-weight:500;
   line-height: 1.4;
   ul {
    list-style: none;
    padding-left:2rem;
      li { margin-bottom:.6rem;}
      li:before {
        content: "";
        color: ${colors.blue};
        font-weight: bold;
        display: inline-block; 
        margin-left: -20px;
        margin-right: 10px;
       border-radius:100%;
        width: 10px;
        height: 10px;
        background:${colors.yellow};
        border: 2px solid ${colors.dark};
      }
    }

`;

const LineHeading = styled.div`

  margin-top:5rem;
  margin-bottom:3rem;
  overflow: hidden;
  text-align: center;

 &:before,
 &:after {
  background-color: ${colors.blue};
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
  margin-right:2rem;
  ${mq.tablet`
    display:none;
 `}
 }
 &:before {
  right: 2rem;
  margin-left: -50%;
 }
 &:after {
  left: 2rem;
  margin-right: -50%;
 }
 `



const Projet = ({ data, pageContext, location }) => {

  const { id, nom, teaser, contenu, description, imagePrincipale, seoMetaTags} = data.projet;
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      
      <PageWrapper>
        <PageInner>
       
          <PageTitle>Projets</PageTitle>
          <Title maxWidth centered>{nom}</Title>
        </PageInner>
       
        <PageInner>
        <Spacer /> 
          <div style={{textAlign:"center"}}>
          <GatsbyImage image={imagePrincipale.gatsbyImageData} alt={nom}/>
          </div>
          <Spacer /> 
          <Text dangerouslySetInnerHTML={{ __html:teaser }}/>
          <Text dangerouslySetInnerHTML={{ __html:contenu }}/>
        
        
        
        
        </PageInner>
       {/* 
      <PageInnerActivite>
          <LeftCol>
          <PageTitle  dangerouslySetInnerHTML={{ __html: titreAlt }}/>
          <Text2Col><Text dangerouslySetInnerHTML={{ __html: description }}/></Text2Col>
          <Spacer/>
 
        </LeftCol>

        <EncartWrap>
          <Encart>
           
            <EncartBtnWrapper>
             
            {extraBoutonBilletterie.map(block => (
              <React.Fragment key={block.id}>
                {block.model.apiKey === "bouton_guidap" && (    
                  <BtnPrimary as="a" href="#" onClick={()=>handleClick(block.codeGuidap)}>{block.texteDuBouton}</BtnPrimary>   
                  )
                }
              </React.Fragment>
            ))}
            </EncartBtnWrapper>
           
          </Encart>
          
        </EncartWrap>


        </PageInnerActivite> */}
   
       
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
};

export const projectQuery = graphql`
  query($slug: String!, $locale: String!) {
    
    projet: datoCmsProjet(slug: { eq: $slug }, locale: {eq: $locale}) {
      id
      nom
      description
      teaser
      imagePrincipale {
        gatsbyImageData(
          placeholder: BLURRED,
          forceBlurhash: false,   
        )
      } 
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
         
    }
  }
`;

Projet.propTypes = projetTypes;

export default Projet;
