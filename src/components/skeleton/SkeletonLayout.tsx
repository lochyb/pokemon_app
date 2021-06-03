import React from "react";
import "./skeleton.css";

interface Props {
  type: string;
}

export const SkeletonLayout: React.FC<Props> = ({ type }) => {
  const classNames = `skeleton ${type}`;
  return <div className={classNames}> </div>;
};
