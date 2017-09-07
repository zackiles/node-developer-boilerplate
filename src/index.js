import yargs from 'yargs';
import _ from 'lodash';
import log from './lib/log';
import pkg from '../package.json';

log.info(pkg.description);
log.info(`Version: ${pkg.version}`);
log.info(`Author: ${pkg.author}`);
log.info(`Licence: ${pkg.license}`);
log.info(`Repository: ${pkg.homepage}`);
