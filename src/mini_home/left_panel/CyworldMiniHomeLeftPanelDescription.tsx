import React, { useState } from 'react';
import { Modal, Input, List } from 'antd';
import { CaretRightFilled, CaretDownFilled, CaretUpFilled } from '@ant-design/icons';

type Descriptions = { description: string, savedTime: number };

function CyworldMiniHomeLeftPanelDescription() {
  const [isEditShown, setIsEditShown] = useState<boolean>(false);
  const [isHistoryShown, setIsHistoryShown] = useState<boolean>(false);
  const [descriptions, setDescriptions] = useState<Array<Descriptions>>(
    [{ description: 'Edit your description', savedTime: 1592194086 }]
  );
  const [editedDescription, setEditedDescription] = useState<string>(descriptions?.[0]?.description ?? '');

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ minHeight: '200px' }}>
        {descriptions?.[0]?.description}
      </div>
      <span style={{ color: '#f86704', marginRight: '2px' }}><CaretRightFilled /></span>
      <a style={{ color: 'black', marginRight: '16px' }} href="#" onClick={() => setIsEditShown(true)}>Edit</a>
      <span style={{ color: '#f86704', marginRight: '2px' }}><CaretRightFilled /></span>
      <a style={{ color: 'black' }} href="#" onClick={() => setIsHistoryShown(true)}>History</a>
      <span style={{ color: '#969696', position: 'absolute', right: '10%' }}>
        <CaretDownFilled />
        <CaretUpFilled />
      </span>
      <Modal
        title="Edit your description"
        visible={isEditShown}
        onOk={() => {
          const currentTime = Math.round((new Date()).getTime() / 1000);
          const newDescriptions = [{
            description: editedDescription, savedTime: currentTime
          }].concat(descriptions);
          setDescriptions(newDescriptions);
          setIsEditShown(false);
        }}
        onCancel={() => setIsEditShown(false)}
      >
        <Input.TextArea
          value={editedDescription}
          onChange={(event): void => { setEditedDescription(event.target.value) }}
          autoSize={{ minRows: 4, maxRows: 6 }}
        />
      </Modal>
      <Modal
        title="Description History"
        visible={isHistoryShown}
        onOk={() => setIsHistoryShown(false)}
        onCancel={() => setIsHistoryShown(false)}
      >
        <List
          size="small"
          dataSource={descriptions}
          renderItem={singleDescription =>
            <List.Item>
              <span style={{ marginRight: '12px' }}>{singleDescription.description}</span>
              <span style={{ color: 'grey' }}>{new Date(singleDescription.savedTime * 1000).toISOString()}</span>
            </List.Item>
          }
        />
      </Modal>
    </div>
  );
}

export default CyworldMiniHomeLeftPanelDescription;