import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import Link from '../components/ExtendedLink';
import _map from 'lodash/map';
import { Icon } from '@iconify/react';
import { FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import { colors,  mq, font } from '../consts/style';
import { GatsbyImage } from 'gatsby-plugin-image';
import FormatDate  from '../components/formatDate'
import VignetteProjetPerso from "../components/projet/vignetteProjetPerso"
import {
  PageWrapper,
  PageInner,
  Text,
  PageTitle,
  SectionTitle,
  Legende,
  BgWrap,
  Grid2Col,
  Spacer
} from '../components/Elements';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import Seo from '../components/Seo';
import Video from '../components/video';
import PlayerZik from '../components/players/PlayerZik';
import Splash from '../components/Splash';
/*import  AgendaItem  from '../components/agenda/AgendaItem';*/
import  AgendaItemShort  from '../components/agenda/AgendaItemShort';

export const indexQuery = graphql`
 query datoCmsAccueil($locale: String) {
    datoCmsAccueilPage(locale: {eq: $locale}){
      teaser
      logo {
        title
        gatsbyImageData (
          height:150
        )
        
      }
      titreDeLaSectionRegarderEcouter
      videos {
        ... on DatoCmsVideo {
          model {
            apiKey
          }
          id
          titre
          video {
            url
            title
            providerUid
            provider
          }
        }
      }
      playerZik {
        ... on DatoCmsPlayerZik {
          model {
            apiKey
          }
          id
          urlPlayer
          typeDeLecteur
        }
      }
      titreDeLaSectionAgenda
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    projets : allDatoCmsProjet(filter: {locale: {eq: $locale}}) {
      nodes {
        slug
        nom
        teaser
        imagePrincipale {  
          gatsbyImageData(
            placeholder: BLURRED,
            forceBlurhash: false,   
            height:150,
            width:250,
          
          )
        }
      }  
      
    }
    news: allDatoCmsActualite(filter: {locale: {eq: $locale}}, limit: 1, sort: {fields: meta___createdAt, order:DESC}) {
      nodes {
        id
        slug
        titre
        contenu
        teaser
        meta {
          createdAt
        }
        image {  
          title
          gatsbyImageData(
            placeholder: BLURRED,
            forceBlurhash: false,   
            width:740,
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
          slug
        }
      }
    }
  }
`;

const AgendaListWrapper =   styled.div`
  display:flex;
  flex-direction:column;
  width:100%; 
  margin:1rem 0;
  padding: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0;
  background-color:${colors.greenLight};
`

const News = styled.div`
  margin:0 auto;
  margin-top:1rem;
  h2 {
    a { ${font.h2}}
    ${font.h2}
    transition: all .15s ease-in-out;
    text-transform:none;
  }
 /* background-color:${colors.greenLight};
  padding:2rem;*/
  
`

const NewsItemImage =   styled(GatsbyImage)`  
  min-width:340px;
  border-radius:4px;
  margin-bottom:0;
 
  ${mq.tabletSmall`
   height:100%;
   width:100%;
   min-width:auto;
  `}

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
const Grid2ColAsym =   styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  grid-gap:8%;
  ${mq.tabletSmall`
   
  display:block;

 `}
`
const GridProjets =   styled.div`
  margin-top:1rem;
  padding:2rem;  
  display:grid;
  grid-gap:  1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(150px, auto);
  /*grid-auto-rows: 150px;*/
  ${mq.tablet`
    grid-template-columns: repeat(4, 1fr);
  `}
  ${mq.tabletSmall`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${mq.mobile`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(150px, auto);
  `}

`

const IndexPage = ({ data, pageContext }) => {


  const {
    teaser,
    logo,
    titreDeLaSectionAgenda,
    titreDeLaSectionRegarderEcouter,
    videos,
    playerZik,
    seoMetaTags
  } = data.datoCmsAccueilPage;
  const { nodes } = data.agenda; // toutes les dates
  
  //gestion agenda 
  var nbDates = 0 ;
  const dateDuJour = new Date();
  dateDuJour.setHours(0, 0, 0, 0);
  function dateFuture(itemAgenda) {
    (new Date(itemAgenda.dateEvent) >= dateDuJour) && nbDates++
     return (new Date(itemAgenda.dateEvent) >= dateDuJour ) && (nbDates <= 6) ? itemAgenda : null;
  }
  var dateFutures = nodes.filter(dateFuture);

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <Splash teaser={teaser}  logo={logo} />
      <PageWrapper id="top-content">
      <BgWrap color={colors.blueLight}>
          <PageInner>
          <Spacer/>
              <SectionTitle centered   dangerouslySetInnerHTML={{ __html: titreDeLaSectionRegarderEcouter }}/>

              <Spacer/>
                <Grid2Col>
                  <div>
                    { _map(videos, (video, i) => ( 
                        <Video key={i}
                        videoSrcURL={video.video.url} 
                        videoTitle={video.titre}
                        />
                        )
                      )
                    }
                  </div>
                  <div>
                    { _map(playerZik, (player, i) => ( 
                        <div  key={i}>
                          <PlayerZik
                          urlPlayer={player.urlPlayer}
                          type = {player.typeDeLecteur}
                          />
                        </div>
                        )
                      )
                    }
                  </div>
                </Grid2Col> 
                <Spacer/>
          </PageInner>
          </BgWrap>
          <Spacer/>
          
        <PageInner>
        <Grid2ColAsym>
          <div>
                <PageTitle as="h2" centered >actu</PageTitle> 
                { _map(data.news.nodes, (lastnews, i) => (
                  
                <News key={i}>
                  <NewsItemImage image={lastnews.image.gatsbyImageData} alt={lastnews.titre}/>
                  <Legende>{lastnews.image.title}</Legende>
                  <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={lastnews.meta.createdAt}/>
                  </NewsItemDate>
                  <h2><Link to={`/actualites/${lastnews.slug}/`} title={lastnews.titre}>{lastnews.titre}</Link></h2>
                  
                  <Text dangerouslySetInnerHTML={{ __html: lastnews.teaser}}/>
                  <BtnPrimary to={`/actualites/${lastnews.slug}/`}><FormattedMessage id="lire la suite"/></BtnPrimary>

       
                 
          <Spacer/>
                </News>

                  )
                )}

          </div>
          <div> 
                  <PageTitle centered  dangerouslySetInnerHTML={{ __html: titreDeLaSectionAgenda }}/>
                  <AgendaListWrapper>

                  { _map(dateFutures, (item, i) => {
                    return (
                        <AgendaItemShort key={i} item={item} path="projets/"/>
                    )             
                    }
                  )}

                  </AgendaListWrapper> 
                  <BtnPrimary to={`/agenda`}><FormattedMessage id="btn__toutes les dates"/></BtnPrimary>
                 
            </div>
           
          </Grid2ColAsym>
         
         
          </PageInner>
          
          <BgWrap color={colors.blueLight}>
          
          
           
            <PageInner>
            <PageTitle as="h2" centered >projets</PageTitle> 
              <GridProjets>
                { _map(data.projets.nodes, (item, i) => (
                      <VignetteProjetPerso key={i} item={item} format="mini" path="/projets/" />
                ))}
              </GridProjets>
              <BtnPrimary to='/projets'><FormattedMessage id="btn__projets et collaborations"/></BtnPrimary>
            </PageInner>
          </BgWrap>
         
          <Spacer/>
      
         

      </PageWrapper>
     
    </Fragment>
  );
}


export default IndexPage