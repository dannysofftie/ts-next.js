import { Fragment } from 'react';
import { Layout } from 'antd';

export default () => (
    <Fragment>
        <Layout.Header style={{ position: 'sticky', top: 0, boxShadow: 'rgba(0,0,0,0.3) 0px 0px 20px' }}>{/* header here */}</Layout.Header>
    </Fragment>
);
