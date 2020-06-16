import { DashboardOutlined, LogoutOutlined, ProfileOutlined, SelectOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

export default () => {
    // component logic

    const onSidebarCollapse = () => {
        //
    };

    const onSidebarExpand = () => {
        //
    };

    return (
        <Layout.Sider width={200} style={{ minHeight: '100%', boxShadow: 'rgba(0,0,0,0.3) 0px 0px 20px' }} theme='dark' collapsible>
            <section style={{ padding: '20px 20px 50px' }}>
                <LogoutOutlined color='white' />
            </section>

            <Menu theme='dark' mode='inline' defaultSelectedKeys={['account']} defaultOpenKeys={['accountsettings']} style={{ height: '100%', borderRight: 0 }}>
                <Menu.Item icon={<DashboardOutlined />} key='account'>
                    <Link href='/account' as='/account'>
                        <a>Dashboard</a>
                    </Link>
                </Menu.Item>
                <Menu.SubMenu key='accountsettings' icon={<SelectOutlined />} title='Options'>
                    <Menu.Item key='profile' icon={<ProfileOutlined />}>
                        <Link href='/account/profile'>
                            <a>Profile</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='settings' icon={<SettingOutlined />}>
                        <Link href='/account/settings'>
                            <a>Settings</a>
                        </Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
};
