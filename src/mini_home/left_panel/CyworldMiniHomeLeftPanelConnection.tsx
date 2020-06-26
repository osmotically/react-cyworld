import React, { useState } from 'react';
import { Menu, Select } from 'antd';
import { TeamOutlined, GroupOutlined } from '@ant-design/icons';
import CyworldConnectionType from '../../enum/CyworldConnectionType';

function CyworldMiniHomeLeftPanelConnection() {
  const [menu, setMenu] = useState<string>(CyworldConnectionType.DIRECT);

  return (
    <div style={{ textAlign: 'left' }}>
      <Menu
        onClick={(e) => setMenu(e.key)}
        selectedKeys={[menu]}
        mode="horizontal"
      >
        <Menu.Item key={CyworldConnectionType.DIRECT} icon={<TeamOutlined />}>
          Direct
        </Menu.Item>
        <Menu.Item key={CyworldConnectionType.CLUB} icon={<GroupOutlined />}>
          Club
        </Menu.Item>
      </Menu>
      <Select style={{ width: '100%' }} defaultValue="">
        <Select.Option value="">★일촌 파도타기</Select.Option>
        <Select.Option value="1">Friend 1</Select.Option>
        <Select.Option value="2">Friend 1</Select.Option>
      </Select>
    </div>
  );
}

export default CyworldMiniHomeLeftPanelConnection;