import React, { Fragment, useRef } from "react"
import { graphql } from "gatsby"
import { Icon } from '@iconify/react';
import styled from "styled-components"
import _map from "lodash/map"
import { GatsbyImage } from 'gatsby-plugin-image';
import FormatDate  from '../components/formatDate'
import BtnPrimary from "../components/buttons/ButtonRounded"
import {
  Banner,
  PageWrapper,
  PageInner,
  Title,
  PageTitle,
  Spacer,
  Legende,
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

  grid-template-columns: 1fr 2fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 5rem;

  ${mq.tablet` 
  grid-template-columns: 1fr;
  grid-template-columns:minmax(0, 1fr);
  grid-gap:1rem;
  `}
`


const LeftContainer =   styled.div`
  background: #EBEBF3;
  padding: 2.5rem;
  padding-right:5rem;
  color:${colors.blue};
`


const NewsItemDate =   styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:flex-start;
  gap:.8rem;
  color:${colors.dark};
  font-size:1.4rem;
  svg path:first-of-type {
   fill: ${colors.yellow};
  }
 
`


const News = ({ data, pageContext, location }) => {
  const {
    titre,
    image,
    teaser,
    contenu,
    colonneGauche,
    meta,
    seoMetaTags
  } = data.news
 

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />

      <PageWrapper>
        <PageInner>
          <PageTitle>News</PageTitle>
          <Title maxWidth centered>{titre}</Title>
          <Spacer /> 
          <div style={{textAlign:"center"}}>
            <GatsbyImage image={image.gatsbyImageData} alt={titre} />
            <Legende>{image.title}</Legende>
          </div>
        </PageInner>
        <PageInner>
        <Spacer /> 
        <PageInnerNews>
          <LeftContainer>
                  <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={meta.createdAt}/>
                  </NewsItemDate>
                  <Text dangerouslySetInnerHTML={{ __html:colonneGauche }}/>
          </LeftContainer>
          <Text dangerouslySetInnerHTML={{ __html:contenu}}/>
        </PageInnerNews>
        </PageInner>
        <Spacer />
      </PageWrapper>
    </Fragment>
  )
}

export const newsQuery = graphql`
  query($slug: String!, $locale: String!) {
    news: datoCmsActualite(slug: { eq: $slug }, locale: { eq: $locale }) {
      titre
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      colonneGauche
      teaser
      contenu
      meta {
        createdAt
      }
      id
      image{
        title
        gatsbyImageData(
          placeholder: BLURRED,
          forceBlurhash: false,
          width:1200
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