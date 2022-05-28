import React from 'react';
import styled from 'styled-components';

import Link from '../ExtendedLink';
import { colors } from '../../consts/style';



const PlayerZik = ({urlPlayer, type, ...props}) => {
    console.log(urlPlayer)
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
        src={'https://bandcamp.com/EmbeddedPlayer/album='+urlPlayer+'/size=large/bgcol=ffffff/linkcol=000000/tracklist=false/artwork=small/transparent=true/'} seamless>
        </iframe>;
    default:
      return "not set";
  }


 }
export default PlayerZik;
