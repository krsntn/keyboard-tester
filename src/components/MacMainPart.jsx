import React from 'react';

const MacMainPart = ({ keyPressed, css, isMacKeyboard }) => {
  return (
    <code>
      ,-----,---,---,---,---,---,---,---,---,---,---,---,---,---,
      <br />|
      <span className={keyPressed.includes('Escape') ? css.detected : ''}>
        {' '}
        esc{' '}
      </span>
      |
      <span className={keyPressed.includes('F1') ? css.detected : ''}> f1</span>
      |
      <span className={keyPressed.includes('F2') ? css.detected : ''}> f2</span>
      |
      <span className={keyPressed.includes('F3') ? css.detected : ''}> f3</span>
      |
      <span className={keyPressed.includes('F4') ? css.detected : ''}> f4</span>
      |
      <span className={keyPressed.includes('F5') ? css.detected : ''}> f5</span>
      |
      <span className={keyPressed.includes('F6') ? css.detected : ''}> f6</span>
      |
      <span className={keyPressed.includes('F7') ? css.detected : ''}> f7</span>
      |
      <span className={keyPressed.includes('F8') ? css.detected : ''}> f8</span>
      |
      <span className={keyPressed.includes('F9') ? css.detected : ''}> f9</span>
      |
      <span className={keyPressed.includes('F10') ? css.detected : ''}>
        f10
      </span>
      |
      <span className={keyPressed.includes('F11') ? css.detected : ''}>
        f11
      </span>
      |
      <span className={keyPressed.includes('F12') ? css.detected : ''}>
        f12
      </span>
      |<span>&nbsp;&nbsp;&nbsp;</span>
      |
      <br />
      |---,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'---|
      <br />|
      <span className={keyPressed.includes('Backquote') ? css.detected : ''}>
        {' '}
        `{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit1') ? css.detected : ''}>
        {' '}
        1{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit2') ? css.detected : ''}>
        {' '}
        2{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit3') ? css.detected : ''}>
        {' '}
        3{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit4') ? css.detected : ''}>
        {' '}
        4{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit5') ? css.detected : ''}>
        {' '}
        5{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit6') ? css.detected : ''}>
        {' '}
        6{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit7') ? css.detected : ''}>
        {' '}
        7{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit8') ? css.detected : ''}>
        {' '}
        8{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit9') ? css.detected : ''}>
        {' '}
        9{' '}
      </span>
      |
      <span className={keyPressed.includes('Digit0') ? css.detected : ''}>
        {' '}
        0{' '}
      </span>
      |
      <span className={keyPressed.includes('Minus') ? css.detected : ''}>
        {' '}
        -{' '}
      </span>
      |
      <span className={keyPressed.includes('Equal') ? css.detected : ''}>
        {' '}
        ={' '}
      </span>
      |
      <span className={keyPressed.includes('Backspace') ? css.detected : ''}>
        bkspc
      </span>
      |
      <br />
      |---'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,---|
      <br />|
      <span className={keyPressed.includes('Tab') ? css.detected : ''}>
        {' '}
        tab{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyQ') ? css.detected : ''}>
        {' '}
        q{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyW') ? css.detected : ''}>
        {' '}
        w{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyE') ? css.detected : ''}>
        {' '}
        e{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyR') ? css.detected : ''}>
        {' '}
        r{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyT') ? css.detected : ''}>
        {' '}
        t{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyY') ? css.detected : ''}>
        {' '}
        y{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyU') ? css.detected : ''}>
        {' '}
        u{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyI') ? css.detected : ''}>
        {' '}
        i{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyO') ? css.detected : ''}>
        {' '}
        o{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyP') ? css.detected : ''}>
        {' '}
        p{' '}
      </span>{' '}
      |
      <span className={keyPressed.includes('BracketLeft') ? css.detected : ''}>
        {' '}
        [{' '}
      </span>
      |
      <span className={keyPressed.includes('BracketRight') ? css.detected : ''}>
        {' '}
        ]{' '}
      </span>
      |
      <span className={keyPressed.includes('Backslash') ? css.detected : ''}>
        {' '}
        \{' '}
      </span>
      |
      <br />
      |-----',--',--',--',--',--',--',--',--',--',--',--',--'---|
      <br />|
      <span className={keyPressed.includes('CapsLock') ? css.detected : ''}>
        {' '}
        caps{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyA') ? css.detected : ''}>
        {' '}
        a{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyS') ? css.detected : ''}>
        {' '}
        s{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyD') ? css.detected : ''}>
        {' '}
        d{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyF') ? css.detected : ''}>
        {' '}
        f{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyG') ? css.detected : ''}>
        {' '}
        g{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyH') ? css.detected : ''}>
        {' '}
        h{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyJ') ? css.detected : ''}>
        {' '}
        j{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyK') ? css.detected : ''}>
        {' '}
        k{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyL') ? css.detected : ''}>
        {' '}
        l{' '}
      </span>
      |
      <span className={keyPressed.includes('Semicolon') ? css.detected : ''}>
        {' '}
        ;{' '}
      </span>
      |
      <span className={keyPressed.includes('Quote') ? css.detected : ''}>
        {' '}
        '{' '}
      </span>
      |
      <span className={keyPressed.includes('Enter') ? css.detected : ''}>
        {' '}
        entr{' '}
      </span>
      |
      <br />
      |------'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,----|
      <br />|
      <span className={keyPressed.includes('ShiftLeft') ? css.detected : ''}>
        {' '}
        &nbsp;shft&nbsp;{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyZ') ? css.detected : ''}>
        {' '}
        z{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyX') ? css.detected : ''}>
        {' '}
        x{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyC') ? css.detected : ''}>
        {' '}
        c{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyV') ? css.detected : ''}>
        {' '}
        v{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyB') ? css.detected : ''}>
        {' '}
        b{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyN') ? css.detected : ''}>
        {' '}
        n{' '}
      </span>
      |
      <span className={keyPressed.includes('KeyM') ? css.detected : ''}>
        {' '}
        m{' '}
      </span>
      |
      <span className={keyPressed.includes('Comma') ? css.detected : ''}>
        {' '}
        ,{' '}
      </span>
      |
      <span className={keyPressed.includes('Period') ? css.detected : ''}>
        {' '}
        .{' '}
      </span>
      |
      <span className={keyPressed.includes('Slash') ? css.detected : ''}>
        {' '}
        /{' '}
      </span>
      |
      <span className={keyPressed.includes('ShiftRight') ? css.detected : ''}>
        {' '}
        &nbsp;shft&nbsp;{' '}
      </span>
      |
      <br />
      |-----,--',--'---|---'---'---'---'---'---|---'-,-'---,----|
      <br />|
      <span className={keyPressed.includes('ControlLeft') ? css.detected : ''}>
        {' '}
        ctl{' '}
      </span>
      |
      <span className={keyPressed.includes('AltLeft') ? css.detected : ''}>
        {' '}
        opt
      </span>
      |
      <span className={keyPressed.includes('MetaLeft') ? css.detected : ''}>
        {' '}
        cmd{' '}
      </span>
      |
      <span className={keyPressed.includes('Space') ? css.detected : ''}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
      </span>
      |
      <span className={keyPressed.includes('MetaRight') ? css.detected : ''}>
        {' '}
        cmd{' '}
      </span>
      |
      <span className={keyPressed.includes('AltRight') ? css.detected : ''}>
        {' '}
        opt
      </span>
      |
      <span className={keyPressed.includes('ControlRight') ? css.detected : ''}>
        &nbsp;ctl&nbsp;
      </span>
      |
      <br />
      '-----'----'-----'-----------------------'-----'----'-----'
    </code>
  );
};

export default MacMainPart;
