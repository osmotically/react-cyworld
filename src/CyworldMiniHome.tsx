import React, { useContext } from 'react';
import { UserInfo } from './UserInfo';
import { Alert, Col, Row } from 'antd';
import CyworldMiniHomeTitle from './CyworldMiniHomeTitle';
import CyworldMiniHomeToday from './CyworldMiniHomeToday';
import CyworldMiniHomeLeftPanel from './CyworldMiniHomeLeftPanel';
import CyworldMiniHomeLatestPost from './CyworldMiniHomeLatestPost';

import styles from './Cyworld.module.css';

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
        <div className={styles.homeBlue}>
            <div className={styles.homeDashWhite}>
                <div className={styles.homeInnerBorder}>
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
                            <div className={styles.homeLeftPanel}>
                                <div className={styles.homeLeftPanelInner}>
                                    <CyworldMiniHomeLeftPanel />
                                </div>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div className={styles.homeRightPanel}>
                                <CyworldMiniHomeLatestPost />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
}

export default CyworldMiniHome;