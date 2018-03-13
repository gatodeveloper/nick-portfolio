// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
declare function require(moduleName: string): any;
const {version: appVersion} = require('../../package.json');

export const environment = {
  production: false,
  version: appVersion,
  apiUrl: 'http://dev.zingo.space:1337',
  apiPath: 'api/v1',
  authPath: 'auth/v1',
  hooksPath: 'hooks/v1',
  authClientId: 'auth-compose',
  authClientSecret: 'ed1fbd1eb41a11e7abc4cec278b6b50a',
  facebookKey: '1669737329981957',
  googleKey: '158144010953-o0pmr05kn07khjgsctc2gbftd0s1751a.apps.googleusercontent.com',
  googleMapsApiKey: 'AIzaSyAxWMUiue-yQZaYTqNLSp585TouQYIN-TM',
};
