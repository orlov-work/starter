export default argument => (

  `import ${argument}Controller from './controller';

export default require('express').Router()
`
);
