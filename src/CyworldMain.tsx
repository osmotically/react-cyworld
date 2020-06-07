import React, { useState } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import { UserInfo } from './UserInfo';
import { Avatar, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import CyworldMiniHome from './CyworldMiniHome';
import CyworldLogin from './CyworldLogin';

const { Content, Footer, Sider } = Layout;

function CyworldMain() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>('homepage');
  const [userInfo, setUserInfo] = useState<ReactFacebookLoginInfo | null>(null);

  let content = (
    <UserInfo.Provider value={userInfo} >
      <CyworldMiniHome />
    </UserInfo.Provider>
  );
  if (menu === 'login') {
    content = (
      <CyworldLogin userInfo={userInfo} setUserInfo={setUserInfo} />
    );
  }
  console.log(collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu theme="dark" onClick={(e) => setMenu(e.key)} defaultSelectedKeys={['homepage']} mode="inline" >
          <div style={{ margin: '16px' }}>
            {userInfo === null ?
              <Avatar icon={<UserOutlined />} style={{ margin: '0 8px' }} /> :
              <Avatar src={String(userInfo?.picture?.data?.url)} style={{ margin: '0 8px' }} />}
            {!collapsed && `${userInfo === null ? 'Please sign in' : userInfo?.name}`}
          </div>
          <Menu.Item key="homepage" icon={<HomeOutlined />}>
            Mini Homepage
          </Menu.Item>
          <Menu.Item key="login" icon={userInfo === null ? <LoginOutlined /> : <LogoutOutlined />}>
            {`Sign ${userInfo === null ? 'In' : 'Out'}`}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {content}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Osmotically</Footer>
      </Layout>
    </Layout>
  );
}

export default CyworldMain;
