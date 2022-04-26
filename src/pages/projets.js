import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { colors, font } from "../consts/style"
import Img from "gatsby-image"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm/ContactForm"
import BtnPrimary from "../components/buttons/ButtonRounded"
import VignetteProjetPerso from "../components/projet/vignetteProjetPerso"
import { FormattedMessage} from 'react-intl';
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
  Grid2Col,
  Spacer,
} from "../components/Elements"



const TitleProjet = styled(SectionTitle)`
  ${font.h2Oblique}
`;

const FlexProjetsPerso = styled(Flex)`
  gap:2rem;
  align-items:flex-start;
  margin-bottom:5rem;
  padding-top:5rem;
  padding-bottom:5rem;

`;


export const projetsPageQuery = graphql`
  query projetsQuery($locale: String) {
    

    page: datoCmsPageProjet(locale: {eq: $locale}) {
      titre
      projetsPerso {
          slug
          nom
          teaser
          description
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:550,
            
            )
          }
      }
      titreProjetsActuels
      projetsActuels {
          slug
          nom
          teaser
          description
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:360,
            
            )
          }
      }
      titreProjetsPasses
      projetsPasses {
          slug  
          nom
          teaser
          description
          imagePrincipale {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:360,
            
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
    projetsPerso,
    projetsActuels,
    titreProjetsActuels,
    projetsPasses,
    titreProjetsPasses,
    seoMetaTags,
  } = data.page

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{titre}</PageTitle>
        </PageInner>
        <BgWrap color={colors.blueLight}>
          <FlexProjetsPerso>
            { _map(projetsPerso, (item, i) => (
                  <VignetteProjetPerso key={i} item={item}/>
            ))}
           </FlexProjetsPerso>
        </BgWrap>
        <Spacer/>
        <PageInner>
          <TitleProjet>{titreProjetsActuels}</TitleProjet>
          <Flex>
            { _map(projetsActuels, (item, i) => (
                  <VignetteProjetPerso key={i} item={item}/>
            ))}
          </Flex>
        </PageInner>
        <PageInner>
          <TitleProjet>{titreProjetsPasses}</TitleProjet>
          <Flex>
            { _map(projetsPasses, (item, i) => (
                  <VignetteProjetPerso key={i} item={item}/>
            ))}
          </Flex>
        </PageInner>

      </PageWrapper>
    </Fragment>
  )
}

export default  ProjetsPage