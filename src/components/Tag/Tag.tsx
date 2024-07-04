import React from "react";
import "./Tag.scss";

interface TagProps {
  text: string;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tag: React.FC<TagProps> = ({
  text,
  color,
  className = "",
  style = {},
}) => (
  <div
    className={`tag ${className}`}
    style={{ ...style, backgroundColor: color }}
  >
    {text}
  </div>
);

Tag.defaultProps = {
  className: "",
  style: {},
};

export default Tag;
