import { Fragment } from 'react';
import Header from '../components/Navbar/Website';
import { Layout } from 'antd';

export default () => {
    // component logic

    return (
        <Fragment>
            <Header page={3} />
            <Layout.Content
                className='site-layout-background'
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                Our partners
            </Layout.Content>
        </Fragment>
    );
};
