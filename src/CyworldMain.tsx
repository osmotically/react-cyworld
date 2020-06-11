import React, { useState } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import { UserInfo } from './UserInfo';
import { Avatar, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import CyworldNavItem from './enum/CyworldNav';
import CyworldMiniHome from './CyworldMiniHome';
import CyworldLogin from './CyworldLogin';

const { Content, Footer, Sider } = Layout;

function CyworldMain() {
  const params = new URLSearchParams(window.location.search);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>(params.get('menu') ?? CyworldNavItem.HOMEPAGE);
  const [userInfo, setUserInfo] = useState<ReactFacebookLoginInfo | null>(null);

  let content = (
    <UserInfo.Provider value={userInfo} >
      <CyworldMiniHome />
    </UserInfo.Provider>
  );
  if (menu === CyworldNavItem.LOGIN) {
    content = (
      <CyworldLogin userInfo={userInfo} setUserInfo={setUserInfo} />
    );
  } else if (menu === CyworldNavItem.PRIVACY) {
    content = (
      <>PRIVACY</>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu theme="dark" onClick={(e) => {
          setMenu(e.key);
          params.set('menu', e.key);
          window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        }} defaultSelectedKeys={[menu]} mode="inline" >
          <div style={{ margin: '16px' }}>
            {userInfo === null ?
              <Avatar icon={<UserOutlined />} style={{ margin: '0 8px' }} /> :
              <Avatar src={String(userInfo?.picture?.data?.url)} style={{ margin: '0 8px' }} />}
            {!collapsed && `${userInfo === null ? 'Please sign in' : userInfo?.name}`}
          </div>
          <Menu.Item key={CyworldNavItem.HOMEPAGE} icon={<HomeOutlined />}>
            Mini Homepage
          </Menu.Item>
          <Menu.Item key={CyworldNavItem.PRIVACY} icon={<WarningOutlined />}>
            Privacy Policy
          </Menu.Item>
          <Menu.Item key={CyworldNavItem.LOGIN} icon={userInfo === null ? <LoginOutlined /> : <LogoutOutlined />}>
            {`Sign ${userInfo === null ? 'In' : 'Out'}`}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{
          backgroundColor: '#737373',
          backgroundSize: '20px 20px',
          backgroundImage: 'linear-gradient(to right, #8b9192 1px, transparent 1px), linear-gradient(to bottom, #8b9192 1px, transparent 1px)',
        }}>
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
