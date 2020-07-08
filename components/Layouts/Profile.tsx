import { Layout } from 'antd';
import Header from 'components/Layouts/Includes/ProfileHeader';
import Sider from 'components/Layouts/Includes/ProfileSider';

export default ({ children }) => {
    //

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Layout.Content style={{ padding: '0 50px' }}>
                <Layout>
                    <Sider />

                    <Layout.Content style={{ padding: 50 }}>{children}</Layout.Content>
                </Layout>
            </Layout.Content>
        </Layout>
    );
};
