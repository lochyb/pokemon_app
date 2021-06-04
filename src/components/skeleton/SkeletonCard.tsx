import React from "react";
import { SkeletonPiece } from "./SkeletonLayout";

export const SkeletonCard = () => {
  return (
    <div className='skeleton-wrapper'>
      <SkeletonPiece type='sprite-pic' />
      <SkeletonPiece type='' />
      <SkeletonPiece type='name' />
    </div>
  );
};
