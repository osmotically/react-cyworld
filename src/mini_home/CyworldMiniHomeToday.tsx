import React from 'react';

function CyworldMiniHomeToday() {
  // Replace these conts with server side numbers
  const todayVisit = 0;
  const totalVisit = 9999;
  return (
    <div style={{ textAlign: 'center', width: '100%', position: 'absolute', bottom: '5px' }}>
      <span style={{ marginRight: '4px' }}>TODAY</span>
      <span style={{ marginRight: '4px', color: 'red' }}>{todayVisit}</span>
      {`| TOTAL ${totalVisit}`}
    </div>
  );
}

export default CyworldMiniHomeToday;