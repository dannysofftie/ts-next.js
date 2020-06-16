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
                                <title>Account | Dashboard</title>
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
                            </DashboardLayout>
                        </Fragment>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
};
