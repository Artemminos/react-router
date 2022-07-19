import React from 'react';
import {Link} from 'react-router-dom'
import {Menu as AntMenu} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

const items = [
    {
        key: 'home',
        icon: <PieChartOutlined/>,
        label: <Link to={'/'}>main</Link>,

    },
    {
        key: 'market',
        icon: <DesktopOutlined/>,
        label: <Link to={'market'}>market</Link>,

    },
    {
        key: 'cart',
        icon: <UserOutlined/>,
        label: <Link to={'cart'}>cart</Link>,

    },
];
const Menu = () => {
    return (
        <AntMenu onSelec theme="dark" mode="inline" items={items}/>
    );
};

export default Menu;