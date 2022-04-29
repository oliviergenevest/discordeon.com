import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import Link from '../components/ExtendedLink';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import { colors,  space } from '../consts/style';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  PageWrapper,
  PageInner,
  SectionWrapper,
  Flex,
  FocusText,
  Text,
  SectionTitle,
  Legende,
  BgWrap,
  Grid2Col,
  Spacer
} from '../components/Elements';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import Seo from '../components/Seo';
import Video from '../components/video';
import Splash from '../components/Splash';
import  AgendaItem  from '../components/agenda/agendaItem';
export const indexQuery = graphql`
 query datoCmsAccueil($locale: String) {
    datoCmsAccueilPage(locale: {eq: $locale}){
      teaser
      logo {
        title
        fluid(maxHeight: 438, imgixParams: { fm: "png", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
        }
      }
      titreDeLaSectionRegarderEcouter
      videos {
        ... on DatoCmsVideo {
          model {
            apiKey
          }
          id
          video {
            url
            title
            providerUid
            provider
          }
        }
      }
      titreDeLaSectionAgenda
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    
    news: allDatoCmsActualite(filter: {locale: {eq: $locale}}, limit: 1, sort: {fields: meta___updatedAt, order:DESC}) {
      nodes {
        id
        slug
        titre
        contenu
        teaser
        image {  
          gatsbyImageData(
            placeholder: BLURRED,
            forceBlurhash: false,           
          )
        }
      }
    }


    agenda: allDatoCmsAgenda(filter: {locale: {eq: $locale}}, sort: {order: ASC, fields: dateEvent}){
      nodes {
        id
        meta {
          createdAt
        }
        titre
        details
        dateEvent
        projet {
          nom
        }
      }
    }
  }
`;

const AgendaListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
/*gap:5rem;*/
margin-top:8rem;
`

const SectionNews = styled.div`
width:100%;
position:relative;
margin-top:1rem;
margin-bottom:5rem;
text-align:center;
`

const News = styled.div`
  margin:0 auto;
  max-width:705px;
`


const IndexPage = ({ data, pageContext }) => {


  const {
    teaser,
    logo,
    titreDeLaSectionAgenda,
    titreDeLaSectionRegarderEcouter,
    videos,
    seoMetaTags
  } = data.datoCmsAccueilPage;
  const { nodes } = data.agenda; // toutes les dates
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <Splash teaser={teaser}  logo={logo} />
      <PageWrapper>
        <PageInner>
                { _map(data.news.nodes, (lastnews, i) => ( 
                <News key={i}>
                  <SectionTitle centered  dangerouslySetInnerHTML={{ __html: lastnews.titre }} />
                    <Text dangerouslySetInnerHTML={{ __html: lastnews.teaser}}/>
                    <BtnPrimary to={`/actualites/${lastnews.slug}/`}><FormattedMessage id="more"/></BtnPrimary>
                  </News>
                  )
                )}
          </PageInner>

          <Spacer/>
          <Spacer/>

          <PageInner>
          
              <SectionTitle centered   dangerouslySetInnerHTML={{ __html: titreDeLaSectionRegarderEcouter }}/>
             { _map(videos, (video, i) => ( 
        
                <Video key={i}
                videoSrcURL={video.video.url.replace('watch?v=', 'embed/')}
                videoTitle={video.video.title}
                />
                
             
                  )
                )}
           
          </PageInner>
        
          <Spacer/>
          <BgWrap color={colors.blueLight}>
          <Spacer/>
            <PageInner>
              <SectionTitle centered  dangerouslySetInnerHTML={{ __html: titreDeLaSectionAgenda }}/>
              <AgendaListWrapper>
              { _map(nodes.slice(0,6), (item, i) => (
                (new Date(item.dateEvent) >= new Date()) && 
                  <AgendaItem key={i} item={item}/>
              
              ))}
              </AgendaListWrapper> 
              <BtnPrimary to={`/agenda`}><FormattedMessage id="btn__toutes les dates"/></BtnPrimary>

            </PageInner>
          </BgWrap>
         
       

    
      
      </PageWrapper>
     
    </Fragment>
  );
}


export default IndexPage