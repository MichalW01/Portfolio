import React from 'react';
import './Background.scss';

function Background({children}) {
  return (
    <div className="back">
      <div className="square"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="pipe"></div>
      {children}
    </div>
  );
}

export default Background;