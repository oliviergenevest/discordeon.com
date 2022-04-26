import * as modalTypes from '../types/modalTypes';
import Basic from './Basic';
import Special from './Special';

export default {
  [modalTypes.BASIC]: Basic,
  [modalTypes.SPECIAL]: Special,
};
