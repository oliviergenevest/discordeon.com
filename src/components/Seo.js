import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { useIntl } from 'react-intl';
import { seoTypes } from '../types/propTypes';

const Seo = ({ meta }) => {
  const intl = useIntl();
  return <HelmetDatoCms seo={meta} ><html lang={intl.locale} /></HelmetDatoCms>;
};

Seo.propTypes = seoTypes;

export default Seo;
