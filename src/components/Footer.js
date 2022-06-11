import React from 'react';
import styled from 'styled-components';
import Link from './ExtendedLink';

import { colors, mq, space, font } from '../consts/style';
import {   Flex } from './Elements';
import { Icon } from '@iconify/react';
/*import instagramIcon from '@iconify/icons-logos/instagram-icon';*/
import instagramIcon from '@iconify/icons-brandico/instagram';
import facebookRect from '@iconify/icons-brandico/facebook-rect';
import { FormattedMessage} from 'react-intl'

export const WrapperFooter = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  margin-bottom:4rem;
 
`;




const LinkSocial = styled.a`
display:flex;
flex-direction:column;
gap:1rem;
align-items:center;
justify-content:center;
`

const FlexIconeWrapper = styled(Flex)`
padding-bottom:1rem;

align-items:center;
justify-content:center;
gap:${space.default};
${mq.tabletSmall`
  justify-content:center;
`}
`

const FooterBottom = styled.div`
  padding: 0 2rem;
  margin-top:4.4rem;
  a {
     color:${colors.blue};
  }
  ${font.text};
  font-size:1.4rem;
  color:${colors.dark};
  text-align: center;
  ${mq.tabletSmall` text-align:center;`}
`;


const IconLink = ({to, icon, text}) => {
  return(
    <LinkSocial title={text} href={to} target="_blank"  rel="nofollow noopener noreferrer">
      {icon}
    </LinkSocial>
  )
}

const Footer= ({ location }) => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <WrapperFooter>   
      
     
      <FooterBottom>
      <FlexIconeWrapper>
          <IconLink to="https://www.facebook.com/discordeon" icon={<Icon title="Facebook" icon={facebookRect} style={{color: colors.dark, fontSize: '28px'}} />} text="Facebook"/>
          <IconLink to="https://www.instagram.com/discordeonmusic/" icon={<Icon icon={instagramIcon} style={{color: colors.dark, fontSize: '28px'}} />} text="Instagram"/>
        </FlexIconeWrapper>
        <Link to="/credits"> <FormattedMessage id="footer__credits"/></Link> - <Link to="/mentions-legales"> <FormattedMessage id="footer__mentions-legales"/></Link> - <Link to="/protection-des-donnees"><FormattedMessage id="footer__data-protection"/></Link>{/* -   <GLink to="/en">EN</GLink> | <GLink to="/">FR</GLink> */}
        <br/><span>© Discordéon - {year} </span>
      </FooterBottom>
    </WrapperFooter>
  );
};

export default Footer;
