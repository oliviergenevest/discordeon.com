import React from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { mq, colors, font } from '../../consts/style'; 
import Link from '../ExtendedLink';
import {
  
    Text,

    Grid2Col,
   
  } from "../Elements"
const ItemWrapper = styled.div`
  display:flex;
  position: relative;
  flex-direction:row;
  width:100%;
  margin-bottom:6rem;
  justify-content: space-between;
  gap:1rem;
  ${mq.mobile`
    flex-direction:column;
    gap:0;
  `}
 &:not(:last-child):after {
  position:absolute;
  content:"";
  bottom:-2rem;

  width:100%;
  height:1px;
  background-color:${colors.yellow};
}
`
const AgendaItemProjet =   styled(Link)`
  display:block;
  width:200px;

  color:${colors.blue};  
  ${mq.mobile`
  width:100%;
  `}
 
`

const AgendaItemDate =   styled.div`
  display:block;
  width:180px;
  color:${colors.dark}; 
  font-weight:600;
  
  font-size:2.4rem;
  text-transform:uppercase;
  & span  {
    font-weight:400;
    font-size:2rem;
    margin-top:-.5rem;
    display:block;
    ${mq.mobile`
      display:inline;
  `}
  }
 
`

const AgendaItemContent =   styled.div`
  display:flex;
  margin-left:1.5rem;
  padding-left:4rem;
  padding-right:2rem;
  ${mq.mobile`
  margin-left:0;
  padding:0;
  `}
  flex-direction:column;
  h2 {
    ${font.h2}
    text-transform:none;
  }
  width: 100%;
`


const AgendaItem = ({item}) => {
 
    return (
        <ItemWrapper>
            <AgendaItemDate>{format(new Date(item.dateEvent), 'dd LLL', {locale: fr}) } <span>{format(new Date(item.dateEvent), 'yyyy', {locale: fr}) }</span></AgendaItemDate>
            <AgendaItemProjet to={'/projets/'+item.projet.slug}>{item.projet.nom}</AgendaItemProjet>
            <AgendaItemContent>
                <Text dangerouslySetInnerHTML={{ __html: item.titre }}/>
                <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
            </AgendaItemContent>
           

        </ItemWrapper>
    )
}
export default AgendaItem;
