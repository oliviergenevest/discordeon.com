import React, { Fragment, useRef } from 'react';
import {  graphql } from 'gatsby';
import Link from '../components/ExtendedLink';
import styled from 'styled-components';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import { Banner, PageWrapper, PageInner, Grid2Col,PageTitle, Title,Spacer,Flex, FocusText,Text2Col, ArrowLeftLink, ArrowRightLink, ArrowLeftIcon, ArrowRightIcon,Text } from '../components/Elements';
import { colors, mq } from '../consts/style';
import { projetTypes } from '../types/propTypes';
import Seo from '../components/Seo';
import Boop from '../components/boop';
import { GatsbyImage } from 'gatsby-plugin-image';
import {StructuredText} from "react-datocms";
import Video from '../components/video';
import  AgendaItem  from '../components/agenda/agendaItem';



const PageInnerProject = styled.div`
  max-width: 780px; 
  position:relative;
`;


const EncartBtnWrapper  = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const AgendaListWrapper =   styled.div`
  display:flex;
  flex-direction:column;
  width:100%; 
  /*gap:5rem;*/
  margin-top:3rem;
`
const StyledGrid2Col = styled(Flex)`
 gap:2rem;
 width:100%;
 align-items:flex-start;  
`;

const GridItem = styled.div`
background-color:${colors.blueLight};
border-top:8px solid  rgba(9, 255, 0, 0.37);
width:100%;
padding:2rem;
`;


const Projet = ({ data, pageContext, location }) => {

  const {  nom, teaser, description2,  imagePrincipale, contacts, downloadFiles,seoMetaTags} = data.projet;
/*  console.log(data.dates.nodes.length)*/
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      
      <PageWrapper>
        <PageInnerProject>
       
          <PageTitle>Projets</PageTitle>
          <Title maxWidth centered>{nom}</Title>
          <FocusText centered dangerouslySetInnerHTML={{ __html:teaser }} />
          
          <GatsbyImage image={imagePrincipale.gatsbyImageData} alt={nom}  style={{marginBottom:"1rem",width:"100%"}}/>

          
          {(description2.blocks.length > 0) && <StructuredText
            data={description2}
            renderBlock={({record}) => {
              if (record.__typename === "DatoCmsImage") {
                 return <GatsbyImage image={record.image.gatsbyImageData} alt=""/>
              }
              if (record.__typename === "DatoCmsVideo") {
                return  <Video
                videoSrcURL={record.video.url.replace('watch?v=', 'embed/')}
                videoTitle={record.video.title}
                />
             }
             if (record.__typename === "DatoCmsTexte") {
              return  <Text dangerouslySetInnerHTML={{ __html:record.texte }}/>
           }

              return (
                <>
                  <p>bloc inconnu</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              )

            }}
          />
        }
        <StyledGrid2Col>
        {(contacts.length > 0) && 
          <GridItem>
            <Text><h2>Contact</h2></Text>
            <EncartBtnWrapper>
            {contacts.map(block => (
              <React.Fragment key={block.id}>
                {block.model.apiKey === "bouton" && (    
                  <BtnPrimary as="a" href={block.lienDuBouton} external>{block.texteDuBouton}</BtnPrimary>   
                  )
                }
              </React.Fragment>
            ))}
            </EncartBtnWrapper>
          </GridItem>
        }

        {(downloadFiles.length > 0) && 
          <GridItem>
            <Text><h2>Téléchargements</h2></Text>
            {downloadFiles.map(file => (
              <React.Fragment key={file.filename}>
                  <BtnPrimary as="a" href={file.url} external>{file.filename}</BtnPrimary>   
              </React.Fragment>
            ))}
          </GridItem>
        }
        </StyledGrid2Col>
        <Spacer/>
        {/* Trier le tableau des dates de manière à n'avoir que le tableau des dates à venir et non passées */}
        {(data.dates.nodes.length > 0) &&  
          <>
            <Text><h2>En tournée</h2></Text>      
            <AgendaListWrapper>
              { _map(data.dates.nodes, (item, i) => (
                (new Date(item.dateEvent) >= new Date()) && 
                  <AgendaItem key={i} item={item}/>
              ))} 
            </AgendaListWrapper>
          </>
        }
        
        </PageInnerProject>
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
    dates: allDatoCmsAgenda(filter: {locale: {eq: $locale}, projet: {slug: {eq: $slug}}}, sort: {order: ASC, fields: dateEvent}){
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
    projet: datoCmsProjet(slug: { eq: $slug }, locale: {eq: $locale}) {
      nom
      description



      description2 {
        value
        blocks {
          __typename
          ...on DatoCmsImage {
            id: originalId
            image {
              gatsbyImageData
            }
          }
          ...on DatoCmsTexte {
            id: originalId
            texte
          }
          ...on DatoCmsVideo {
            id: originalId
            video {
             
                url
                title
                providerUid
                provider
              
              
            }
          }
        }
      }
      teaser
      imagePrincipale {
        gatsbyImageData(
          placeholder: BLURRED,
          forceBlurhash: false,   

        )
      } 

      contacts {
        ... on DatoCmsBouton {
          model {
            apiKey
          }
          id
          lienDuBouton
          lienExterne
          texteDuBouton
        }
      }

      downloadFiles {
        
        filename
        title
        url
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
         
    }
  }
`;

Projet.propTypes = projetTypes;

export default Projet;
