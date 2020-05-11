import React, { useState } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import './App.css';
import { UserInfo } from './UserInfo';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import CyworldMiniHome from './CyworldMiniHome';
import CyworldLogin from './CyworldLogin';

const { Header, Content, Footer, Sider } = Layout;

function CyworldMain() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>('login');
  const [userInfo, setUserInfo] = useState<ReactFacebookLoginInfo | null>(null);

  let content = (
    <CyworldLogin userInfo={userInfo} setUserInfo={setUserInfo} />
  );
  if (menu === 'homepage') {
    content = (
      <UserInfo.Provider value={userInfo} >
        <CyworldMiniHome />
      </UserInfo.Provider>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu theme="dark" onClick={(e) => setMenu(e.key)} defaultSelectedKeys={['login']} mode="inline" >
          <div className="logo" />
          <Menu.Item key="login" icon={userInfo === null ? <LoginOutlined /> : <LogoutOutlined />}>
            {`Sign ${userInfo === null ? 'In' : 'Out'}`}
          </Menu.Item>
          <Menu.Item key="homepage" icon={<HomeOutlined />}>
            Mini Homepage
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
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
