//A reverse engineer job of the slide found in the svelte source code
//in order to slide from right to left as opposed to top to bottom.

import { cubicOut } from "svelte/easing";

export default function slideRtoL(
  node,
  { delay = 0, duration = 400, easing = cubicOut }
) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const width = parseFloat(style.width);
  const paddingRight = parseFloat(style.paddingRight);
  const paddingLeft = parseFloat(style.paddingLeft);
  const marginRight = parseFloat(style.marginRight);
  const marginLeft = parseFloat(style.marginLeft);
  const borderRightHeight = parseFloat(style.borderRightHeight);
  const borderLeftHeight = parseFloat(style.borderLeftHeight);

  return {
    delay,
    duration,
    easing,
    css: (t) =>
      `overflow: hidden;` +
      `opacity: ${Math.min(t * 20, 1) * opacity};` +
      `width: ${t * width}px;` +
      `padding-right: ${t * paddingRight}px;` +
      `padding-left: ${t * paddingLeft}px;` +
      `margin-right: ${t * marginRight}px;` +
      `margin-left: ${t * marginLeft}px;` +
      `border-top-width: ${t * borderRightHeight}px;` +
      `border-bottom-width: ${t * borderLeftHeight}px;`,
  };
}
