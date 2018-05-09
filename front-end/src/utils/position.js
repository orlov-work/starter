import getDirection from './get-direction';

const bodyPadding = 5;

/**
 * cross browser scroll positions
 * @returns {number}
 */
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/**
 * cross browser scroll positions
 * @returns {number}
 */
function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

/**
 * Sets tip max width safely for mobile
 * @returns {number}
 */
function getTipMaxWidth() {
  return (typeof document !== 'undefined') ? document.documentElement.clientWidth - (bodyPadding * 2) : 1000;
}

/**
 * Gets wrapper's left position for top/bottom tooltips as well as needed width restriction
 * @param tip
 * @param target
 * @param state
 * @param direction
 * @returns {{left: number, top: *}}
 */
function getUpDownPosition(tip, target, state, direction, arrowSize) {
  let left = -10000000;
  let top;

  if (tip && state.showTip) {
    const targetRect = target.getBoundingClientRect();
    const targetLeft = targetRect.left + getScrollLeft();

    const halfTargetWidth = Math.round(target.offsetWidth / 2);
    const tipWidth = Math.min(getTipMaxWidth(), tip.offsetWidth);

    left = Math.max((targetLeft + halfTargetWidth) - Math.round(tipWidth / 2), bodyPadding + getScrollLeft());

    const rightOverhang = (left + tipWidth + bodyPadding) - document.documentElement.clientWidth;
    if (rightOverhang > 0) left -= rightOverhang;

    if (direction === 'up') {
      top = (targetRect.top + getScrollTop()) - (tip.offsetHeight + arrowSize);
    } else {
      top = targetRect.bottom + getScrollTop() + arrowSize;
    }
  }

  return { left, top };
}

/**
 * gets top position for left/right arrows
 * @param tip
 * @param target
 * @param state
 * @param direction
 * @returns {{left: number, top: number}}
 */
function getLeftRightPosition(tip, target, state, direction, arrowSize) {
  let left = -10000000;
  let top = 0;

  if (tip && state.showTip) {
    const scrollTop = getScrollTop();
    const targetRect = target.getBoundingClientRect();
    const targetTop = targetRect.top + scrollTop;
    const halfTargetHeight = Math.round(target.offsetHeight / 2);

    top = Math.max((targetTop + halfTargetHeight) - Math.round(tip.offsetHeight / 2), bodyPadding + scrollTop);

    const arrowTop = (targetTop + halfTargetHeight) - arrowSize;
    top = Math.min(top, arrowTop - (arrowSize / 2));

    const bottomOverhang = ((top - scrollTop) + tip.offsetHeight + bodyPadding) - window.innerHeight;
    if (bottomOverhang > 0) {
      const arrowBottom = targetRect.top + scrollTop + halfTargetHeight + arrowSize;
      top = Math.max(top - bottomOverhang, (arrowBottom + (arrowSize / 2)) - tip.offsetHeight);
    }

    if (direction === 'right') {
      left = targetRect.right + arrowSize;
    } else {
      left = targetRect.left - arrowSize - tip.offsetWidth;
    }
  }

  return { left, top };
}

/**
 * sets the Arrow styles based on direction
 * @param target
 * @param tip
 * @param direction
 * @param state
 * @returns {*}
 */
function getArrowStyles(target, tip, direction, state, arrowSize) {
  if (!target) {
    return {
      top: '0',
      left: '-10000000px'
    };
  }

  const targetRect = target.getBoundingClientRect();
  const halfTargetHeight = Math.round(target.offsetHeight / 2);
  const halfTargetWidth = Math.round(target.offsetWidth / 2);
  const scrollTop = getScrollTop();
  const scrollLeft = getScrollLeft();

  switch (direction) {
    case 'right':
      return {
        top: (state.showTip && tip) ? (targetRect.top + scrollTop + halfTargetHeight) - arrowSize : '-10000000px',
        left: targetRect.right + scrollLeft,
        borderRight: `${arrowSize}px solid #000`,
        borderTop: `${arrowSize}px solid transparent`,
        borderBottom: `${arrowSize}px solid transparent`
      };

    case 'left':
      return {
        top: (state.showTip && tip) ? (targetRect.top + scrollTop + halfTargetHeight) - arrowSize : '-10000000px',
        left: (targetRect.left + scrollLeft) - arrowSize - 1,
        borderLeft: `${arrowSize}px solid #000`,
        borderTop: `${arrowSize}px solid transparent`,
        borderBottom: `${arrowSize}px solid transparent`
      };

    case 'up':
      return {
        left: (state.showTip && tip) ? (targetRect.left + scrollLeft + halfTargetWidth) - arrowSize : '-10000000px',
        top: (targetRect.top + scrollTop) - arrowSize,
        borderTop: `${arrowSize}px solid #000`,
        borderLeft: `${arrowSize}px solid transparent`,
        borderRight: `${arrowSize}px solid transparent`
      };

    case 'down':
    default:
      return {
        left: (state.showTip && tip) ? (targetRect.left + scrollLeft + halfTargetWidth) - arrowSize : '-10000000px',
        top: targetRect.bottom + scrollTop,
        borderBottom: `${arrowSize}px solid #000`,
        borderLeft: `${arrowSize}px solid transparent`,
        borderRight: `${arrowSize}px solid transparent`
      };
  }
}

/**
 * Returns the positions style rules
 * @param direction
 * @param tip
 * @param target
 * @param state
 * @returns {
 *  {
 *    tip: {maxWidth: number},
 *    arrow: {top, left}
 *    |{top, left, borderRight, borderTop, borderBottom}
 *    |{top, left, borderLeft, borderTop, borderBottom}
 *    |{left, top, borderTop, borderLeft, borderRight}
 *    |{left, top, borderBottom, borderLeft, borderRight},
  *    realDirection: *
  *  }
 * }
 */
export default function positions(direction, tip, target, state, arrowSize) {
  const realDirection = getDirection(direction, tip, target, arrowSize, bodyPadding);
  const maxWidth = getTipMaxWidth();

  const tipPosition = (realDirection === 'up' || realDirection === 'down')
    ? getUpDownPosition(tip, target, state, realDirection, arrowSize)
    : getLeftRightPosition(tip, target, state, realDirection, arrowSize);

  return {
    tip: {
      ...tipPosition,
      maxWidth
    },
    arrow: getArrowStyles(target, tip, realDirection, state, arrowSize),
    realDirection
  };
}
