/**
 * @param tip
 * @param target
 * @param distance
 * @param bodyPadding
 * @returns {boolean}
 */
function checkLeftRightWidthSufficient(tip, target, distance, bodyPadding) {
  const { clientWidth } = document.documentElement;
  const { left, right } = target.getBoundingClientRect();

  const deadSpace = Math.min(left, clientWidth - right);
  const width = tip.offsetWidth + target.offsetWidth + distance + bodyPadding + deadSpace;

  return (width < clientWidth);
}

/**
 * @param target
 * @returns {boolean}
 */
function checkHalfHeightVisible(target) {
  const targetCenterFromWindow = target.getBoundingClientRect().top + Math.round(target.offsetHeight / 2);

  return (targetCenterFromWindow < window.innerHeight && targetCenterFromWindow > 0);
}

/**
 * @param currentDirection
 * @param tip
 * @param target
 * @param distance
 * @param bodyPadding
 * @returns {*}
 */
export default function getDirection(currentDirection, tip, target, distance, bodyPadding) {
  if (!target) return currentDirection;

  const {
    top,
    bottom,
    left,
    right
  } = target.getBoundingClientRect();
  const { clientWidth } = document.documentElement;
  const { offsetWidth, offsetHeight } = tip;

  switch (currentDirection) {
    case 'right':
      if (
        !checkLeftRightWidthSufficient(tip, target, distance, bodyPadding)
        || !checkHalfHeightVisible(target)
      ) return getDirection('up', tip, target, distance, bodyPadding);

      if ((clientWidth - right) < (offsetWidth + distance + bodyPadding)) return 'left';

      return 'right';

    case 'left':
      if (
        !checkLeftRightWidthSufficient(tip, target, distance, bodyPadding)
        || !checkHalfHeightVisible(target)
      ) return getDirection('up', tip, target, distance, bodyPadding);

      if (left < offsetWidth + distance + bodyPadding) return 'right';

      return 'left';

    case 'up':
      if (top < offsetHeight + distance + bodyPadding) {
        return 'down';
      }

      return 'up';

    case 'down':
    default:
      if ((window.innerHeight - bottom) < offsetHeight + distance + bodyPadding) {
        return 'up';
      }

      return 'down';
  }
}
