import React from 'react';

const ArrowIcon = ({isActive, cssProps}: {isActive: boolean, cssProps?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${cssProps} w-6 h-6 transition-[0.3s] ${
        isActive ? "-rotate-180" : ""
      }`}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export {ArrowIcon};