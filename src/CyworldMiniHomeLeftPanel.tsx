import React from 'react';
import CyworldMiniHomeLeftPanelPicture from './CyworldMiniHomeLeftPanelPicture';
import CyworldMiniHomeLeftPanelTodayIs from './CyworldMiniHomeLeftPanelTodayIs';
import CyworldMiniHomeLeftPanelIntro from './CyworldMiniHomeLeftPanelIntro';
import { Divider } from 'antd';

function CyworldMiniHomeLeftPanel() {
  return (
    <div style={{ textAlign: "center" }}>
      <CyworldMiniHomeLeftPanelPicture />
      <Divider style={{ marginTop: '12px', marginBottom: '4px' }} dashed />
      <CyworldMiniHomeLeftPanelTodayIs />
      <CyworldMiniHomeLeftPanelIntro />
    </div>
  );
}

export default CyworldMiniHomeLeftPanel;