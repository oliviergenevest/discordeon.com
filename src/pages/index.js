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
          height:195
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
            height:130,
          
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
            width:710,
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
/*gap:5rem;*/
margin-top:8rem;
`


const News = styled.div`
  margin:0 auto;
  max-width:705px;
  margin-top:2rem;
  h2 {
    a { ${font.h2}}
    ${font.h2}
    transition: all .15s ease-in-out;
    text-transform:none;
  }
  
`

const NewsItemImage =   styled(GatsbyImage)`  
  min-width:340px;
  border-radius:4px;
  margin-bottom:0;
  margin-top:1rem;
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
`
const GridProjets =   styled.div`
  display:flex;
  gap:  1rem;
  flex-wrap: wrap;
  justify-content: center;
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
  
  console.log(data.projets.nodes);
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <Splash teaser={teaser}  logo={logo} />
      <PageWrapper>
      
        <PageInner>
        <Grid2ColAsym>
          <div>
                <PageTitle centered >actu</PageTitle> 
                { _map(data.news.nodes, (lastnews, i) => (
                  
                <News key={i}>
                  <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={lastnews.meta.createdAt}/>
                  </NewsItemDate>
                  <h2><Link to='./actualites' title={lastnews.titre}>{lastnews.titre}</Link></h2>
                  <NewsItemImage image={lastnews.image.gatsbyImageData} alt={lastnews.titre}/>
                  <Legende>{lastnews.image.title}</Legende>
                  <Text dangerouslySetInnerHTML={{ __html: lastnews.teaser}}/>
                  <BtnPrimary to={`/actualites/${lastnews.slug}/`}><FormattedMessage id="lire la suite"/></BtnPrimary>
                  </News>
                  )
                )}
          </div>
          <div> 
                  <PageTitle centered  dangerouslySetInnerHTML={{ __html: titreDeLaSectionAgenda }}/>
                  <AgendaListWrapper>
                  { _map(nodes.slice(0,6), (item, i) => (
                    (new Date(item.dateEvent) >= new Date()) && 
                      <AgendaItemShort key={i} item={item} path="projets/"/>
                  
                  ))}
                  </AgendaListWrapper> 
                  <BtnPrimary to={`/agenda`}><FormattedMessage id="btn__toutes les dates"/></BtnPrimary>
                 
            </div>
           
          </Grid2ColAsym>
          </PageInner>
         
       
          <Spacer/>
          <Spacer/>
          <BgWrap color={colors.blueLight}>
          <PageInner>
          
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

          </PageInner>
          </BgWrap>
          <Spacer/>
          <PageInner><Spacer/>
          <center><BtnPrimary to='/projets'><FormattedMessage id="Projets et collaborations"/></BtnPrimary></center>
          <Spacer/>
            <GridProjets>
              { _map(data.projets.nodes, (item, i) => (
                    <VignetteProjetPerso key={i} item={item} format="mini"/>
              ))}
            </GridProjets>
          </PageInner>
          <Spacer/>
       {/*   <BgWrap color={colors.blueLight}>
        
          
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
          </BgWrap>*/}
         

      </PageWrapper>
     
    </Fragment>
  );
}


export default IndexPage