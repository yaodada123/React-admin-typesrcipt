import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
import MainMenu from "src/components/MainMenu/index"

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                {/* 侧边栏 */}
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <MainMenu></MainMenu>
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
                    <Content style={{ margin: '16px 16px 0 ' }}>
                        <Outlet></Outlet>
                    </Content>
                    {/* 页尾内容 */}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>

            </Layout>
        </div>
    )
}



export default Home;