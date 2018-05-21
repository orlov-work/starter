import getConfig from './getConfig';
const config = getConfig('app');

export default `${process.cwd()}/${config.SOURCE_DIR}`;
