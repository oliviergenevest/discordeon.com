import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
} from '../components/Elements';

const dataPrivacyQuery = graphql`
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




const DataPrivacyPage = () => {
    const data = useStaticQuery(dataPrivacyQuery);
  const { titre, contenu } = data.page;

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

export const Head = (props) =>  { 
  const data = useStaticQuery(dataPrivacyQuery);
    const {  seoMetaTags } = data.page;
    console.log("data ",data)
    console.log("props ",props)
  return(
   <Seo meta={seoMetaTags} locale={props.pageContext.locale}  />
) 
}