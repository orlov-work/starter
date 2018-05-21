export default argument => (
  `import { ApiController } from '../../core';
import { response, panic } from '../../utils';

/**
  * ${argument}Controller class
  */
class ${argument}Controller extends ApiController {
  model = this.use('model');
}

export default new ${argument}Controller();
`
);
