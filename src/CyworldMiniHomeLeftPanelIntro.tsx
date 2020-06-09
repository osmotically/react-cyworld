import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

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
      <>
        <p style={{ marginBottom: '2px' }}>
          <span style={{ color: 'blue', fontWeight: 'bold', marginRight: '4px' }}>{intro?.name}</span>
          <span style={{ color: 'grey', fontSize: 'small' }}>{`(${intro?.gender === 'male' ? '♂' : '♀'}) ${intro?.birthday}`} </span>
        </p>
        <p style={{ color: 'orange', fontSize: 'small' }}>{intro?.email}</p>
      </>
  );
}

export default CyworldMiniHomeLeftPanelIntro;