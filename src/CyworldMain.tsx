import React, { useState } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import './App.css';
import { UserInfo } from './UserInfo';
import CyworldUser from './CyworldUser';
import CyworldLogin from './CyworldLogin';

function CyworldMain() {
  const [userInfo, setUserInfo] = useState<ReactFacebookLoginInfo | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <CyworldLogin userInfo={userInfo} setUserInfo={setUserInfo} />
        <UserInfo.Provider value={userInfo} >
          <CyworldUser />
        </UserInfo.Provider>
      </header>
    </div>
  );
}

export default CyworldMain;
