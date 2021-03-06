const loaderUtils = require('loader-utils');

module.exports =  function normalizeFallback(fallback, originalOptions) {
  let loader = 'file-loader'; // 默认会使用file-loader处理
  let options = {};

  if (typeof fallback === 'string') {
    loader = fallback;

    const index = fallback.indexOf('?');

    if (index >= 0) {
      loader = fallback.substr(0, index);
      options = loaderUtils.parseQuery(fallback.substr(index));
    }
  }

  if (fallback !== null && typeof fallback === 'object') {
    ({ loader, options } = fallback);
  }

  options = Object.assign({}, originalOptions, options);

  delete options.fallback;

  return { loader, options };
}
