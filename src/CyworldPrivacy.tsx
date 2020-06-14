import React from 'react';
import { Alert, Card } from 'antd';

function CyworldPrivacy() {
  return (
    <Card title="Privacy Policy">
      <Alert
        style={{ marginBottom: '8px' }}
        message="Warning"
        description="React Cyworld is READ ONLY site. It does not collect any of your information."
        type="warning"
        showIcon
      />
      <ul>
        <li>
          React Cyworld is an open source website. You can check Typescript based ReactJS codebase on this
          <a
            href="https://github.com/osmotically/react-cyworld/tree/master"
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginLeft: '4px' }}>
            github link
          </a>.
        </li>
        <li>
          This website reads your information via FB GraphAPI; however, it does not have any ability (nor storage) to store your personal information.
        </li>
        <li>
          You can think of this mini-homepage as a FB skin.
        </li>
      </ul>
    </Card>
  );
}

export default CyworldPrivacy;