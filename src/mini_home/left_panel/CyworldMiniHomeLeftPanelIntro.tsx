import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

import styles from '../../Cyworld.module.css';

type IntroInfo = { birthday: string, gender: string, email: string, name: string };

function CyworldMiniHomeLeftPanelIntro() {
  const [loading, setLoading] = useState<boolean>(true);
  const [intro, setIntro] = useState<IntroInfo | null>(null);
  useEffect(() => {
    setLoading(true);
    if (intro === null) {
      FB.api(
        '/me',
        'get',
        { "fields": "birthday,gender, email, name" },
        function (
          response: IntroInfo,
        ) {
          setIntro(response);
        }
      );
    }
    setLoading(false);
  }, [intro]);

  return (
    loading ?
      <Spin /> :
      <div style={{ textAlign: 'left' }}>
        <p style={{ marginBottom: '2px' }}>
          <span style={{ color: '#30447a', fontWeight: 'bold', marginRight: '4px' }}>{intro?.name}</span>
          <span className={styles.homeLeftPanelIntroGender}>
            {intro?.gender === 'male' ? '♂' : '♀'}
          </span>
          <span style={{ fontSize: 'small' }}> {intro?.birthday}</span>
        </p>
        <p style={{ color: '#f86704', fontSize: 'small' }}>{intro?.email}</p>
      </div>
  );
}

export default CyworldMiniHomeLeftPanelIntro;