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


const PlayerZik = ({urlPlayer, type, ...props}) => {
    
switch (type) {
    case 'soundcloud' : 
      return <iframe 
        title="soundcloud"
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={'https://w.soundcloud.com/player/?url='+urlPlayer+'&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false'}>
        </iframe>;
    case 'bandcamp' : 
      return <iframe 
        frameBorder="no" 
        src="https://bandcamp.com/EmbeddedPlayer/album=1385921487/size=large/bgcol=ffffff/linkcol=000000/tracklist=false/artwork=small/transparent=true/" seamless>
        </iframe>;
    default:
      return "not set";
  }


 }
export default PlayerZik;
