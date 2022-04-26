import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Img from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import styled from 'styled-components';
import { mq, colors, font } from '../consts/style'; 
import { Icon } from '@iconify/react';
import { FormattedMessage} from 'react-intl';
import FormatDate  from '../components/formatDate'

import {
  PageWrapper,
  PageInner,
  PageTitle,
  FocusText,
  Text,
  Flex,
  Spacer,
} from '../components/Elements';


const NewsListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
/*gap:5rem;*/
margin-top:8rem;
`

const NewsItem =   styled.div`
display:flex;
position: relative;
flex-direction:row;
width:100%;
margin-bottom:10rem;
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

const NewsItemImage =   styled(GatsbyImage)`
  display:flex;
  margin-right:1.5rem;
  ${mq.mobile`
  margin-left:0;
  `}
  flex-direction:row;

  width:360px;
  height:auto;
  border-radius:4px;
  ${mq.mobile`
  height:auto;
  `}
`

const NewsItemDate =   styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:flex-start;
  gap:.8rem;
  color:${colors.dark};
  font-size:1.4rem;
  svg path:first-of-type {
   fill: ${colors.yellow};
  }
 
`

const NewsItemContent =   styled.div`
  display:flex;
  margin-left:1.5rem;
  ${mq.mobile`
  margin-left:0;
  `}
  flex-direction:column;
  width:100%;
  h2 {
    ${font.h2}
    text-transform:none;
  }
 
`

const StyledBtnPrimary = styled(BtnPrimary)`
  margin-top:1.2rem;
`


export const groupesQuery = graphql`
  query  groupesPageQuery($locale: String) {
    page: datoCmsActualitePage(locale: {eq: $locale}) {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    news: allDatoCmsActualite(filter: {locale: {eq: $locale}}, sort: {fields: meta___updatedAt, order:DESC}){
      nodes {
        id
        meta {
          createdAt
        }
        titre
        contenu
        teaser
        slug
        image {  
          gatsbyImageData(
            placeholder: BLURRED,
            forceBlurhash: false,   
            width:360,
          
          )
        }
      }
    }
  }
`;


const NewsPage = ({ data }) => {

  const { titre, contenu, seoMetaTags } = data.page;
  const { nodes } = data.news; // toutes les news


  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <FocusText dangerouslySetInnerHTML={{ __html: contenu }}/>
          <NewsListWrapper>
            { _map(nodes, (item, i) => (
              <NewsItem key={item.id}>
                <NewsItemImage image={item.image.gatsbyImageData} alt={titre}/>

                <NewsItemContent>
                  <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={item.meta.createdAt}/>
                  </NewsItemDate>
                  <h2>{item.titre}</h2>
                  <Text dangerouslySetInnerHTML={{ __html: item.teaser }}/>
                  <StyledBtnPrimary to={`/actualites/${item.slug}/`}><FormattedMessage id="more"/></StyledBtnPrimary>
                </NewsItemContent>
              </NewsItem>
            ))}
           
          </NewsListWrapper>
          <Spacer/>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default NewsPage;