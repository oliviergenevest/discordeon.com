import styled from 'styled-components';
import { Link } from 'gatsby';
import { font, colors, z, bz, mq, space, boxShadow } from '../consts/style';
/*import { AnchorLink } from 'gatsby-plugin-anchor-links';*/
import { fadeInUp, slideIn } from '../style/animations';
import { Plus, ArrowDownShort, ArrowUpShort, ChevronLeft, ChevronRight } from '@styled-icons/bootstrap';
import { Apps } from '@styled-icons/ionicons-solid';

export const Spacer = styled.div`
  height: 5rem;
  width: 100%;
  display: block;
  position: relative;
`;


export const Banner = styled.div`
  height: ${ p => p.height};
  width: calc(100% + ${space.double});
  overflow: hidden;
  display: block;
  position: relative;
  margin-bottom: 2rem;
  margin-right: -2rem;
  margin-left: -2rem;
 /* margin-top: -2rem;*/

  .gatsby-image-wrapper {
  /* height:${ p => p.height};*/
 
  }

`;


export const BgWrap = styled.div`
  position:relative;
  background:${props => props.color ? props.color : '#E8E7E7' };
  width: calc(100% + 4rem);
  /*overflow: hidden;*/
  flex-direction: column;
  align-items: center;
  padding:2rem 2rem 2rem 2rem;
  margin: 0;
  margin-left:-2rem;
  margin-right:-2rem;
  /* bottom curved prop */
  & :after { 
    content: "";
    position: absolute;
    height: 50px;
    width: 100%;
    background-color: #F3F3F3 ;
    bottom: 0;
    left: 0;
    transform: translateY(50%);
    border-radius: 0 0 100% 100%;
    display:${props => props.curved ? "block" : "none"};
  } ;
 
`;

export const PageWrapper = styled.div`
  min-height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  padding: 4rem;
  color: ${colors.dark};

  & ${BgWrap} {
    margin-top:-2rem!important;
  }

  ${mq.tablet`
  padding: 2rem;
`}

`;

export const PageInner = styled.div`
  width: 120.4rem;
  max-width: 100%;
  margin: 0 auto;
`;

export const SectionWrapper = styled.div`
  position:relative;
  max-width: 100%;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  ${font.pageTitle}
  padding-bottom:1rem;
`;

export const Title = styled.h1`
  ${font.title}
   color:${colors.blue};
   margin: 0 auto;
   margin-top:1rem;
   text-align:${props => props.centered ? 'center' : 'left' };
    max-width:${props => props.maxWidth ? '780px' : 'none' };
`;


export const FocusText = styled.div`
  ${font.subtitle}
   color:${props => props.color ? props.color : colors.blue };
   margin:0 0 ${space.half} ;
   text-align:${props => props.centered ? 'center' : 'justify' };
   max-width:${props => props.maxWidth ?  props.maxWidth : 'none' };
  ${mq.tabletSmall_up`
      margin:0 auto;
      margin-bottom:${space.default};
  `}
  
`;

// a utiliser pour du texte html / markdown provenant de l'api (cms)
export const Text = styled.div`
  ${font.text}
  color:${props => props.color ? props.color : 'inherit' };
  h2 {
    ${font.h2} 
  }
  h3 {
    ${font.h3} 
  }
  p {
    margin-bottom:2rem;
  }
`;



export const GridBienvenue= styled.div`
  display:block;
 
  grid-gap:4%;
  margin:0 ${space.default};

    ${mq.tablet_up`
      display:grid;
       grid-template-columns:570px 1fr;
        grid-gap:4%;
    `}

    & .gatsby-image-wrapper {border-radius: 4px;}
`




export const SectionTitle = styled.h2`
 display: block;
 margin: 0 auto;
 margin-bottom:1.5rem;
  ${font.title}
   color:${colors.blue};
    text-align:${props => props.centered ? 'center' : 'left' };
    max-width:${props => props.maxWidth ? '600px' : 'none' };
   
`;
export const SectionTitleLeft = styled.h2`
  position:sticky;
  display: block;

  font-size:84px;
  text-transform:uppercase;
  color:${colors.yellowLight};
  left:5rem;
  top:5rem;
  height:100px;
  z-index:1;
  align-self: flex-start;
   
`;

export const NavigationBottom = styled.div`
margin-top:9rem;
margin-bottom:5rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

export const Legende = styled.span`
  font-size:1.4rem;
  font-style: italic;
  line-height:2rem;
  display: block;
  text-align:right;
  margin-bottom: 1rem;
