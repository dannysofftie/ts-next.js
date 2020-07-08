import { DashboardOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Col, Row } from 'antd';
import DashboardLayout from 'components/Layouts/Dashboard';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { initApolloClient } from 'graphql/client';

const Settings = () => {
    return (
        <Fragment>
            <Head>
                <title>Account | Settings</title>
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
                        <Link href='/account/settings' passHref>
                            <a>Settings</a>
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={[10, 10]}>
                    <Col span={6}>
                        <Card>Setting 1</Card>
                    </Col>
                    <Col span={6}>
                        <Card>Setting 2</Card>
                    </Col>
                    <Col span={6}>
                        <Card>Setting 3</Card>
                    </Col>
                </Row>
            </DashboardLayout>
        </Fragment>
    );
};

Settings.getInitialProps = (ctx) => {
    // fetch data and return
    const apolloClient = initApolloClient();

    // const initialState = apolloClient.query({
    //     query: gql`
    //         query data {
    //             name
    //         }
    //     `,
    // });

    return {
        requiresAuth: true,
        props: {
            // initialState,
        },
    };
};

export default Settings;
