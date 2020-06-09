import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';
import { Alert, Col, Row } from 'antd';
import CyworldMiniHomeTitle from './CyworldMiniHomeTitle';
import CyworldMiniHomeToday from './CyworldMiniHomeToday';
import CyworldMiniHomeLeftPanel from './CyworldMiniHomeLeftPanel';
import CyworldMiniHomeLatestPost from './CyworldMiniHomeLatestPost';

function CyworldMiniHome() {
    const userInfo = useContext(UserInfo);
    if (userInfo === null) {
        return <Alert
            message="Sign In"
            description="Please sign in to see your FB information in the homepage."
            type="error"
            showIcon
        />;
    }
    return (
        <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: '#4ab5d6', padding: '24px' }}>
            <div style={{ border: '1px dashed white', borderRadius: '16px', backgroundColor: '#4ab5d6', padding: '4px' }}>
                <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: 'white', padding: '20px 10px' }}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <CyworldMiniHomeToday />
                        </Col>
                        <Col span={18}>
                            <CyworldMiniHomeTitle />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: '#e6eeee', padding: '15px 10px' }}>
                                <div style={{ border: '1px solid white', borderRadius: '8px', backgroundColor: 'white', padding: '10px 20px', minHeight: '700px' }}>
                                    <CyworldMiniHomeLeftPanel />
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div style={{ border: '1px solid', borderRadius: '8px', backgroundColor: 'white', padding: '10px 20px', minHeight: '732px' }}>
                                <CyworldMiniHomeLatestPost />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default CyworldMiniHome;