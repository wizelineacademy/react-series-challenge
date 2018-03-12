import logger from './logger';
console.log(process.env.NODE_ENV);
export default [
  process.env.NODE_ENV === 'development' && logger,
].filter(Boolean);
