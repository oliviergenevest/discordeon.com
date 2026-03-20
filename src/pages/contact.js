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
} from "../components/Elements"

export const contactQuery = graphql`
  query contactQuery($locale: String) {
    

    page: datoCmsContactPage(locale: $locale) {
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
      
      <PageWrapper>
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          
        </PageInner>
        
      
          <PageInner id="contact">
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


export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} locale={props.pageContext.locale} />
)