import React, { Fragment} from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { mq, colors, font } from '../../consts/style'; 
import {
    Text,
  } from "../Elements"

const ItemWrapper = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;
  width: 550px;
  margin-bottom:1rem;
  background:white;
  justify-content: center;
  align-items:center;
  & div:first-of-type{padding:1rem;}
  
  ${mq.mobile`
    width: 100%;
  `}
`
const VignetteNom =   styled.h2`
  ${font.h2}  
  text-align:center;
  margin-bottom:0;
`
const VignetteImage =   styled(GatsbyImage)`
  display:flex;
  ${mq.mobile`
  margin-left:0;
  `}
  flex-direction:row;
  height:auto;
  border-radius:0 0 4px 4px;
  ${mq.mobile`
    height:auto;
  `}
`
const VignetteTeaser =   styled(Text)`
  text-align:center;
  line-height: 22px;
`

const VignetteProjetPerso = ({item}) => {
    return (
        <ItemWrapper to={item.slug}>
          <div>
            <VignetteNom>{item.nom}</VignetteNom>
            <VignetteTeaser>{item.teaser}</VignetteTeaser>
          </div>
          <VignetteImage image={item.imagePrincipale.gatsbyImageData} alt={item.nom}/>
        </ItemWrapper>
    )
}
export default VignetteProjetPerso;