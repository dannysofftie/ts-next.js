import { Spin } from 'antd';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';

const SignOut = () => {
    useEffect(() => {
        localStorage.removeItem('account');
        localStorage.removeItem('token');

        window.location.href = '/';
    });

    return (
        <Fragment>
            <Head>
                <title>Processing ...</title>
            </Head>
            <section style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin size='large' />
            </section>
        </Fragment>
    );
};

export default SignOut;
