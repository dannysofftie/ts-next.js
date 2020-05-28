import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import '../assets/styles/custom.css';
import { UserContextProvider } from '../store';

export default ({ Component, pageProps }: AppProps) => {
    return (
        <UserContextProvider>
            <Component {...pageProps} />
        </UserContextProvider>
    );
};
