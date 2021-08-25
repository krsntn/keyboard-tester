import React, { useState, useEffect, useCallback } from 'react';
import Seo from '../components/SEO';
import ArrowPart from '../components/ArrowPart';
import WinMainPart from '../components/WinMainPart';
import MacMainPart from '../components/MacMainPart';
import TinyMainPart from '../components/TinyMainPart';
import NumPad from '../components/NumPad';
import * as css from '../styles/index.module.scss';

const IndexPage = () => {
  const [keyPressed, setKeyPressed] = useState([]);

  const addDetectedKey = useCallback(
    (event) => {
      event.preventDefault();
      setKeyPressed(keyPressed.filter((x) => x !== event.code));
      setTimeout(() => {
        setKeyPressed([...new Set([...keyPressed, event.code])]);
      }, 0);
    },
    [keyPressed]
  );

  useEffect(() => {
    document.addEventListener('keydown', addDetectedKey);
    return () => document.removeEventListener('keydown', addDetectedKey);
  }, [keyPressed, addDetectedKey]);

  return (
    <main className={css.main}>
      <Seo />

      <section className={css.keyboard_display}>
        {document.body.clientWidth < 500 ? (
          <div className={css.border_spaces}>
            <TinyMainPart keyPressed={keyPressed} css={css} />
          </div>
        ) : (
          <div className={css.border_spaces}>
            {typeof window !== 'undefined' &&
            (['iPad', 'iPhone'].includes(navigator.platform) ||
              navigator.platform.indexOf('Mac') > -1) ? (
              <MacMainPart keyPressed={keyPressed} css={css} />
            ) : (
              <WinMainPart keyPressed={keyPressed} css={css} />
            )}
          </div>
        )}

        <div className={css.keyboard_right_part}>
          <div className={css.border_spaces}>
            <ArrowPart keyPressed={keyPressed} css={css} />
          </div>

          <div className={css.border_spaces}>
            <NumPad keyPressed={keyPressed} css={css} />
          </div>
        </div>
      </section>

      <footer className={css.footer}>
        Built by{' '}
        <a className={css.link} href="https://dev.krsn.xyz">
          karson
        </a>
      </footer>
    </main>
  );
};

export default IndexPage;
