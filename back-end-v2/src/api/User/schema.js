import { getUnix } from '../../utils';
import { nameValidator } from '../../validators';

export default {
  name: {
    type: String,
    required: true,
    min: 2,
    max: 254,
    validate: nameValidator
  },

  surname: {
    type: String,
    required: true,
    min: 2,
    max: 254,
    validate: nameValidator
  },

  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },

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
