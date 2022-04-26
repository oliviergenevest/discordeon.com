import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'gatsby';
import { Icon } from '@iconify/react';
import gbIcon from '@iconify/icons-cif/gb';
import frIcon from '@iconify/icons-cif/fr';
export const LanguageSwitcher = ({location}) => {

  const intl = useIntl();
  return (
    intl.locale === "fr" ? <Link to = '/en' title="English version"><Icon icon={gbIcon} style={{fontSize: '17px'}} /> </Link> : <Link to = '/'  title="Version française"><Icon icon={frIcon} style={{fontSize: '17px'}} /> </Link>
  );
};


