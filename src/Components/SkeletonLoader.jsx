import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="relative size-[280px] bg-gray-100 rounded-lg shadow-lg p-6 text-center overflow-hidden animate-pulse">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mt-5 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
        </div>
    );
};

export default SkeletonLoader;
