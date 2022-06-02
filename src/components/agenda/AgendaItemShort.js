import React from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { mq, colors, font } from '../../consts/style'; 
import Link from '../ExtendedLink';
import {
    Text
  } from "../Elements"
const ItemWrapperShort = styled.div`
  display:flex;
  position: relative;
  flex-direction:row;
  width:100%;
  justify-content: space-between;
 
 
  ${mq.tablet`
    flex-direction:column;
    gap:0;
  `}
  &:not(:first-child):before {
    position:absolute;
    content:"";
    top:-1rem;
  
    width:100%;
    height:1px;
    background-color:${colors.yellow};
  }
`
const AgendaItemProjetShort =   styled(Link)`
  display:block;
  font-size:1.4rem;
  width:150px;
  color:${colors.blue};  
  ${mq.tablet`
  display:inline-block;
  `}
 
`

const AgendaItemDateShort =   styled.div`
  display:block;
  color:${colors.dark}; 
  font-weight:600;
  font-size:2.4rem;
  text-transform:uppercase;
  ${mq.tablet`
    display:inline-block;
    padding-right:1rem;
  `}
`

const AgendaItemContentShort =   styled.div`
  display:flex;
 
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


const AgendaItemShort = ({item}) => {

    return (
        <ItemWrapperShort>
          <div>
            <AgendaItemDateShort>{format(new Date(item.dateEvent), 'dd LLL', {locale: fr}) } </AgendaItemDateShort>
            <AgendaItemProjetShort to={'/projets/'+item.projet.slug}>{item.projet.nom}</AgendaItemProjetShort>
          </div>
          <AgendaItemContentShort>
           {/*  <Text dangerouslySetInnerHTML={{ __html: item.titre }}/>*/}
            <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
          </AgendaItemContentShort>
        </ItemWrapperShort>
    )
} 
export default AgendaItemShort;