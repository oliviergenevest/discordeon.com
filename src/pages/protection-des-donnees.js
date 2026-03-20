import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
} from '../components/Elements';

export const dataPrivacyQuery = graphql`
query  dataPrivacyQuery($locale: String){
    
  
    page: datoCmsPageDataProtection(locale: $locale) {
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


export const Head = (props) => (
 <Seo meta={props.data.page.seoMetaTags} locale={props.pageContext.locale}  />
)