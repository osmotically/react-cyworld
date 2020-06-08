import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';
import { Alert } from 'antd';
import CyworldMiniHomeIntro from './CyworldMiniHomeIntro';
import CyworldMiniHomeLatestPost from './CyworldMiniHomeLatestPost';

function CyworldMiniHome() {
    const userInfo = useContext(UserInfo);
    let homeContent = <Alert
        message="Sign In"
        description="Please sign in to your information in your homepage."
        type="error"
        showIcon
    />;
    if (userInfo !== null) {
        homeContent = <>
            <CyworldMiniHomeIntro />
            <CyworldMiniHomeLatestPost />
        </>;
    }
    return (
        <div style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)',
        }}>
            {homeContent}
        </div>
    );
}

export default CyworldMiniHome;