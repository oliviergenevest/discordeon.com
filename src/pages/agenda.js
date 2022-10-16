import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  AgendaItem  from '../components/agenda/AgendaItem';
import styled from 'styled-components';


import {
  PageWrapper,
  PageInner,
  PageTitle,
  FocusText,

  Spacer,
} from '../components/Elements';


const AgendaListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
/*gap:5rem;*/
margin-top:8rem;
`


const StyledBtnPrimary = styled(BtnPrimary)`
  margin-top:1.2rem;
`


export const agendaQuery = graphql`
  query  agendaPageQuery($locale: String) {
    page: datoCmsAgendaPage(locale: {eq: $locale}) {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    agenda: allDatoCmsAgenda(filter: {locale: {eq: $locale}}, sort: {order: ASC, fields: dateEvent}){
      nodes {
        id
        meta {
          createdAt
        }
        titre
        details
        dateEvent
        dateFin
        projet {
          nom
          slug
        }
      }
    }
  }
`;


const AgendaPage = ({ data }) => {

  const { titre, contenu, seoMetaTags } = data.page;
  const { nodes } = data.agenda; // toutes les dates

  const dateDuJour = new Date();
  dateDuJour.setHours(0, 0, 0, 0);
  function dateFuture(itemAgenda) {
    return ((new Date(itemAgenda.dateEvent) >= dateDuJour) || (new Date(itemAgenda.dateFin) >= dateDuJour) ) ? itemAgenda : null;
  }
  var dateFutures = nodes.filter(dateFuture);
  
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <FocusText dangerouslySetInnerHTML={{ __html: contenu }}/>
          <AgendaListWrapper>
            { _map(dateFutures, (item, i) => (
                <AgendaItem key={i} item={item}/>
            ))}
          </AgendaListWrapper>
          <Spacer/>
          <StyledBtnPrimary to="/agenda-archives">Dates archivées</StyledBtnPrimary>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default AgendaPage;