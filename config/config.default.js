/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571906558874_143';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cluster = {
    listen: {
      path: '',
      port: Math.abs(parseInt(process.env.AFS_SERVER_PORT, 10) || 7022),
      hostname: process.env.AFS_SERVER_HOST || '0.0.0.0',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
