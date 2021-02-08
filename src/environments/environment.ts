// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// https://stackoverflow.com/questions/53115665/cannot-find-name-require-in-angular-7typescript-3-1-3/54256929
// declare const require: any;

export const environment = {
  appVersion: require('../../package.json').version + '-dev',
  lastUpdate: require('../../package.json').lastUpdate,
  production: false
};
