import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
Text
} from '../components/Elements';

const mentionsLegalesQuery = graphql`
  {
    
     page: datoCmsPageMentionlegale {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;




export default function MentionsLegalesPage() {
  const data = useStaticQuery(mentionsLegalesQuery);
  const { titre, contenu, seoMetaTags } = data.page;

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <Text dangerouslySetInnerHTML={{ __html: contenu }} />
         
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}
