import logger from './logger';
console.log('environment',process.env.NODE_ENV);
export default [
  process.env.NODE_ENV === 'development' && logger,
].filter(Boolean);
