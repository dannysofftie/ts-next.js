import { DashboardOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Col, Row } from 'antd';
import DashboardLayout from 'components/Layouts/Dashboard';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { initApolloClient } from 'graphql/client';

const Account = () => {
    return (
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
    );
};

Account.getInitialProps = (ctx) => {
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

export default Account;
