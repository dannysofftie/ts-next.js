import { useRouter } from 'next/router';
import { useEffect, Fragment } from 'react';
import { Spin } from 'antd';
import Head from 'next/head';

export default function SignOut() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('account');
        localStorage.removeItem('token');
        router.push('/');
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
}
