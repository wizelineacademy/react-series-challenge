import { createAction } from 'redux-actions';

const PATH_SET = 'PATH_SET';
const setPath = createAction(PATH_SET);

export default {
  types: {
    PATH_SET,
  },
  creators: {
    setPath,
  },
};
