import DashboardLayout from 'components/Layouts/Dashboard';
import { ThemeContext, UserContext } from 'store';
import { Breadcrumb, Card, Row, Col } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';

export default () => {
    return (
        <ThemeContext.Consumer>
            {(themeContext) => (
                <UserContext.Consumer>
                    {(userContext) => (
                        <Fragment>
                            <Head>
                                <title>Account | Profile</title>
                            </Head>

                            <DashboardLayout>
                                <Breadcrumb separator='>' style={{ marginBottom: 10 }}>
                                    <Breadcrumb.Item>
                                        <Link href='/account' passHref>
                                            <a>
                                                <DashboardOutlined /> Dashboard
                                            </a>
                                        </Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link href='/account/profile' passHref>
                                            <a>Profile</a>
                                        </Link>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                                <Row gutter={[10, 10]}>
                                    <Col span={6}>
                                        <Card>Profile 1</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card>Profile 2</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card>Profile 3</Card>
                                    </Col>
                                </Row>
                            </DashboardLayout>
                        </Fragment>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
};
