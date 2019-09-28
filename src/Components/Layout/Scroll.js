import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowScrolling: 'touch',
        WebkitOverflowScrolling: 'touch',
        height: '530px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