`
export const Flex = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  ${mq.tablet_up`
  flex-wrap:nowrap;
  `}
`

export const Text2Col = styled.div`
   columns: 2 500px;
    column-gap:3rem;  
   ${font.text}
`;

export const Grid2Col = styled.div`
    display:grid;
    grid-template-columns: 1fr;   
    grid-row-gap: 4rem;
    align-items: flex-start; // aligné en haut de la colonne
  ${mq.tablet_up`
    grid-template-columns: 1fr 1fr;  
    column-gap:4%;   
 `}
`;

export const Grid3Col = styled.div`
  display: block;
  
  ${mq.tabletSmall_up`
    display:grid;
     align-items: start;
    grid-template-columns: 1fr 1fr;  
    column-gap:4rem;   
    
    
 `}
  ${mq.tablet_up`
    display:grid;
     align-items: start;
    grid-template-columns: 1fr 1fr 1fr;  
    column-gap:4rem;   
    
    
 `}
`;

export const LinkToGoogleMap = styled.a`
  display: block;
  background: ${colors.dark};
  color:white;
  text-align:center;
  margin-top:1.7rem;
  padding:1rem 0.5rem;
   ${font.styleButton};
     transition:all .25s ease-out;
   &:hover{
    color:white;
    background-color:${colors.buttonHover};  
   }
`;


export const EquipeMembreTitle = styled.h2
`
  position:relative;
  margin-top:1.5rem;
 
  ${font.styleEquipeMembreTitle}  
 
`;


export const GroupesWrapper = styled.div`
  display:block;
  width:100%;
  
  ${mq.tabletSmall_up`
        display:grid;
         grid-gap:${space.quarter};
      grid-template-columns:1fr 1fr;
  `}

  ${mq.tablet_up`
      display:grid;
      grid-gap:${space.double};
      grid-template-columns:1fr 1fr 1fr;
  `}
`;


export const GroupesDescription = styled.div`
    transition:all .25s ease-out;
   /* transform: translateX(-100%);*/
   display: flex;
   align-items: center;
   justify-content: center;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    color: white;
    right: 0;
    padding: 2rem;
    background: #000000c9;
   border-radius:4px;
  ${mq.tabletSmall_up`
     
  `}

  ${mq.tablet_up`
    
  `}
`;

export const GroupesItem = styled.div` 
  z-index:0;
  border-radius:4px;
 ${mq.tabletSmall`
  margin-bottom:${space.quarter};`}
  position: relative;
  width:100%;
  border-radius:4px;

  transition: transform .25s ease-in-out;
  .gatsby-image-wrapper {
    height:300px;
    width:100%;
    border-radius:4px;
  }
  
  .title {
    border-radius:4px;
    margin:1rem;
    position:absolute;
    bottom:0;
    left:0;
    padding: .5rem 1.5rem;
    background-color:${colors.blue};
    color:white;

    font-weight:medium;
    letter-spacing:normal;
    font-size:2.4rem;
    z-index:1;

  }
  &.custom {
    .gatsby-image-wrapper {
    
    border:6px solid ${colors.yellow};
    }
  }
  &.large {
   .gatsby-image-wrapper {
   /* height:600px;*/

      border-radius:4px;
  }
  }
  &:hover {
    .gatsby-image-wrapper {filter: blur(2px);}
    ${GroupesDescription} {
    opacity:1;
    display: flex;
    align-items: center;
    justify-content: center;
  /*  transform:translateX(0);*/}
  }
` 

export const ActivitesWrapper = styled.div`

  display:block;
  
  ${mq.tabletSmall_up`
      display:grid;
      grid-gap:4rem;
      grid-template-columns:1fr 1fr;
  `}

  ${mq.tablet_up`
      display:grid;
      grid-gap:4rem;
      grid-template-columns:1fr 1fr 1fr;
  `}
`;

export const ActiviteItem = styled.div` 
  position: relative;
  border-radius:4px;
  background-color:${colors.yellowLight};
  transition: transform .25s ease-in-out;

  &.large {
    grid-column-end: 3;
    grid-column-start: 1;
    .gatsby-image-wrapper {
      height:480px;
    }
  }

  ${mq.tabletSmall`
     display:block;
     margin-top:${space.double};
     padding-bottom:1px;
  `}

  .gatsby-image-wrapper {
    height:320px;
      border-radius:4px 4px 0 0;
  }
  .title {
    margin:${space.half} 0;
    color:${colors.dark};

    margin-bottom:${space.half};
    line-height:1;
    font-size: 2rem;
    font-weight: 500;
  }

 
  .description {
   ${font.text};
   padding: ${space.default} ${space.default};
   position:relative;

  }



  img {

    transition: transform .35s ease!important;
    ${bz};
  }
  


  &:hover { 
     img {
        transition:filter 1s ease!important;
        transform: scale(1.1) ;
        transition: transform .25s ease!important;
        ${bz};
      }
    transform:translateY(-1rem);  
    ${boxShadow};
    background-color:${colors.blueLight};
    }
`;


