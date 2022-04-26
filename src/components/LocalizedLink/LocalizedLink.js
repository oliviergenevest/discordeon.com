import React from 'react'
import { Link } from 'gatsby'
import { injectIntl, intlShape } from 'react-intl'
import config from '../../../config/site-config'

const locales = config.locales

const LocalizedLink = ({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`

  return <Link {...props} to={path} />
}

export default injectIntl(LocalizedLink)