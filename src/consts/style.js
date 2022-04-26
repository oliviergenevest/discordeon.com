/* eslint-disable quotes */
import bp from './breakpoints';
import { css } from 'styled-components';

export const colors = {

  light: '#fff',

  greyLight: '#CECECE',
  buttonHover: '#6d6967',
  cta:'#57877A',

  dark: '#080428', // bleu tres dark discordeon
  blue:'#01026C', // bleu discordeon
  blueLight:'#EBEBF3', // bleu discordeon light utilisé pour fond 
  orange:'#FF8563', //orangle fluo discordeon
  yellow:'#40FF39', // vert fluo discordeon
  yellowLight:'#F1EFD4',



  grey:'#E8E7E7',
};

export const space = {
  'quarter': '.5rem',
  'half': '1rem',
  'default': '2rem',
  '3': '3rem',
  'double': '4rem',
  '5': '5rem',
  '6': '6rem',
  '7': '7rem',
  'big': '8rem',
  '9': '9rem',
  'huge': '10rem',
}
const mQueryPoint = {
  mobile: `${bp.mobile}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  tablet: `${bp.tablet}px`,
  desktop: `${bp.desktop}px`,
};

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

export const boxShadow = `
box-shadow : 0px 3px 6px #00000029;
`
export const font = {
  // haut a droite rappel de navigation utilisé comme H1 pour referencement
  pageTitle : ` 
            font-size:3.4rem;
            line-height:normal;
            font-weight:500;
            text-align:right;
            text-transform:lowercase;
            color: ${colors.blue};
            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 2.8rem;
            }
            &:before {
              content: "";
              display: inline-block;
              position: relative;
              left: -2rem;
              height:6px;
              border-radius:8px;
              bottom: 0.5rem;
              background-color: #F0F3D3;
              border:2px solid ${colors.yellow};
              width: 50px;
            
            }
`,
// gros titre centré
  title:  ` 
            font-size:6.4rem;
            line-height:normal;
            font-weight:500;
            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 3.6rem;
            }
          `,
  h2: `
          font-style: normal;
          font-weight: 500;
          font-size: 2.6rem;
          line-height: 31px;
          color: ${colors.blue};
          `,
// avec trait orange oblique devant
  h2Oblique: `
            font-style: normal;
            font-weight: 500;
            font-size: 2.6rem;
            line-height: 31px;
            color: ${colors.blue};
            &:before {
              content: "";
              display: inline-block;
              position: relative;
              left: -1rem;
              height:6px;
              border-radius:8px;
              bottom: 0.5rem;
              background-color: #F0F3D3;
              border:2px solid ${colors.orange};
              width: 30px;
              transform:rotate(69deg);
            
            }
            `,
  h3 :`
            font-style: normal;
            font-weight: 500;
            font-size: 2.6rem;
            line-height: 31px;
            color: ${colors.dark};
            `,

  subtitle: ` 
            font-size:2.4rem;
            font-style: normal;
            font-weight: normal;
            line-height: 35px;

            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 2rem;
            }
          `,
  text: ` 
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 27px;

            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 1.6rem;
            }

          `,

  navigationItem:`
           
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            text-transform:lowercase;
          `,
   
};


export const z = {
  modalBackground: `z-index: 100000;`,
  modal: `z-index: 200000;`,
};



// Creates up & down media queries for your breakpoints
// *** Usage ***
// import { mq } from "**/style.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

export const mq = Object.keys(bp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  acc[`${label}_up`] = (...args) => css`
    @media screen and (min-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
