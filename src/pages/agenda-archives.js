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
  query  agendaArchivesPageQuery($locale: String) {
    page: datoCmsAgendaArchivesPage(locale: {eq: $locale}) {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    agenda: allDatoCmsAgenda(filter: {locale: {eq: $locale}}, sort: {order: DESC, fields: dateEvent}){
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


const AgendaArchivesPage = ({ data }) => {

  const { titre, contenu, seoMetaTags } = data.page;
  const { nodes } = data.agenda; // toutes les dates
    
  const dateDuJour = new Date();
  dateDuJour.setHours(0, 0, 0, 0);

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <FocusText dangerouslySetInnerHTML={{ __html: contenu }}/>
          <AgendaListWrapper>
            { _map(nodes, (item, i) => (
            (new Date(item.dateEvent) <= dateDuJour) &&
                 <AgendaItem key={i} item={item}/>
            
            ))}   
          </AgendaListWrapper>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default AgendaArchivesPage;