import React, { Fragment, useRef } from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import styled from "styled-components"
import _map from "lodash/map"
import { GatsbyImage } from 'gatsby-plugin-image';

import BtnPrimary from "../components/buttons/ButtonRounded"
import {
  Banner,
  PageWrapper,
  PageInner,
  Title,
  PageTitle,
  Spacer,
  Text2Col,
  ArrowLeftLink,
  ArrowRightLink,
  ArrowLeftIcon,
  ArrowRightIcon,
  Text,
} from "../components/Elements"
import { colors, mq } from "../consts/style"
import Seo from "../components/Seo"
import Boop from "../components/boop"




const PageInnerNews = styled.div`
  width: 100%;
  position: relative;
  display: grid;

  grid-template-columns: 2fr 1fr;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  grid-gap: 5rem;

  ${mq.tablet` 
  grid-template-columns: 1fr;
  grid-template-columns:minmax(0, 1fr);
  grid-gap:1rem;
  `}
`




const News = ({ data, pageContext, location }) => {
  const {
    titre,
    image,
    teaser,
    contenu,
    seoMetaTags
  } = data.news
 

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />

      <PageWrapper>
        <PageInner>
          <PageTitle>News</PageTitle>
          <Title maxWidth centered>{titre}</Title>
          <Banner height="520px">
          <GatsbyImage image={image.gatsbyImageData} alt={titre} />

          </Banner>
        </PageInner>
        <PageInnerNews>
        
        </PageInnerNews>

        <Spacer />
      </PageWrapper>
    </Fragment>
  )
}

export const projectQuery = graphql`
  query($slug: String!, $locale: String!) {
    news: datoCmsActualite(slug: { eq: $slug }, locale: { eq: $locale }) {
      titre
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      contenu
      id
      image{
        gatsbyImageData(
          
          placeholder: BLURRED,
          forceBlurhash: false,
         
         
        )
      }
  
      
     
    }
  }
`
/* a a jouter a la requete ci dessus
modular {
  ... on DatoCmsBouton {
    model {
      apiKey
    }
    id
    lienDuBouton
    lienExterne
    boutonGuidap
    texteDuBouton
  }
  ... on DatoCmsTexte {
    model {
      apiKey
    }
    id
    texteEncart
  }
}*/

export default News