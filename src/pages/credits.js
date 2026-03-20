import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
Text
} from '../components/Elements';

const creditsQuery = graphql`
  {
     page: datoCmsPageCredit {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default function CreditsPage(props) {
 
  const data = useStaticQuery(creditsQuery);
  const { titre, contenu} = data.page;

  return (
    <Fragment>
      
      <PageWrapper>
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <Text dangerouslySetInnerHTML={{ __html: contenu }} />
         
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}


export const Head = (props) => { 
  const data = useStaticQuery(creditsQuery);
    const {  seoMetaTags } = data.page;
  return(
   <Seo meta={seoMetaTags} locale={props.pageContext.locale}  />
) 
}