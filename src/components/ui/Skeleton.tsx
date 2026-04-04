import React from 'react';

export const SkeletonCard: React.FC = () => (
  <div className="card p-6 animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
  </div>
);

export const SkeletonTable: React.FC = () => (
  <div className="space-y-3 animate-pulse">
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
    ))}
  </div>
);