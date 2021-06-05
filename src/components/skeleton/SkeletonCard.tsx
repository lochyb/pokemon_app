import React from "react";
import { Shimmer } from "./shimmer";
import { SkeletonPiece } from "./SkeletonLayout";

export const SkeletonCard = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton-background'>
        <SkeletonPiece type='sprite-pic' />
        <SkeletonPiece type='id' />
        <SkeletonPiece type='name' />
        <SkeletonPiece type='types' />
      </div>
      <Shimmer />
    </div>
  );
};
