import React from "react";

const FloatingShape = ({
  shape,
  color,
  size,
  animationDelay,
  text,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center absolute ${color} ${shape} ${size} animate-floating ${className}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <span className="text-white font-bold">{text}</span>
    </div>
  );
};

export default FloatingShape;
