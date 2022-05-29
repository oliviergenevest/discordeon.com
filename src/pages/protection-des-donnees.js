import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,

  Banner,
} from '../components/Elements';

export const dataPrivacyQuery = graphql`
query  dataPrivacyQuery($locale: String){
    
  
    page: datoCmsPageDataProtection(locale: {eq: $locale}) {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;




const DataPrivacyPage = ({data}) => {
  
  const { titre, contenu, seoMetaTags } = data.page;

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <div dangerouslySetInnerHTML={{ __html: contenu }} />
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}

export default  DataPrivacyPage