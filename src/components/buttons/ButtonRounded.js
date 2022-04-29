import React from 'react';
import styled from 'styled-components';
import { Download } from '@styled-icons/bootstrap';
import Link from '../ExtendedLink';
import { colors } from '../../consts/style';
import Boop from '../boop';
 const PrimaryLink = styled(Link)`
    display:inline-block;
    border-radius:50px;
    cursor:pointer;
    background:  ${colors.yellow};
    border: none;
    color:  ${colors.dark};
    font-weight:400;
    padding: .5rem 2.5rem;
    margin: 0;
    transition:all .35s ease;
    text-align: center;
    &:hover {
      text-decoration: none;
      background:  ${colors.blue};
      color:white!important;
   
    }
  
`;

const PrimaryExternalLink = styled.a`
display:inline-block;
border-radius:50px;
cursor:pointer;
background:  ${colors.yellow};
border: none;
color:  ${colors.dark};
font-weight:400;
padding: .5rem 2.5rem;
margin: 0;
transition:all .35s ease;
text-align: center;
&:hover {
  text-decoration: none;
  background:  ${colors.blue};
  color:white!important;
}

`;


const BtnPrimary = ({children,  ...props}) => {
 /*console.log(props)*/
return (
    <Boop scale={1.01} timing={150} >
      
      {props.external ? 
      <PrimaryExternalLink target="blank" rel="nofollow noopener noreferrer" href={props.to} {...props}><Download size="24"/> {children}</PrimaryExternalLink> 
      :  
      <PrimaryLink {...props}>{children}</PrimaryLink>
    }
    </Boop>
     
)
 }
export default BtnPrimary;
