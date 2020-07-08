import { Layout, Menu } from 'antd';
import { ClientSiderMenuItems } from 'components/Layouts/Menu';
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
        <Layout.Sider width={200} style={{ minHeight: '100%' }} theme='light'>
            <section style={{ padding: '20px 20px 50px' }}>
                <Link href={`/profile`} as={`/profile`} passHref>
                    <a>User name</a>
                </Link>
                <p>+254 720 111 111</p>
            </section>

            <Menu theme='light' style={{ minHeight: '100%', borderRight: 0 }} mode='inline' defaultSelectedKeys={['account']} defaultOpenKeys={['accountsettings']}>
                {ClientSiderMenuItems.map((item) => {
                    // manipulate items here
                    return (
                        <Menu.ItemGroup key={item.key} title={item.title}>
                            {item.items.map((subItem) => {
                                // manipulate sub menu items here
                                return (
                                    <Menu.Item>
                                        <Link passHref as={subItem.link} href={subItem.link}>
                                            <a>
                                                {subItem.icon} <span>{subItem.text}</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                );
                            })}
                        </Menu.ItemGroup>
                    );
                })}
            </Menu>
        </Layout.Sider>
    );
};
