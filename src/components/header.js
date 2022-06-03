import React, {  useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage} from 'react-intl';
import Link from './ExtendedLink';
import { colors, font,  boxShadow, mq /*, space*/} from '../consts/style';
/*import  BtnPrimary from './buttons/ButtonRounded';
import  { LanguageSwitcher }  from './language-switcher';*/
/*import {  Flex } from './Elements';*/
import { headerTypes } from '../types/propTypes';
import { MenuAltRight } from '@styled-icons/boxicons-regular';
import { XCircle } from '@styled-icons/bootstrap';
import { useSpring, animated } from 'react-spring'
import instagramIcon from '@iconify/icons-brandico/instagram';
import { Icon } from '@iconify/react';
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import LogoSVG from './LogoSVG'
/*import Boop from './boop';*/
import backgroundImage from "../images/header-background.jpg"


const IconLink = ({to, icon, text}) => {
  return(

    <LinkSocial title={text} href={to} target="_blank"  rel="nofollow noopener noreferrer">
      {icon}
    </LinkSocial>
  )
}



const LinkSocial = styled.a`

`

const Wrapper = styled.div`
  background:url(${backgroundImage});
  ${boxShadow};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  ${mq.tablet`
     padding: 0 2rem;
    `}
`;


/*
const LanguageSwitcherWrap = styled.div`
  position:absolute;
  right: 0;
  padding: 0 2rem;
  background-color: white;
  height: 100%;
  ${mq.tablet`
    display:none;
   `}

`;*/

const HeaderInner = styled.div`
  display: flex;
  width: 124rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  ${mq.tabletSmall`
    padding:  1.5rem 0;
  `}
  ${mq.mobile`
      padding: 1rem 0;
    }
  `}
`;



const MainMenu = styled.ul`
  display: none;
  
${mq.tablet_up`
  display: flex;
  list-style: none;
  justify-self: flex-start;
  margin: 0;
  padding:0;
 `}

 
`;


const MenuItem = styled.li`
  position: relative;
  color: ${colors.light};
  &:hover {
    color: ${colors.light};
  }
  margin-right:2.5rem;
     
`;

const LinkHeader = styled(props => <Link {...props} />)`
  position:relative;
  color: ${colors.light};
  &:hover {
    color: ${colors.light};
  }

  ${font.navigationItem}
  &.active {
    color: ${colors.yellow};
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
      left: ${props => (props.selected ?"50%": 0 )};
    bottom: -.65rem;
    background-color: #F0F3D3;
    border-radius:3px;
    width: 30px;
    height: 4px;
    border:1px solid ${colors.yellow};
    opacity: ${props => (props.selected ? 1: 0 )};
    transform:translateX(${props => (props.selected ?"-50%": 0 )});
  }

   &:hover:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    border-radius:8px;
    bottom: -.65rem;
    background-color: #F0F3D3;
    border:1px solid ${colors.yellow};
    width: 30px;
    height: 4px;
    transform:translateX(-50%);
    transition: all 0.25s;   
    opacity: 1;
  }
`;

const LogoLink = styled(LinkHeader)`
  svg {
     height:7rem;
  }
  height:100%;
  ${mq.tabletSmall`
  svg { 
    height:5rem;
    width: auto!important;
  }
`}
   ${mq.mobile`
      svg { 
        height:3rem;
        width: auto!important;
      }
    `}

  &:hover:before,  &.active:before 
  {
    content:none;
  }
`;

const BurgerMenu = styled.button`
  position:relative;
  border:0;
  margin-right:1rem;
  display:block;
  color:white;
   background-color:transparent;
  &:focus {
    outline:none;
  }
  ${mq.tablet_up` 
   display:none;
 `}
   ${mq.tablet`
     margin-right:0;
         padding: 0;
    `}
`;

const CloseMenuMobile = styled.button`
  position:absolute;
  top:3rem;
  right:2rem;
  display:block;
  border:none;
 & svg { fill:white;background:transparent!important;}
  background:transparent;
  &:focus {
    outline:none;
  }
`;

/*MENU MOBILE*/
const StyledMenuAltRight = styled(MenuAltRight)`
  color:${colors.light};

`
const StyledXCircle = styled(XCircle)`
  color:${colors.dark};
`


const MenuMobile = styled(animated.div)`
  z-index:5;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  z-index:10;
  transform: translate3d(0,-100%,0);
`
const ContentMobile = styled(animated.div)`

  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  nav {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`

