import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

type ProfileInfo = { data: { height: number, url: string, width: number } };

function CyworldMiniHomeLeftPanelPicture() {
  const [loading, setLoading] = useState<boolean>(true);
  const [pictureURI, setPictureURI] = useState<string>('');
  useEffect(() => {
    setLoading(true);
    if (pictureURI === '') {
      FB.api(
        '/me/picture',
        'get',
        { "height": "320", "redirect": "false" },
        function (response: ProfileInfo) {
          setPictureURI(String(response?.data?.url));
        }
      );
    }
    setLoading(false);
  }, [pictureURI]);

  return (
    loading ? <Spin /> : <img alt="profile_pic" src={pictureURI} width="250" height="250" />
  );
}

export default CyworldMiniHomeLeftPanelPicture;