import React from 'react';

const NumPad = ({ keyPressed, css }) => {
  return (
    <code>
      <br />
      <br />
      ,---,---,---,---,
      <br />|
      <span className={keyPressed.includes('NumLock') ? css.detected : ''}>
        num
      </span>
      |
      <span className={keyPressed.includes('NumpadDivide') ? css.detected : ''}>
        {' '}
        /{' '}
      </span>
      |
      <span
        className={keyPressed.includes('NumpadMultiply') ? css.detected : ''}
      >
        {' '}
        *{' '}
      </span>
      |
      <span
        className={keyPressed.includes('NumpadSubtract') ? css.detected : ''}
      >
        {' '}
        -{' '}
      </span>
      |
      <br />
      |---|---|---|---|
      <br />|
      <span className={keyPressed.includes('Numpad7') ? css.detected : ''}>
        {' '}
        7{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad8') ? css.detected : ''}>
        {' '}
        8{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad9') ? css.detected : ''}>
        {' '}
        9{' '}
      </span>
      |
      <span className={keyPressed.includes('NumpadAdd') ? css.detected : ''}>
        {' '}
        +{' '}
      </span>
      |
      <br />
      |---|---|---|&nbsp;&nbsp;&nbsp;|
      <br />|
      <span className={keyPressed.includes('Numpad4') ? css.detected : ''}>
        {' '}
        4{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad5') ? css.detected : ''}>
        {' '}
        5{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad6') ? css.detected : ''}>
        {' '}
        6{' '}
      </span>
      |<span>&nbsp;&nbsp;&nbsp;</span>
      |
      <br />
      |---|---|---|---|
      <br />|
      <span className={keyPressed.includes('Numpad1') ? css.detected : ''}>
        {' '}
        1{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad2') ? css.detected : ''}>
        {' '}
        2{' '}
      </span>
      |
      <span className={keyPressed.includes('Numpad3') ? css.detected : ''}>
        {' '}
        3{' '}
      </span>
      |
      <span className={keyPressed.includes('Enter') ? css.detected : ''}>
        ent
      </span>
      |
      <br />
      |---'---|---|&nbsp;&nbsp;&nbsp;|
      <br />|
      <span className={keyPressed.includes('Numpad0') ? css.detected : ''}>
        &nbsp;&nbsp; 0 &nbsp;&nbsp;
      </span>
      |
      <span
        className={keyPressed.includes('NumpadDecimal') ? css.detected : ''}
      >
        {' '}
        .{' '}
      </span>
      |<span>&nbsp;&nbsp;&nbsp;</span>
      |
      <br />
      '-------'---'---'
    </code>
  );
};

export default NumPad;
