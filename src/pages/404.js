import React, { Fragment } from 'react';
import styled from 'styled-components';
import {  PageTitle, PageInner } from '../components/Elements';
import Seo from '../components/Seo';
import Link from '../components/ExtendedLink';

const Wrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  height: calc(100vh - 10rem);
`;

const NotFoundPage = () => (
  <Fragment>
    <Seo title="404: Not found" />
    <Wrapper>
    <PageInner>
      <PageTitle centered>Oups, page <span>introuvable</span></PageTitle>
      <Link to='/'>Retour à l'accueil</Link>
      </PageInner>
    </Wrapper>
  </Fragment>
);

export default NotFoundPage;
