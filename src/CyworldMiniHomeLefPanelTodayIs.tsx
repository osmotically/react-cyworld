import React from 'react';
import { LikeOutlined } from '@ant-design/icons';

function CyworldMiniHomeLefPanelTodayIs() {
  const todayIsMessage = '최고에요';

  return (
    <div style={{ border: '1px solid #cbcbcb', borderRadius: '8px', backgroundColor: 'white', padding: '4px 20px', marginBottom: '4px' }}>
      <span style={{ marginRight: '8px', color: '#229ed0', fontWeight: 'bold' }}>TODAY IS..</span>
      <LikeOutlined />
      {todayIsMessage}
    </div>
  );
}

export default CyworldMiniHomeLefPanelTodayIs;