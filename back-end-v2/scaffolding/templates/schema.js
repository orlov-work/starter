export default argument => (

  `import * as mongoose from 'mongoose';
import { getUnix } from '../../utils';

export default {
  createdAt: {
    $: 'int (unix)',
    type: Number,
    default: getUnix()
  },

  updatedAt: {
    $: 'int (unix)',
    type: Number,
    default: getUnix()
  }
};
`

);
