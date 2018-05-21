export default argument => (

  `import { Model } from '../../core';
import Schema from './schema';

/**
  * ${argument} model
  */
class ${argument} extends Model {}

export default new ${argument}('${argument}', Schema);
`

);
