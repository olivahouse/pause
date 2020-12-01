import React, { useEffect, useState } from 'react';
import { parse } from 'query-string';
import { Button } from '@olivahouse/ui';

import '@olivahouse/ui/lib/styles.css';

import { Pane } from './Pane';
import { BackButtonDisabler } from './BackButtonDisabler';
import { CloseWindowWarner } from './CloseWindowWarner';
import { getStrings } from './utils/getStrings';
import styles from './styles.module.css';

const EN = 'en';

const languageCode = parse(window.location.search).language || EN;
const memberId = parse(window.location.search).memberId;
const email = parse(window.location.search).email;

const strings = getStrings(languageCode);

const App = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleMessage = ({ data, origin }) => {
      if (origin !== 'https://form.typeform.com') return;

      if (data && data.type === 'form-submit') {
          setStep(2);
      }
    }

    window.addEventListener('message', handleMessage)

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (step !== 2) return;

    const asyncPostPause = async () => {
      await fetch(
        'https://mrazu50nsj.execute-api.us-east-1.amazonaws.com/dev/pause',
        {
          method: 'POST',
          body: JSON.stringify({ email, languageCode }),
        }
      );
    }

    asyncPostPause();
  }, [step]);

  return (
    <div className={styles.viewport}>
      <img
        className={styles.logo}
        src="https://oliva-static-assets.s3.amazonaws.com/5f4625e7bfab83f32de77fe9_Oliva-logo-svg.svg"
        alt="logo"
      />
      <div className={styles.panes}>
        <Pane showOnStep={0} step={step}>
          <div className={styles.content}>
            <p>{strings.THERAPY_IS_A_UNIQUE_AND_ONGOING}</p>
            <p>{strings.BEFORE_YOU_GO}</p>
            <Button onClick={() => setStep(1)}>{strings.GIVE_FEEDBACK}</Button>
          </div>
        </Pane>
        <Pane showOnStep={1} step={step}>
          <iframe
            className={styles.typeform}
            src={languageCode === EN
              ? `https://form.typeform.com/to/AXRW1j9X#memberid=${memberId}`
              : `https://form.typeform.com/to/RYe5jOQg#memberid=${memberId}`
            }
            title="form"
          />
        </Pane>
        <Pane showOnStep={2} step={step}>
          <div className={styles.content}>
            <p>{strings.THANKS_YOUR_FEEDBACK_DIRECTLY_HELPS}</p>
            <p>{strings.WELL_LET_YOUR_THERAPIST_KNOW}</p>
            <p>{strings.IF_YOU_EVER_NEED_US}</p>
            <img src="https://oliva-static-assets.s3.amazonaws.com/step4%402x.png" alt="At the helm"/>
          </div>
        </Pane>
      </div>
      <BackButtonDisabler />
      <CloseWindowWarner step={step} />
    </div>
  );
}

export default App;
