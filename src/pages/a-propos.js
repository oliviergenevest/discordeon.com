import React, { Fragment } from 'react';
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





export const aProposPageQuery = graphql`
 query  aProposPageQuery($locale: String) {
   
    page: datoCmsAProposPage(locale: {eq: $locale}) {
      titre
      aPropos
      biographie
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
  
 
  const {  titre, aPropos/*,illustration*/,biographie, photoBiographie, seoMetaTags } = data.page;

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
         
          <Text dangerouslySetInnerHTML={{ __html: biographie }} />
        </Grid2Col>
      </PageInner>



       
       
      </PageWrapper>
    </Fragment>
  );
}
export default AProposPage