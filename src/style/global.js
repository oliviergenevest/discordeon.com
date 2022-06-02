import "@fontsource/fredoka";
import "@fontsource/fredoka/300.css";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/open-sans/300-italic.css";

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

html { font-family: 'Fredoka', sans-serif; }

/*overflow hidden pour ne pas avoir de marge dans swiper full screen (projet.js)*/
html,
body {
 /* overflow-x: hidden;*/
}

@supports (font-variation-settings: normal) {
  html { font-family: 'Fredoka', sans-serif; }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
	text-decoration:none;
	&:hover {
		text-decoration:none;
		color:inherit;
	}
}

strong {
  font-weight:600;
}

::selection {
  background: #E4FAFC; /* WebKit/Blink Browsers */
  color:#161616;
}

/* Pour la page d'accueil : header transparent en mode initial (avant scroll) */



#splash-headroom:not(.headroom--pinned) > div:first-of-type  {
  background:white;
  box-shadow: none;
  & svg path {
    fill: #01026C;
  }
}

#splash-headroom:not(.headroom--pinned) li > a {
  color:black;

}



/* VIDEO RESPONSIVE */
.video-responsive { 
  overflow:hidden; 
  padding-bottom:56.25%; 
  position:relative; 
  height:0;
  }
  
  .video-responsive iframe {
  left:0; 
  top:0; 
  height:100%;
  width:100%;
  position:absolute;
  }

`;


export default Global;
