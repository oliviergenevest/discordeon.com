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

export default function CreditsPage() {
  const data = useStaticQuery(creditsQuery);
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
