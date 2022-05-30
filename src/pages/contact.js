import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { colors } from "../consts/style"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm/ContactForm"

import {
  PageWrapper,
  PageInner,
  PageTitle,
  Text,
  Grid2Col,
  Spacer,
} from "../components/Elements"

export const contactQuery = graphql`
  query contactQuery($locale: String) {
    

    page: datoCmsContactPage(locale: {eq: $locale}) {
      titre
      contenu
      
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
const ContactPage =  ({ data }) => {

  const {
    titre,
    contenu,
    seoMetaTags,
  } = data.page

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          
        </PageInner>
        <Spacer id="contact" />
      
          <PageInner>
            <Grid2Col>
              <div> 
                <Text
                  color={colors.dark}
                  dangerouslySetInnerHTML={{ __html: contenu }}
                />
                <ContactForm />
              </div>
            </Grid2Col>
          </PageInner>
        
      </PageWrapper>
    </Fragment>
  )
}

export default  ContactPage