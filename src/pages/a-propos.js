import React, { Fragment, useState } from 'react';
import { graphql } from 'gatsby';
/*
import styled from 'styled-components';*/
import { GatsbyImage } from 'gatsby-plugin-image';
/*
import ModalWindow from '../components/modal/modal-window'
import { useModalWithData } from '../hooks/modal-hook'*/
import Seo from '../components/Seo';
/*import Boop from '../components/boop';*/
/*import { mq, colors, font } from '../consts/style';*/
import { useSpring, animated } from 'react-spring'
import {
  PageWrapper,
  PageInner,
  PageTitle,
  FocusText,
  Text,
Legende,
  Grid2Col,
  Spacer,
 
} from '../components/Elements';
import styled from 'styled-components';

const EnSavoirPlus = styled(animated.div)`
  opacity:1;
  overflow:hidden;
  padding:0;
`


export const aProposPageQuery = graphql`
 query  aProposPageQuery($locale: String) {
   
    page: datoCmsAProposPage(locale: {eq: $locale}) {
      titre
      aPropos
      biographie
      biographieComplete
      illustration  {
        gatsbyImageData( 
          placeholder: BLURRED,
          forceBlurhash: false,
          width:315
        )
      }
      photoBiographie {
        gatsbyImageData(      
          placeholder: BLURRED,
          forceBlurhash: false,
          width:571
        )
        title
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;


const AProposPage = ({data}) => {
  
 
  const {  titre, aPropos,biographieComplete,biographie, photoBiographie, seoMetaTags } = data.page;
  const [ensavoirplusOpen, setEnsavoirplusOpen] = useState(false) // bio en savoir plus (par defaut replié)
  const divAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 20 },
    native: true,
    to: { opacity:ensavoirplusOpen ? "1" : "0",padding:ensavoirplusOpen ? "2rem" : "0", height: ensavoirplusOpen ? "100%" : "0", backgroundColor:  ensavoirplusOpen ? '#EBEBF3' : '#fff'},
    })

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
     
        <PageInner>
          <PageTitle dangerouslySetInnerHTML={{ __html: titre }} />
          <FocusText maxWidth="700px"  dangerouslySetInnerHTML={{ __html: aPropos }} />
          <Spacer/>
          <Spacer/>
       {/*  <Grid2Col>
          <div>
              
           
             

              <br/>
            </div>
           <div><GatsbyImage image={illustration.gatsbyImageData} style={{marginBottom:"10rem"}} alt="Discordéon"/> </div>
        </Grid2Col>*/}
        <Grid2Col>
          <div><GatsbyImage image={photoBiographie.gatsbyImageData}  alt="Antoine Girard"/> <Legende>{photoBiographie.title}</Legende><Spacer/></div>
         <div>
          <Text dangerouslySetInnerHTML={{ __html: biographie }} />
          {(biographieComplete !== null ) && <>
            <Text><span onClick={() =>setEnsavoirplusOpen(!ensavoirplusOpen)}> {ensavoirplusOpen ? '-' : '+'} En savoir plus</span></Text>
            <EnSavoirPlus style={ divAnimation}>
              <Text dangerouslySetInnerHTML={{ __html: biographieComplete }} />
            </EnSavoirPlus>
           </>
          }
          </div>
        </Grid2Col>
      </PageInner>



       
       
      </PageWrapper>
    </Fragment>
  );
}
export default AProposPage