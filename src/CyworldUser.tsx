import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';

function CyworldUser() {
    const userInfo = useContext(UserInfo);
    if (userInfo === null) {
        return <div>Please Log In First!</div>
    }

    return (
        <div>{userInfo?.id}</div>
    );
}

export default CyworldUser;