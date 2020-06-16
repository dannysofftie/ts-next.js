import { Layout } from 'antd';
import { DashboardFooter } from 'components/Footer';
import Header from 'components/Layouts/Includes/Header';
import Sider from 'components/Layouts/Includes/Sider';

export default ({ children }) => (
    <Layout>
        <Sider />
        <Layout>
            <Header />
            <Layout style={{ padding: '15px 24px 24px', minHeight: '100vh' }}>
                {/* page content */}
                <Layout.Content>{children}</Layout.Content>
                {/* end page content */}
            </Layout>
            <DashboardFooter />
        </Layout>
    </Layout>
);
