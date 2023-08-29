import React from 'react';

const WaveHaikei = () => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className="w-full h-full"
    >
      <rect x="0" y="0" width="900" height="600" fill="#e2e2e2" />
      <path
        d="M0 139L50 175.8C100 212.7 200 286.3 300 282.5C400 278.7 500 197.3 600 162.2C700 127 800 138 850 143.5L900 149L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
        fill="#1f2937"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default WaveHaikei;
