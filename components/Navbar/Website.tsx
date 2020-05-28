import { Menu, Layout, Button } from 'antd';
import Link from 'next/link';

export default (props) => {
    // component logic

    return (
        <Layout.Header className='header'>
            <Link href='/' passHref>
                <a className='logo'>Logo</a>
            </Link>

            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[`${props.page}`]}>
                <Menu.Item key='1'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link href='/about'>
                        <a>About Us</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link href='/partnerships'>
                        <a>Partnerships</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='4' style={{ float: 'right' }}>
                    <Link href='/signin'>
                        <Button> Sign In</Button>
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};
