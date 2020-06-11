import React from 'react';
import CyworldMiniHomeLeftPanelPicture from './CyworldMiniHomeLeftPanelPicture';
import CyworldMiniHomeLefPanelTodayIs from './CyworldMiniHomeLefPanelTodayIs';
import CyworldMiniHomeLeftPanelIntro from './CyworldMiniHomeLeftPanelIntro';
import { Divider } from 'antd';

function CyworldMiniHomeLeftPanel() {
  return (
    <div style={{ textAlign: "center" }}>
      <CyworldMiniHomeLeftPanelPicture />
      <Divider style={{ marginTop: '12px', marginBottom: '4px' }} dashed />
      <CyworldMiniHomeLefPanelTodayIs />
      <CyworldMiniHomeLeftPanelIntro />
    </div>
  );
}

export default CyworldMiniHomeLeftPanel;