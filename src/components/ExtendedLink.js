import React from 'react'
import { Link } from 'gatsby'
import { injectIntl} from 'react-intl' 
const siteConfig = require('../../config/site-config');

const locales = siteConfig.locales
 
/*import locales from '../constants/locales'*/
 
const ExtendedLink = ({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`
 
  return <Link {...props} to={path} />
}
 
export default injectIntl(ExtendedLink)