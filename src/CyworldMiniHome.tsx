import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';
import CyworldMiniHomeLatestPost from './CyworldMiniHomeLatestPost';

function CyworldMiniHome() {
    const userInfo = useContext(UserInfo);
    if (userInfo === null) {
        return <div>Please Log In First!</div>
    }
    return (
        <>
            <img src={String(userInfo?.picture?.data?.url)} alt="profile_image" />
            {userInfo?.name}
            <CyworldMiniHomeLatestPost />
        </>
    );
}

export default CyworldMiniHome;