import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';
import { Alert } from 'antd';
import CyworldMiniHomeIntro from './CyworldMiniHomeIntro';
import CyworldMiniHomeLatestPost from './CyworldMiniHomeLatestPost';

function CyworldMiniHome() {
    const userInfo = useContext(UserInfo);
    if (userInfo === null) {
        return <Alert
            message="Sign In"
            description="Please sign in to your information in your homepage."
            type="error"
            showIcon
        />;
    }
    return (
        <>
            <CyworldMiniHomeIntro />
            <CyworldMiniHomeLatestPost />
        </>
    );
}

export default CyworldMiniHome;