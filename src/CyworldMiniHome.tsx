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
        <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: '#4ab5d6', padding: '24px 24px 24px 24px' }}>
            <div style={{ border: '1px dashed white', borderRadius: '16px', backgroundColor: '#4ab5d6', padding: '4px 4px 4px 4px' }}>
                <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: 'white', padding: '30px 10px 20px 10px' }}>
                    {homeContent}
                </div>
            </div>
        </div>
    );
}

export default CyworldMiniHome;