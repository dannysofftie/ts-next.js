import 'antd/dist/antd.css';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import 'public/styles/custom.css';
import { UserContextProvider } from 'store';

export default ({ Component, pageProps, router }: AppProps) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <UserContextProvider>
                <Component {...pageProps} key={router.route} />
            </UserContextProvider>
        </AnimatePresence>
    );
};
