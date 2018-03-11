import logger from './logger';

export default [
  process.env.NODE_ENV === 'develpment' && logger,
].filter(Boolean);
