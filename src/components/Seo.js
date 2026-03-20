import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { useIntl } from 'react-intl';
import { seoTypes } from '../types/propTypes';

const Seo = ({ meta, locale }) => {
 // const intl = useIntl();
  return <HelmetDatoCms seo={meta} ><html lang={locale} /></HelmetDatoCms>;
};

Seo.propTypes = seoTypes;

export default Seo;
