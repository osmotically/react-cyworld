import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

type Props = {
  userInfo: ReactFacebookLoginInfo | null,
  setUserInfo: (userInfo: ReactFacebookLoginInfo | null) => void,
};

function CyworldLogin(props: Props) {
  const loginCallback = (userInfo: ReactFacebookLoginInfo) => {
    props.setUserInfo(userInfo);
  };

  if (props.userInfo !== null) {
    return (
      <button onClick={() => { props.setUserInfo(null) }}>Log Out</button>
    );
  }

  return (
    <FacebookLogin
      appId="2600949710193273"
      autoLoad={false}
      size="small"
      fields="name,picture"
      scope="public_profile,user_posts"
      callback={loginCallback}
    />
  );
}

export default CyworldLogin;
