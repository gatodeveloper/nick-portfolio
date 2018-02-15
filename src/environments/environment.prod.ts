declare function require(moduleName: string): any;
const {version: appVersion} = require('../../package.json');

export const environment = {
  production: true,
  version: appVersion,
  apiUrl: 'http://localhost:1337',
  apiPath: 'api/v1',
};
