import { DashboardOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Col, Row } from 'antd';
import ProfileLayout from 'components/Layouts/Profile';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Profile: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Profile | Dashboard</title>
            </Head>

            <ProfileLayout>
                <Breadcrumb separator='>' style={{ marginBottom: 10 }}>
                    <Breadcrumb.Item>
                        <Link href='/profile' passHref>
                            <a>
                                <DashboardOutlined /> Profile
                            </a>
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <Row gutter={[10, 10]}>
                    <Col span={6}>
                        <Card>Statistics</Card>
                    </Col>
                    <Col span={6}>
                        <Card>Account</Card>
                    </Col>
                    <Col span={6}>
                        <Card>Sales</Card>
                    </Col>
                </Row>
            </ProfileLayout>
        </Fragment>
    );
};

Profile.getInitialProps = (ctx) => {
    return {
        requiresAuth: true,
    };
};

export default Profile;
