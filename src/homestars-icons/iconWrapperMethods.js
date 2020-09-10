import React from "react";

export const getTranslation = (size, viewBoxSize) => {
  const differential = viewBoxSize - size;
  const translation = differential > 0 ? differential / 2 : 0;

  return `translate(${translation} ${translation})`;
};

export const getViewboxSize = ({ circleFill, circleStroke, viewBox }) => {
  return viewBox ? viewBox : circleFill || circleStroke ? 34 : 22;
};

export const circle = ({
  circleFill,
  circleStroke,
  circleStrokeWidth,
  strokeWidth
}) => {
  if (!circleFill && !circleStroke) return null;

  return pug`
    circle(
      fill=circleFill || "none"
      stroke=circleStroke || circleFill || "none"
      strokeWidth=circleStrokeWidth || strokeWidth
      cx="17"
      cy="17"
      r="16"
    )
  `;
};

export const square = ({ squareFill, squareRounded }) => {
  if (!squareFill) return null;

  const defaultSize = 22;
  const rounded = 0.15 * defaultSize;

  return pug`
    rect(
      fill=squareFill || "none"
      stroke="none"
      width=defaultSize
      height=defaultSize
      rx=squareRounded && rounded
      ry=squareRounded && rounded
    )
  `;
};
