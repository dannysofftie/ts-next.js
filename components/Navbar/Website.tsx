import { Layout, Menu, Row, Col } from 'antd';
import Link from 'next/link';

export default (props) => {
    // component logic

    return (
        <Row justify='space-between' align='middle' className='header'>
            <Col span={5}>
                <Link href='/' passHref>
                    <a className='logo'>Logo</a>
                </Link>
            </Col>
            <Col span={15}>
                <Menu mode='horizontal' style={{ background: 'transparent', border: 'none' }} defaultSelectedKeys={[`${props.page}`]}>
                    <Menu.Item key='2'>
                        <Link href='/about'>
                            <a>About Us</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Link href='/signin'>
                            <a>Sign In</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <Link href='/account'>
                            <a>Dashboard</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};
