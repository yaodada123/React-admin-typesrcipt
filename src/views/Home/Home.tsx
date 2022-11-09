import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                {/* 侧边栏 */}
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                {/* 右侧区域 */}
                <Layout className="site-layout">
                    {/* 头部 */}
                    <Header className="site-layout-background" style={{ paddingLeft: "16px" }} >
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                    </Header>
                    {/* 主内容区域 */}
                    <Content style={{ margin: '0 16px' }}>
                        
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    {/* 页尾内容 */}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                
            </Layout>
        </div>
    )
}



export default Home;