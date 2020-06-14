import React from 'react';
import CyworldMiniHomeLeftPanelPicture from './CyworldMiniHomeLeftPanelPicture';
import CyworldMiniHomeLeftPanelTodayIs from './CyworldMiniHomeLeftPanelTodayIs';
import CyworldMiniHomeLeftPanelIntro from './CyworldMiniHomeLeftPanelIntro';

import styles from './Cyworld.module.css';

function CyworldMiniHomeLeftPanel() {
  return (
    <div style={{ textAlign: "center" }}>
      <CyworldMiniHomeLeftPanelPicture />
      <div className={styles.homeLeftPanelDivider} />
      <CyworldMiniHomeLeftPanelTodayIs />
      <CyworldMiniHomeLeftPanelIntro />
    </div>
  );
}

export default CyworldMiniHomeLeftPanel;