const ItemMobileNav = styled(animated.div)`
  font-size:3rem;
  padding:.5rem;
  margin-bottom:.5rem;
 a {color:white;}
  
`
/*
const FlexBtnWrapper = styled(Flex)`
  margin-top:2rem;  
  margin-bottom:3rem;
  align-items:flex-start;
  justify-content:center;
  & > * {
    margin:0 ${space.quarter};
  }
  ${mq.mobile`
      margin-top:1rem;
  margin-bottom:1rem;
      `}
`*/



export default function Header({ location }) {
 
  const [mobileNavOpen, setMobileNavOpen] = useState(false) // mobile menu closed by default
  const MenuAnimation = useSpring({
    config: { mass: 1, tension: 210, friction: 20, clamp:true },
    native: true,
    to: { opacity: mobileNavOpen ? 1 : 0, transform: mobileNavOpen ? 'translate3d(0,0,0)' : 'translate3d(0,-100%, 0)', backgroundColor: mobileNavOpen ? colors.dark : '#fff'},
    })

  return (
    <> 
   
    <Wrapper>
      <HeaderInner>
        <LogoLink to="/" title="Retour à l'accueil" >
            <LogoSVG/>
        </LogoLink>
       
        <MainMenu>
         
          <MenuItem>
            <LinkHeader to="/actualites" activeClassName="active"><FormattedMessage id="menu__actu"/></LinkHeader>
          </MenuItem>
          <MenuItem>
            <LinkHeader to="/projets" activeClassName="active"><FormattedMessage id="menu__projets"/></LinkHeader>
          </MenuItem>
           <MenuItem>
            <LinkHeader to="/agenda" activeClassName="active"><FormattedMessage id="menu__agenda"/></LinkHeader>
          </MenuItem>
           <MenuItem>
            <LinkHeader to="/a-propos" activeClassName="active"><FormattedMessage id="menu__a-propos"/></LinkHeader>
          </MenuItem>
          <MenuItem>
            <LinkHeader to="/contact" activeClassName="active"><FormattedMessage id="menu__contact"/></LinkHeader>
          </MenuItem>
          <MenuItem>
            <IconLink to="https://www.facebook.com/discordeon" icon={<Icon title="Facebook" icon={facebookRect} style={{color: colors.yellow, fontSize: '20px'}} />}  text="Facebook"/>     
          </MenuItem>
          <MenuItem> 
            <IconLink to="https://www.instagram.com/discordeonmusic/" icon={<Icon title="Instagram" icon={instagramIcon} style={{color: colors.yellow, fontSize: '20px'}} />} text="Instagram"/>
          </MenuItem>
        </MainMenu>
       
        
        <BurgerMenu  onClick={() => {setMobileNavOpen(true)}}
    aria-label="Navigation"><StyledMenuAltRight title="Navigation" size="38"/></BurgerMenu>
      </HeaderInner>
    </Wrapper>

    <MenuMobile style={ MenuAnimation}> 
        <ContentMobile>
        <LogoSVG/>
          <nav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}}>
              <LinkHeader to="/" ><FormattedMessage id="homepage"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
              <LinkHeader to="/actualites" activeClassName="active"><FormattedMessage id="menu__actu"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
                <LinkHeader to="/projets" activeClassName="active"><FormattedMessage id="menu__projets"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
            <LinkHeader to="/agenda" activeClassName="active"><FormattedMessage id="menu__agenda"/></LinkHeader>
            </ItemMobileNav>  
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
              <LinkHeader to="/a-propos" activeClassName="active"><FormattedMessage id="menu__a-propos"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
                <LinkHeader to="/contact" activeClassName="active"><FormattedMessage id="menu__contact"/></LinkHeader> 
            </ItemMobileNav>
            <ItemMobileNav>
              <IconLink to="https://www.facebook.com/discordeon" icon={<Icon title="Facebook" icon={facebookRect} style={{color: colors.yellow, fontSize: '28px', margin:'10px'}} />}  text="Facebook"/>     
          {"  "}
              <IconLink to="https://www.instagram.com/discordeonmusic/" icon={<Icon title="Instagram" icon={instagramIcon} style={{color: colors.yellow, fontSize: '28px', margin:'10px'}} />} text="Instagram"/>
            </ItemMobileNav>
          </nav>
         
          <CloseMenuMobile 
          aria-label="Fermer"
          onClick={() => {setMobileNavOpen(false)}} 
           ><StyledXCircle size="48"  title="Fermer le menu" /></CloseMenuMobile>
        </ContentMobile>    
      </MenuMobile>  
      </>

  );
}

Header.propTypes = headerTypes;
