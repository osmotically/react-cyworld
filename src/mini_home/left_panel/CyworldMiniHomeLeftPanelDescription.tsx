import React from 'react';
import { CaretRightFilled, CaretDownFilled, CaretUpFilled } from '@ant-design/icons';

function CyworldMiniHomeLeftPanelDescription() {
  const description = 'Add your description.';

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ minHeight: '200px' }}>
        {description}
      </div>
      <span style={{ color: '#f86704', marginRight: '2px' }}><CaretRightFilled /></span>
      <span style={{ marginRight: '16px' }}>Edit</span>
      <span style={{ color: '#f86704', marginRight: '2px' }}><CaretRightFilled /></span>
      <span>History</span>
      <span style={{ color: '#969696', position: 'absolute', right: '10%' }}>
        <CaretDownFilled />
        <CaretUpFilled />
      </span>
    </div>
  );
}

export default CyworldMiniHomeLeftPanelDescription;