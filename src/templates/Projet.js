import React, { Fragment , useState} from 'react';
import {  graphql } from 'gatsby';
import styled from 'styled-components';
import _map from 'lodash/map';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import { PageWrapper, PageInner, BgWrap, PageTitle, Title,Spacer,Flex, FocusText,Text } from '../components/Elements';
import { colors } from '../consts/style';
import { useSpring, animated } from 'react-spring'
import Seo from '../components/Seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import {StructuredText} from "react-datocms";
import Video from '../components/video';
import PlayerZik from '../components/players/PlayerZik';
import  AgendaItem  from '../components/agenda/AgendaItem';
import { Download } from '@styled-icons/bootstrap';
import { Icon } from '@iconify/react';
import GalleryLightbox from '../components/GalleryLightbox/GalleryLightbox'

/* ICONES LIEN SITES EXTERNES RUBRIQUE CONTACT */
const IconLink = ({to, icon, text}) => {
  return(
    <LinkSocial title={text} href={to} target="_blank"  rel="nofollow noopener noreferrer">
      {icon}
    </LinkSocial>
  )
};

const EnSavoirPlus = styled(animated.div)`
  opacity:1;
  overflow:hidden;
  padding:0;
`


const StyledBtnPrimary = styled(BtnPrimary)`
  margin-top:1.2rem;
`

const LinkSocial = styled.a`
  display:flex;
  flex-direction:column;
  gap:1rem;
  align-items:center;
  justify-content:center;
  padding:.5rem;
`;

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


const Block = styled.div`
  margin:2rem 0;
`;


const Projet = ({ data, pageContext, location }) => {

  const {  nom, teaser, description2,  imagePrincipale, contacts, downloadFiles,seoMetaTags} = data.projet;
  
  const datesInversees = [...data.dates.nodes].reverse()

  const [datesArchiveesOpen, setDatesArchiveesOpen] = useState(false) // dates archivées (par defaut replié)
  const divAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 20 },
    native: true,
    to: { opacity:datesArchiveesOpen ? "1" : "0",padding:datesArchiveesOpen ? "2rem" : "0", height: datesArchiveesOpen ? "100%" : "0", backgroundColor:  datesArchiveesOpen ? '#EBEBF3' : '#fff'},
    })

    {console.log("ST blocks",description2)}

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      
      <PageWrapper>
        <PageInner> <PageTitle>Projets</PageTitle></PageInner>
       
        <PageInnerProject>
       
         
          <Title maxWidth centered>{nom}</Title>
          <FocusText centered dangerouslySetInnerHTML={{ __html:teaser }} />
          <GatsbyImage image={imagePrincipale.gatsbyImageData} alt={nom}  style={{marginBottom:"1rem",width:"100%"}}/>

         
          {(description2.blocks.length >= 0 ) && <StructuredText
            data={description2}
            renderBlock={({record}) => {
              console.log(record)
              if (record.__typename === "DatoCmsPlayerZik") {
                return <Block>
                        <PlayerZik type={record.typeDeLecteur} urlPlayer={record.urlPlayer}/>
                        </Block>           
              }

              if (record.__typename === "DatoCmsImage") {
                 return <Block>
                          <GatsbyImage image={record.image.gatsbyImageData} alt={record.image.title}/>
                        </Block>
              }
              if (record.__typename === "DatoCmsBouton") {
                return <Block>
                    <BtnPrimary as="a" href={record.lienDuBouton} external>{record.texteDuBouton}</BtnPrimary>  
                  </Block> 
             }
              if (record.__typename === "DatoCmsVideo") {
                return <Block>
                          <Video
                            videoSrcURL={record.video.url}
                            videoTitle={record.video.title}
                          />
                        </Block>
              }

              if (record.__typename === "DatoCmsGallerieImage") {
                return <Block> 
                <GalleryLightbox images={record.images} />
              </Block>
              }
              if (record.__typename === "DatoCmsTexte") {
                return  <Text dangerouslySetInnerHTML={{ __html:record.texte }}/>
              }

              return (
                <>
                  <p>bloc inconnu</p>
                  <pre>{/*JSON.stringify(record, null, 2)*/}</pre>
                </>
              )

            }}
          />
        }
        <StyledGrid2Col>
        {(contacts.length > 0) && 
          <GridItem>
            <Text><h3>Pour en savoir +</h3></Text>
            <EncartBtnWrapper>
            {contacts.map(block => (
              <React.Fragment key={block.id}>
                {block.model.apiKey === "page_internet" && (    
                           <IconLink to={block.url} icon={<Icon title="Site internet" icon="iconoir:www" style={{color: colors.dark, fontSize: '28px'}} />} text={block.url}/>
                           )
                }
                {block.model.apiKey === "page_facebook" && (    
                           <IconLink to={block.url} icon={<Icon title="Facebook" icon="akar-icons:facebook-fill" style={{color: colors.dark, fontSize: '28px'}} />} text={block.url}/>
                  )
                }
                {block.model.apiKey === "page_bandcamp" && (    
                           <IconLink to={block.url} icon={<Icon title="Bandcamp" icon="fa:bandcamp" style={{color: colors.dark, fontSize: '28px'}} />} text="Bandcamp"/>
                           )
                }
                {block.model.apiKey === "page_soundcloud" && (    
                           <IconLink to={block.url} icon={<Icon title="Soundcloud" icon="entypo-social:soundcloud" style={{color: colors.dark, fontSize: '28px'}} />} text="Soundcloud"/>
                           )
                }
              </React.Fragment>
            ))}
            </EncartBtnWrapper>
          </GridItem>
        }

        {(downloadFiles.length > 0) && 
          <GridItem>
            <Text><h3>Pour les pros</h3></Text>
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
          <BgWrap color={colors.blueLight}>
            <Text><h2>En tournée</h2></Text>      
            <AgendaListWrapper>
              { _map(data.dates.nodes, (item, i) => (
                (new Date(item.dateEvent) >= new Date()) && 
                  <AgendaItem key={i} item={item}/>
              ))} 
            </AgendaListWrapper>
           
          </BgWrap>
        }

