// 主菜单内容抽离
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// type MenuItem = Required<MenuProps>['items'][number];
type MenuItem = { label: string, key: string, icon?: React.ReactNode, children?: MenuItem[] }
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
    getItem('栏目 1', '/page1', <PieChartOutlined />),
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('栏目 3', '/page3', <UserOutlined />, [
        getItem('栏目 301', '/page301'),
        getItem('栏目 302', '4'),
        getItem('栏目 303', '5'),
    ]),
    getItem('栏目 4', 'sub2', <TeamOutlined />, [getItem('栏目 401', '6'), getItem('栏目 402', '8')]),
    getItem('栏目 5', '9', <FileOutlined />),
];

const Comp = () => {
    const rootSubmenuKeys = ['sub1', 'sub2'];
    const currentRoute = useLocation();
    let currentKey : string = "";
    // 选中子菜单栏刷新，实现父组件展开显示逻辑处理
    // 代码逻辑：循环查找items数组中元素children属性中key值是否与路径pathname相对应，
    // 若对应，则将对应父菜单栏key值加入到openKey中
    for (let i = 0; i < items.length; i++) {
        if (items[i]["children"] && items[i]["children"]?.find((obj: { key: string }) => obj.key == currentRoute.pathname)) {
            currentKey = items[i].key;
        }
    }
    const [openKeys, setOpenKeys] = useState([currentKey]);
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };


    const navigateTo = useNavigate();
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    return (
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} openKeys={openKeys}
            onOpenChange={onOpenChange} />
    )
}

export default Comp;