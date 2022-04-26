import React from "react"
import styled from "styled-components"
import _map from "lodash/map"
import Img from "gatsby-image"
import { mq } from '../consts/style';
import Background from "../images/background-logo.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 4rem);
  position: relative;
  margin-right: -2rem;
  margin-left: -2rem;
  margin-bottom: -2rem;
  padding: 5rem 2rem 8rem 2rem;
  background: #ceccb4;
`
const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1200px;
`

const Foret = styled.div`
  background: url(${Background}) no-repeat top center;
  background-size: cover;
  height: 200px;
  width: calc(100% + 4rem);
  position: relative;
  margin-right: -2rem;
  margin-left: -2rem;
  ${mq.tabletSmall`
  display:none;
  `}
`

const Logo = styled(Img)`
  filter: grayscale(100%);
  transition: filter .2s ease-in;
  &:hover {
    filter: none;
  }
}   
`

const LogosPartenaires = ({ data }) => {
  return (
    <>
      <Foret />
      <Wrapper>
        <Logos>
          {_map(data, (partenaire, i) => (
            <a target="_blank" rel="noreferrer" title={partenaire.lien} key={i} href={partenaire.lien}>
              <Logo fixed={partenaire.logo.fixed} alt="logo"/>
            </a>
          ))}
        </Logos>
      </Wrapper>
    </>
  )
}
export default LogosPartenaires
