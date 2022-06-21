import { Layout, Menu } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import Home from '@/views/home/index'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const menuList = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '菜单一',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: '菜单二',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: '菜单三',
    },
  ]

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">logo</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuList}
          />
        </Sider>
        <Layout className="layout-container">
          <Header className="layout-header">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content className="layout-content">
            <Home></Home>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
