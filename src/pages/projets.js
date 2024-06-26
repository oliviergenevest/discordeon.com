import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { colors, font, mq } from "../consts/style"
import Seo from "../components/Seo"
import VignetteProjetPerso from "../components/projet/vignetteProjetPerso"
import _map from 'lodash/map';
import styled from 'styled-components';

import {
  PageWrapper,
  PageInner,
  PageTitle,
  SectionTitle,
  Text,
  Flex,
  BgWrap,
  Grid3Col,
  Spacer,
} from "../components/Elements"



const TitleProjet = styled(SectionTitle)`
  ${font.h2Oblique}
  display:inline;
`;

const FlexProjetsPerso = styled(Flex)`
  gap:2rem;
  align-items:flex-start;
  margin-bottom:5rem;
  padding-top:2rem;
  padding-bottom:5rem;
`;

const StyledGrid3Col = styled(Grid3Col)`
/*margin-left:15rem;*/
margin-top:3rem;
margin-bottom:9rem;
grid-gap:2rem;
${mq.tabletSmall`
margin-left:0;
display:grid;
grid-template-columns: 1fr 1fr;  

`}
`;



export const projetsPageQuery = graphql`
  query projetsQuery($locale: String) {
    

    page: datoCmsPageProjet(locale: {eq: $locale}) {
      titre
      titreProjetsPersos
      descriptionProjetsPersos
      projetsPerso {
          slug
          nom
          teaser
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:360,
              height:250,
            )
          }
      }
      titreProjetsActuels
      descriptionProjetsActuels
      projetsActuels {
          slug
          nom
          teaser
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:360,
              height:250,
            )
          }
      }
      titreProjetsPasses
      descriptionProjetsPasses
      projetsPasses {
          slug  
          nom
          teaser
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:360,
              height:250,
            
            )
          }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
const ProjetsPage =  ({ data }) => {

  const {
    titre,
    titreProjetsPersos,
    descriptionProjetsPersos,
    projetsPerso,
    projetsActuels,
    titreProjetsActuels,
    descriptionProjetsActuels,
    projetsPasses,
    titreProjetsPasses,
    descriptionProjetsPasses,
    seoMetaTags,
  } = data.page

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
      
        
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <TitleProjet>{titreProjetsPersos}</TitleProjet>
          <Text dangerouslySetInnerHTML={{ __html: descriptionProjetsPersos }}  style={{'paddingLeft':'3rem'}}/>
          
          <StyledGrid3Col>
            { _map(projetsPerso, (item, i) => (
                  <VignetteProjetPerso key={i} item={item} format="full"/>
            ))}
           </StyledGrid3Col>
      
          </PageInner>
       

      
        <BgWrap color={colors.blueLight}>
        <Spacer/>
        <PageInner>
          <TitleProjet>{titreProjetsActuels}</TitleProjet>
          <Text dangerouslySetInnerHTML={{ __html: descriptionProjetsActuels }} style={{'paddingLeft':'3rem'}}/>
         
          <StyledGrid3Col>
            { _map(projetsActuels, (item, i) => (
                  <VignetteProjetPerso key={i} item={item} format="short"/>
            ))}
          </StyledGrid3Col>
        </PageInner>
      
        </BgWrap>
        
        <Spacer/>
   
          <PageInner>         
            <TitleProjet>{titreProjetsPasses}</TitleProjet>
            <Text dangerouslySetInnerHTML={{ __html: descriptionProjetsPasses }}  style={{'paddingLeft':'3rem'}}/>
          
            <StyledGrid3Col>
              { _map(projetsPasses, (item, i) => (
                    <VignetteProjetPerso key={i} item={item} format="short"/>
              ))}
            </StyledGrid3Col>
          </PageInner>
  
        <Spacer/>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  )
}

export default  ProjetsPage