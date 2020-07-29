import 'antd/dist/antd.css';
import { AnimatePresence } from 'framer-motion';
import { withApollo } from 'graphql/client';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'public/styles/custom.less';
import { Fragment } from 'react';
import { ThemeContextProvider, UserContextProvider } from 'store';
import { v4 as uuidv4 } from 'uuid';

const handleRouteChangeStart = (url: string) => {
    NProgress.start();
};

const routeChangeComplete = (url: string) => {
    NProgress.done();
};

const routeChangeError = (url: string) => {
    NProgress.done();
};

const App = ({ Component, pageProps, router }: AppProps) => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', routeChangeComplete);
    Router.events.on('routeChangeError', routeChangeError);

    return (
        <AnimatePresence exitBeforeEnter>
            <Fragment>
                <Head key={uuidv4()}>
                    <meta charSet='utf-8' />
                    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
                    <meta name='description' content='Next.js with TypeScript' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <title>Next.js with TypeScript</title>
                </Head>
                <ThemeContextProvider>
                    <UserContextProvider>
                        <Component {...pageProps} />
                    </UserContextProvider>
                </ThemeContextProvider>
            </Fragment>
        </AnimatePresence>
    );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

// @ts-ignore
export default withApollo(App);
