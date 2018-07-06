const req = require.context(".", false, /^((?!index).)*\.js$/);

req.keys().forEach(key => {
  const pageName = key.replace(/^\.\/([^.]+)\.js$/, "$1");
  module.exports[pageName] = req(key).default;
});