export const ActiviteBtnWrapper = styled.div`
  position:relative;
  margin-left:1.5rem;
  margin-right:1.5rem;
  margin-bottom:${space.default};
  display:flex;
  justify-content:space-between;

`

export const AppsIcon = styled(Apps)`
  color: ${colors.dark};
  background: white;
  border-radius: 100%;
  padding: 10px;
  border: 2px solid ${colors.dark};
  width: 50px;
  margin-left: 1rem;
  transition: all 0.25s;
  ${bz};
`;

export const PlusIcon = styled(Plus)`
  color: ${colors.dark};
  background: white;
  border-radius: 100%;
  padding: 4px;
  border: 2px solid ${colors.dark};
  width: 50px;
  margin-left: 1rem;
  transition: all 0.25s;
  ${bz};
`;

export const ProjectsListLink = styled(Link)`
  display: inline-block;
  position: relative;

 /* &:before {
    content:"";
    position:relative;
    right:0;
    border:1px solid ${colors.dark};
    width:75px;
    z-index:0;
    display: inline-block;
    transform:translateX(0);
    transition: all 0.25s;
    ${bz};
  }

  &:hover:before {
   transform:translateX(100%);
   opacity: 0;
   transition: all 0.25s;
    ${bz};
  }*/

  svg {
    position: relative;
    z-index:0;
    margin-left:2rem;
      overflow: visible;
  }

  &:hover svg {
    padding: 7px;
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.25s;
    ${bz};
  }


  span {
    ${font.p};
    margin-top:1rem;
   
    font-weight:500;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    opacity:0;
    transform:translateX(-80%);
    transition: .25s;
    ${bz};
  }

  &:hover span {
    width: auto;
    transform:translateX(-100%);
    background-color:white;
    opacity:1;
    overflow: visible;
    margin-right:1rem;
    padding-left:1rem;
    transition: 0.4s;
    ${bz};
  }
`;

/* anciennes versions design précédent */
export const SeeMoreLink = styled(Link)`
  position:relative;
  color: ${colors.dark};
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  span {  
    ${font.p};
    margin-left:1rem;
    font-weight:500;
    transform:translateX(-100%);
    transition:all .5s;
    opacity:0;
  }

  &:hover span {
   
    transform:translateX(0);
     opacity:1;
  }
  
  svg {
    z-index:2;
    margin-left:1rem;
    margin-right:1rem;
  }

  &:hover svg {
    padding: 0;
    transform:scale(1.2);
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.25s;
    ${bz};
  }
  &:before {
    content:"";
    margin-right:1rem;
    height:2px;
    background:${colors.dark};
    width:125px;
    z-index:1;
    display: inline-block;
  }

   &:after {
    content:"";
    margin-left: 2rem;
    width: 125px;
    display: inline-block;
    height:2px;
    background:${colors.dark};
    z-index: 1;
    position: absolute;
    left: 195px;
  }

  &:hover:after {
     opacity:0;
     width:0;
     transition: all 0.35s;
  }
`;

export const SeeMoreLink2 = styled(Link)`
  display: flex;
    width: 100%;
    height: 85px;
    margin-bottom: 2rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;

  &:before, &:after {
    content: '';
    border-top: 2px solid;
    margin: 0 10px 0 0;
    flex: 0 0 150px;

  }

 &:hover svg {
    padding: 0;
    transform:scale(1.2);
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.25s;
    ${bz};
  }

  &:hover:after {
    content: attr(data-hover);
    ${font.p};
    font-weight:500;
    opacity: 1;
    width:auto;
    z-index:1;
    border:0;
    animation: ${slideIn} 0.35s;
    transition: all 0.35s;
    ${bz};
    
  }

  svg {
    z-index:2;
    margin-left:1rem;
    margin-right:1rem;
  }


  span {
    ${font.p};
   /* margin-left:1rem;*/
    font-weight:500;
    transform:translateX(-100%);
    transition:all .35s;
    font-size:0;
  }
`;
/* fin anciennes versions */

