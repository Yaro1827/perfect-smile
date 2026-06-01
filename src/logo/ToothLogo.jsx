import React from "react";

const ToothLogo = ({ width = 120, height = 120 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      fill="none"
    >
      <defs>
      
        <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fea94f" />
          <stop offset="100%" stopColor="#fea500" />
        </linearGradient>
       
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#fea94f" floodOpacity="0.3" />
        </filter>
      </defs>

      
      <path
        d="M100 25C127.5 25 150 45 155 75C160 105 155 140 140 160C130 172 120 180 115 180C110 180 108 170 100 170C92 170 90 180 85 180C80 180 70 172 60 160C45 140 40 105 45 75C50 45 72.5 25 100 25Z"
        fill="url(#toothGradient)"
        filter="url(#shadow)"
        stroke="white"
        strokeWidth="3"
      />

      
      <path
        d="M70 60C75 45 85 35 100 35C90 38 78 50 72 65C66 80 65 100 70 120C63 100 63 78 70 60Z"
        fill="white"
        fillOpacity="0.25"
      />

      
      <circle cx="160" cy="55" r="4" fill="white" fillOpacity="0.9" />
      <path
        d="M160 45L161 53L169 54L161 55L160 63L159 55L151 54L159 53Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
};

export default ToothLogo;