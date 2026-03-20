/*
import React from 'react'
import { Link } from 'gatsby'
import { injectIntl} from 'react-intl' 
const siteConfig = require('../../config/site-config');

const locales = siteConfig.locales
 

 
const ExtendedLink = ({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`
 
  return <Link {...props} to={path} />
}
 
export default injectIntl(ExtendedLink)
*/

import React from 'react'
import { Link } from 'gatsby'
import { useIntl } from 'react-intl'

const siteConfig = require('../../config/site-config')
const locales = siteConfig.locales

const ExtendedLink = ({ to, ...props }) => {
  const { locale } = useIntl()

  const path = locales[locale].default ? to : `/${locale}${to}`

  return <Link {...props} to={path} />
}

export default ExtendedLink