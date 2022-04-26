import React, { Fragment} from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"
import { mq, colors, font } from '../../consts/style'; 
import {
  
    Text,

    Grid2Col,
   
  } from "../Elements"
const ItemWrapper = styled.div`
display:flex;
position: relative;
flex-direction:row;
width:100%;
margin-bottom:10rem;

justify-content: space-between;
/*gap:3rem;*/
${mq.mobile`
flex-direction:column;
gap:1rem;
`}
&:after{
  position:absolute;
  content:"";
  bottom:-5rem;

  width:100%;
  height:1px;
  background-color:${colors.blueLight};
}
`
const AgendaItemProjet =   styled.div`
  display:flex;
  width:200px;
  text-align:right;
  color:${colors.blue};  
  ${mq.mobile`
  width:100%;
  `}
 
`

const AgendaItemDate =   styled.div`
  display:flex;
  width:250px;
  color:${colors.dark}; 
 
  ${font.title}
  font-size:2.4rem;
  text-align:center;
 
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
            <AgendaItemDate>{format(new Date(item.dateEvent), 'dd LLL yyyy', {locale: fr})}</AgendaItemDate>
            <AgendaItemContent>
                {item.titre} 
                <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
            </AgendaItemContent>
            <AgendaItemProjet>{item.projet.nom}</AgendaItemProjet>

        </ItemWrapper>
    )
}
export default AgendaItem;