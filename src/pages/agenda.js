import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  AgendaItem  from '../components/agenda/agendaItem';
import styled from 'styled-components';
import { mq, colors, font } from '../consts/style'; 
import { Icon } from '@iconify/react';
import { FormattedMessage} from 'react-intl';
import FormatDate  from '../components/formatDate'

import {
  PageWrapper,
  PageInner,
  PageTitle,
  FocusText,
  Text,
  Flex,
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
        projet {
          nom
        }
      }
    }
  }
`;


const AgendaPage = ({ data }) => {

  const { titre, contenu, seoMetaTags } = data.page;
  const { nodes } = data.agenda; // toutes les dates


  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <FocusText dangerouslySetInnerHTML={{ __html: contenu }}/>
          <AgendaListWrapper>
            { _map(nodes, (item, i) => (
               (new Date(item.dateEvent) >= new Date()) && 
                 <AgendaItem key={i} item={item}/>
            
            ))}
           
          </AgendaListWrapper>
          <Spacer/>
          <StyledBtnPrimary to="/">Dates archivées</StyledBtnPrimary>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default AgendaPage;