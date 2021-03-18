import React from "react";

const LSLogo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23'
    height='20'
    viewBox='0 0 23 20'
    style={{ padding: "4px" }}
  >
    <defs>
      <linearGradient id='a' x1='0%' x2='100.015%' y1='49.996%' y2='49.996%'>
        <stop offset='0%' stop-color='#317357' />
        <stop offset='100%' stop-color='#55BE90' />
      </linearGradient>
    </defs>
    <path
      fill='url(#a)'
      fill-rule='nonzero'
      d='M11.502 0l8.035 13.956h-5.036L8.986 4.374 11.502 0zM5.036 20l5.511-9.57-2.52-4.378L0 20h5.036zm15.448-4.378H9.454l-2.52 4.374H23l-2.516-4.374z'
    />
  </svg>
);

export default LSLogo;
