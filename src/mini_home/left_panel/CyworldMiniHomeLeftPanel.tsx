import React from 'react';
import CyworldMiniHomeLeftPanelPicture from './CyworldMiniHomeLeftPanelPicture';
import CyworldMiniHomeLeftPanelTodayIs from './CyworldMiniHomeLeftPanelTodayIs';
import CyworldMiniHomeLeftPanelIntro from './CyworldMiniHomeLeftPanelIntro';
import CyworldMiniHomeLeftPanelDescription from './CyworldMiniHomeLeftPanelDescription';
import CyworldMiniHomeLeftPanelConnection from './CyworldMiniHomeLeftPanelConnection';

import styles from '../../Cyworld.module.css';

function CyworldMiniHomeLeftPanel() {
  return (
    <div style={{ textAlign: "center" }}>
      <CyworldMiniHomeLeftPanelPicture />
      <div className={styles.homeLeftPanelDivider} style={{ marginTop: '12px', marginBottom: '12px' }} />
      <CyworldMiniHomeLeftPanelTodayIs />
      <CyworldMiniHomeLeftPanelDescription />
      <div className={styles.homeLeftPanelDivider} style={{ marginBottom: '24px' }} />
      <CyworldMiniHomeLeftPanelIntro />
      <CyworldMiniHomeLeftPanelConnection />
    </div>
  );
}

export default CyworldMiniHomeLeftPanel;