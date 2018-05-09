export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * @param baseType
 * @param target
 * @returns {string}
 */
export function buildActionType(baseType, target) {
  return `${baseType}_${target}`;
}
