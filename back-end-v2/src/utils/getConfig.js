import { merge } from 'lodash';
import projectDir from './projectDir';

/**
 * get config depends on env
 * @param configName
 * @param divider
 * @returns {*}
 */
export default function (configName, divider = ' ') {
  const splitedConfigName = configName.split(divider);
  let envPrefix;

  switch (process.env.NODE_ENV) {
    case global.PRODUCTION_ENV: envPrefix = 'prod'; break;
    case global.STAGING_ENV: envPrefix = 'stage'; break;
    case global.DEVELOPMENT_ENV:
    default: envPrefix = 'dev';
  }
  if (splitedConfigName.length > 0) {
    const config = {};

    splitedConfigName.forEach(configName => {
      try {
        merge(config, require(`${projectDir}/config/${configName}`));
      } catch (exception) {
        try {
          merge(config, require(`${projectDir}/config/${envPrefix}/${configName}`));
        } catch (exception) {}
      }
    });

    return config;
  } else {
    try {
      return require(`${projectDir}/config/${configName}`);
    } catch (exception) {
      try {
        return require(`${projectDir}/config/${envPrefix}/${configName}`);
      } catch (exception) {
        return null;
      }
    }
  }
}