export const SeeMoreLink3 = styled(Link)`
    border: solid 1px #fff;
    display: inline-block;
    padding: 7px;
    position: relative;
    height: 85px;
    margin-bottom: 2rem;
    margin-top: 2rem;
    

  &:before {
    content:"";
    margin-right:1rem;
    position:relative;
    left:0;
    height:2px;
    background:${colors.dark};
    width:75px;
    z-index:0;
    display: inline-block;
  }

   &:after {
    content:"";
    margin-left:1rem;
    position:relative;
    right:0;
    height:2px;
    background:${colors.dark};
    width:75px;
    z-index:0;
    display: inline-block;
    transform:translateX(0);
    transition: all 0.25s;
    ${bz};
  }

 

  &:hover:after {
   transform:translateX(-100%);
   opacity: 0;
   transition: all 0.25s;
    ${bz};
  }

  svg {
    position: relative;
   /* z-index:1;*/
    margin-left:2rem;
    margin-right:2rem;
     overflow: visible;
  }

  &:hover svg {
    padding:  ${props => (props.icon === "menu_projet" ? '9px' : '0' )};
    transform: scale(1.2);
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.25s;
    ${bz};
  }


  span {
    ${font.p};
    margin-top:1rem;
    font-weight:500;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    opacity:0;
    transform:translateX(-5%);
    transition: .25s;
    ${bz};
  }

  &:hover span {
    width: auto;
    transform:translateX(0);
    background-color:white;
    z-index:3;
    opacity:1;
    overflow: visible;
    margin-left:1rem;
      transition: 0.4s;
    ${bz};
  }
`;

export const ArrowDownIcon = styled(ArrowDownShort)`
  color: ${colors.dark};
  padding: 0.75rem;
  background: white;
  border-radius: 100%;
  border: 2px solid ${colors.dark};
  width: 75px;
  margin-bottom: 1rem;
  transition: all 0.25s;
  ${bz};
`;

export const ArrowDownLink = styled(Link)`
  color: ${colors.dark};
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 3rem;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${font.style1}
  font-weight:500;
  &:hover {
     
      font-weight:600;

  }
  &:hover svg {
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.25s;
    ${bz};
  }
`;

export const ArrowUpIcon = styled(ArrowUpShort)`
  color: ${colors.dark};
  padding: 0.75rem;
  background: white;
  border-radius: 100%;
  border: 2px solid ${colors.dark};
  width:75px;
  margin-top: 1rem;
  transition: all 0.35s;
  ${bz};
`;

export const ArrowUpLink = styled(Link)`
  color: ${colors.dark};
  margin-bottom: 2rem;
  margin-top: 2rem;
  width:100px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${font.style1}
    font-weight:500;
  &:hover {

      font-weight:600;
  }

  &:hover svg {
    color: ${colors.light};
    border: 3px solid ${colors.dark};
    background: ${colors.dark};
    transition: all 0.15s;
    ${bz};
  }
`;

export const ArrowLeftIcon = styled(ChevronLeft)`
  color: ${colors.dark};
  padding: 1rem;
  background:  ${colors.yellowLight};
  border-radius: 100%;
  width:50px;
  transition: all 0.35s;
  border: 3px solid white;
  ${bz};
`;

export const ArrowLeftLink = styled.div`
  
`;

export const ArrowRightIcon = styled(ChevronRight)`
  color: ${colors.dark};
  padding: 1rem;
  background:  ${colors.yellowLight};
  border-radius: 100%;
  border: 3px solid white;
  width:50px;
  transition: all 0.35s;
  ${bz};
`;

export const ArrowRightLink = styled.div`
 
`;

export const BackToTopWrapper = styled.div`
  margin: 0 auto;
  position:absolute;
  top:-5.2rem;
`;



export const BackToTopLink = styled.a`

    text-transform: uppercase;
    font-size:1.8rem;
    font-weight:600;
 
    color: ${colors.greyLight};
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    ${bz};
    svg {
      width:7.5rem;
      height:7.5rem;
      transition: all 0.15s;
       ${bz};
    }

    :hover {
      color: ${colors.light};
      font-weight:700;

     
      transition: all 0.25s;
      ${bz};
      svg {
        color: ${colors.dark};
        background-color: ${colors.yellow};
         

        border: 2px solid ${colors.dark};
        transform:translateY(-3px) scale(1.1);
        transition: all 0.25s;
        ${bz};
      }
    }

`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  ${z.modalBackground};
`;

export const ModalInner = styled.p`
  background: white;
  margin: auto;
  color: ${colors.dark};
  position: relative;
  max-height: 90%;
  /*height: 25rem;*/
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${fadeInUp} 0.3s;
  ${bz};
 
  ${z.modal};
  
`;

