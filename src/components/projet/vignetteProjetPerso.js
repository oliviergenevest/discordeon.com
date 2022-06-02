import React from 'react';

import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { mq, font } from '../../consts/style'; 
import {
    Text,
  } from "../Elements"

const ItemWrapper = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;
  max-width: 550px;
  margin-bottom:1rem;
  background-color:${props => (props.backgroundColor  ? props.backgroundColor : 'inherit' )};
  align-self: stretch;
  justify-content: flex-start;
  align-items:${props => (props.format === 'short'  ? 'flex-start' : 'center' )};;
  gap:0.5rem;
  
  ${mq.mobile`
    width: 100%;
  `}
`
const VignetteNom =   styled.h2`
  ${font.h3}  
  text-align:  ${props => (props.center  ? 'center' : 'left' )};
  margin-bottom:0;
`
const VignetteNomSmall=   styled.span`  
text-align:  ${props => (props.center  ? 'center' : 'left' )};
margin-bottom:0;
align-self: flex-start;
padding-left:.5rem;
font-size:1.4rem;
`

const VignetteImage =   styled(GatsbyImage)`
  display:flex;
  ${mq.mobile`
  margin-left:0;
  `}
  flex-direction:row;
  height:auto;
  border-radius:4px ;
  ${mq.mobile`
    height:auto;
  `}
`
const VignetteTeaser =   styled(Text)`
  text-align:center;
  line-height: 22px;
`

// format :  
// - full : avec affichage du teaser sous le nom du projet au dessus de l'image
// - short : sans teaser, nom sous l'image

const VignetteProjetPerso = ({item, format, path='/projets/'}) => {
    
  return (
        <ItemWrapper to={path+item.slug} format= {format}>
         
          
          <VignetteImage image={item.imagePrincipale.gatsbyImageData} alt={item.nom}/>
          {format === "short" && <VignetteNom>{item.nom}</VignetteNom>}
          {format === "mini" && <VignetteNomSmall>{item.nom}</VignetteNomSmall>}
          {format === "full" && <div style={{padding:".5rem 1rem 1rem 1rem"}}><VignetteNom center>{item.nom}</VignetteNom><VignetteTeaser>{item.teaser}</VignetteTeaser></div>}

        </ItemWrapper>
    )
}
export default VignetteProjetPerso;