import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import ModalWindow from '../components/modal/modal-window'
import { useModalWithData } from '../hooks/modal-hook'
import Seo from '../components/Seo';
import Boop from '../components/boop';
import { mq, colors, font } from '../consts/style';

import {
  PageWrapper,
  PageInner,
  PageTitle,
  FocusText,
  Text,
  Flex,
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
          width:600
        )
      }
      photoBiographie {
        gatsbyImageData(      
          placeholder: BLURRED,
          forceBlurhash: false,
          width:450
        )
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

const AProposPage = ({data}) => {
  
 
  const {  titre, aPropos,illustration,biographie, photoBiographie, seoMetaTags } = data.page;

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
     
        <PageInner>
          <PageTitle dangerouslySetInnerHTML={{ __html: titre }} />

        <Grid2Col>
          <div>
              
              <FocusText dangerouslySetInnerHTML={{ __html: aPropos }} />
             

              <br/>
            </div>
           <div><GatsbyImage image={illustration.gatsbyImageData} style={{marginBottom:"10rem"}} alt="Discordéon"/> </div>
        </Grid2Col>
        <Grid2Col>
          <div><GatsbyImage image={photoBiographie.gatsbyImageData} style={{marginBottom:"2rem"}} alt="Antoine Girard"/></div>
         
          <Text dangerouslySetInnerHTML={{ __html: biographie }} />
        </Grid2Col>
      </PageInner>



       
       
      </PageWrapper>
    </Fragment>
  );
}
export default AProposPage