<Spacer/>
           
       
            {(data.dates.nodes.length > 0) &&  
          <BgWrap color={colors.blueLight}>
            <Text><BtnPrimary as="span" onClick={() =>setDatesArchiveesOpen(!datesArchiveesOpen)}> {datesArchiveesOpen ? 'Masquer' : 'Voir '}  les dates passées</BtnPrimary></Text>  
         
            <EnSavoirPlus style={ divAnimation}>
            <AgendaListWrapper>
              { _map(datesInversees, (item, i) => (
                (new Date(item.dateEvent) <= new Date()) && 
                  <AgendaItem key={i} item={item}/>
              ))} 
            </AgendaListWrapper>
            </EnSavoirPlus>    
           
           
          </BgWrap>
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
          slug
        }
      }
    }
    projet: datoCmsProjet(slug: { eq: $slug }, locale: {eq: $locale}) {
      nom
      description2 {
        value
        blocks {
          __typename
          ...on DatoCmsImage {
            id: originalId
            image {
              title
              gatsbyImageData
            }
          }
          ... on DatoCmsGallerieImage {
            id: originalId
            images {
              title
              url
              gatsbyImageData (
                height:200
              )
            }
          }
          ...on DatoCmsVideo {
            id: originalId
            titre
            video { 
              url
              title
            }
            
          }
          ...on DatoCmsTexte {
            id: originalId
            texte
          }
          ...on DatoCmsPlayerZik {
            id: originalId
            urlPlayer
            typeDeLecteur
          }
        ...on DatoCmsBouton {
           id: originalId
          lienDuBouton
          lienExterne
          texteDuBouton
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
        ... on DatoCmsPageInternet {
          id
          url
          model {
            apiKey
          }
        }
        ... on DatoCmsPageFacebook {
          id
          url
          model {
            apiKey
          }
        }
        ... on DatoCmsPageBandcamp {
          id
          url
          model {
            apiKey
          }
        }
        ... on DatoCmsPageSoundcloud {
          id
          url
          model {
            apiKey
          }
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



export default Projet;
