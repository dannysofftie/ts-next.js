import { DatabaseOutlined, SearchOutlined, UserAddOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Head from 'next/head';
import { FeaturedCard } from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Navbar/Website';
import { ThemeContext, UserContext } from '../store';

export default () => (
    <ThemeContext.Consumer>
        {(themeContext) => (
            <UserContext.Consumer>
                {(userContext) => (
                    <Layout.Content>
                        <Head>
                            <title>Development revamped</title>
                        </Head>
                        <Header page={1} />

                        {/* home page banner */}
                        <Row className='content-section' gutter={[15, 15]} align='middle'>
                            <Col span={8} offset={4}>
                                <Title level={1} className='custom-h1'>
                                    Experience the real power at your comfort
                                </Title>
                                <p className='description'>Real power unveiled. Get started in minutes, it takes less now than before. Product revamped</p>
                                <div>
                                    <Button size='large' shape='round'>
                                        Explore Options
                                    </Button>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img src='/images/full-screen-smartphone.png' alt='' />
                            </Col>
                        </Row>

                        {/* featured cards */}
                        <Row className='content-section' gutter={[20, 20]} align='middle'>
                            <Col span={24}>
                                <Title level={2}>Application features</Title>
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Membership Registration' icon={<UserAddOutlined style={{ fontSize: 80 }} />} description='Register your clients with ease, now simplified than ever' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Networking' icon={<UserSwitchOutlined style={{ fontSize: 80 }} />} description='Membership networking has never been easier. With this release ...' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Polls & Surveys' icon={<SearchOutlined style={{ fontSize: 80 }} />} description='Run & conduct your product surveys from within the application ...' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Business Intelligence' icon={<DatabaseOutlined style={{ fontSize: 80 }} />} description='Understand your data in a simple and precise way, we handle the complex stuff for you' />
                            </Col>
                        </Row>

                        {/* more information */}
                        <Row className='content-section' gutter={[15, 15]} align='middle'>
                            <Col span={8} offset={4}>
                                <Title level={1} className='custom-h1'>
                                    Experience the real power at your comfort
                                </Title>
                                <p className='description'>Real power unveiled. Get started in minutes, it takes less now than before. Product revamped</p>
                                <div>
                                    <Button size='large' shape='round'>
                                        Explore Options
                                    </Button>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img src='/images/full-screen-smartphone.png' alt='' />
                            </Col>
                        </Row>

                        {/* footer */}
                        <Footer />
                    </Layout.Content>
                )}
            </UserContext.Consumer>
        )}
    </ThemeContext.Consumer>
);
