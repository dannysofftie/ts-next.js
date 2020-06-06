import { Fragment } from 'react';
import { Row, Col, Divider } from 'antd';
import Link from 'next/link';
import Title from 'antd/lib/typography/Title';

export default () => (
    <Fragment>
        <Row gutter={[10, 10]} className='website-footer'>
            <Col span={6} className='footer-links'>
                <Title level={3}>Company</Title>
                <Link href='/' passHref>
                    <a>Logo</a>
                </Link>
                Asterisk &copy; {new Date().getFullYear()}
            </Col>
            <Col span={6} className='footer-links'>
                <Title level={3}>Links</Title>
                <Link href='/' passHref>
                    <a>Products</a>
                </Link>
                <Link href='/' passHref>
                    <a>Services</a>
                </Link>
                <Link href='/' passHref>
                    <a>Announcements</a>
                </Link>
                <Link href='/' passHref>
                    <a>Our Blog</a>
                </Link>
            </Col>
            <Col span={6} className='footer-links'>
                <Title level={3}>Social</Title>
                <Link href='/' passHref>
                    <a>Facebook</a>
                </Link>
                <Link href='/' passHref>
                    <a>Twitter</a>
                </Link>
                <Link href='/' passHref>
                    <a>Instagram</a>
                </Link>
                <Link href='/' passHref>
                    <a>Linked In</a>
                </Link>
            </Col>

            <Col span={6} className='footer-links'>
                <Title level={3}>Help Centre</Title>
                <Link href='/' passHref>
                    <a>FAQ</a>
                </Link>
                <Link href='/' passHref>
                    <a>Contact Us</a>
                </Link>
            </Col>

            {/* bottom divider for more information */}
            <Divider orientation='left'>Asterisk &copy; {new Date().getFullYear()}. Powered by You</Divider>
        </Row>
    </Fragment>
);
