import PropTypes from 'prop-types';

export const providerTypes = {
  children: PropTypes.node.isRequired,
};

export const seoTypes = {
  meta: PropTypes.object.isRequired,
};

export const projetTypes = {
  data: PropTypes.object.isRequired,
};
export const groupeTypes = {
  data: PropTypes.object.isRequired,
};
export const layoutTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export const headerTypes = {
  location: PropTypes.object.isRequired,
};
