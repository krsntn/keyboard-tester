import React from 'react';

const ArrowPart = ({ keyPressed, css }) => {
  return (
    <code>
      ,---,---,---,
      <br />|
      <span className={keyPressed.includes('PrintScreen') ? css.detected : ''}>
        prn
      </span>
      |
      <span className={keyPressed.includes('ScrollLock') ? css.detected : ''}>
        scr
      </span>
      |
      <span className={keyPressed.includes('Pause') ? css.detected : ''}>
        pau
      </span>
      |
      <br />
      |---|---|---|
      <br />|
      <span className={keyPressed.includes('Insert') ? css.detected : ''}>
        ins
      </span>
      |
      <span className={keyPressed.includes('Home') ? css.detected : ''}>
        hom
      </span>
      |
      <span className={keyPressed.includes('PageUp') ? css.detected : ''}>
        pgu
      </span>
      |
      <br />
      |---|---|---|
      <br />|
      <span className={keyPressed.includes('Delete') ? css.detected : ''}>
        del
      </span>
      |
      <span className={keyPressed.includes('End') ? css.detected : ''}>
        end
      </span>
      |
      <span className={keyPressed.includes('PageDown') ? css.detected : ''}>
        pgd
      </span>
      |
      <br />
      '---'---'---'
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;,---,
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;|
      <span className={keyPressed.includes('ArrowUp') ? css.detected : ''}>
        {' '}
        &#8593;{' '}
      </span>
      |
      <br />
      ,---|---|---,
      <br />|
      <span className={keyPressed.includes('ArrowLeft') ? css.detected : ''}>
        {' '}
        &#8592;{' '}
      </span>
      |
      <span className={keyPressed.includes('ArrowDown') ? css.detected : ''}>
        {' '}
        &#8595;{' '}
      </span>
      |
      <span className={keyPressed.includes('ArrowRight') ? css.detected : ''}>
        {' '}
        &#8594;{' '}
      </span>
      |
      <br />
      '---'---'---'
    </code>
  );
};

export default ArrowPart;
