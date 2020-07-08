import { LogoutOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import Link from 'next/link';

export default () => (
    <Layout.Header style={{ position: 'sticky', top: 0, boxShadow: 'rgba(0,0,0,0.3) 0px 0px 10px', backgroundColor: 'white', zIndex: 9 }}>
        <Row justify='end' align='middle'>
            <Col span={22}>
                <Link href={`/profile`} as={`/profile`} passHref>
                    <a>Logo</a>
                </Link>
            </Col>
            <Col span={1}>
                Profile <UsergroupAddOutlined style={{ cursor: 'pointer' }} />
            </Col>
            <Col span={1}>
                Logout <LogoutOutlined style={{ cursor: 'pointer' }} />
            </Col>
        </Row>
    </Layout.Header>
);
