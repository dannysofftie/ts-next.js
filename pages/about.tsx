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
                            <title>About Us</title>
                        </Head>
                        <Header page={1} />

                        {/* home page banner */}
                        <Row className='content-section' gutter={[15, 15]} align='middle'>
                            <Col span={8} offset={4}>
                                <Title level={1} className='custom-h1'>
                                    Started in 1912
                                </Title>
                                <p className='description'>We started as a small team, we have scaled to thousands, and we are still growing</p>
                                <div>
                                    <Button size='large' shape='round'>
                                        View Our History
                                    </Button>
                                </div>
                            </Col>
                            <Col span={12}>
                                <img src='/images/fashion-face-mask-mockup.png' alt='' />
                            </Col>
                        </Row>

                        {/* featured cards */}
                        <Row className='content-section' gutter={[20, 20]} align='middle'>
                            <Col span={24}>
                                <Title level={2}>How we got started</Title>
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Intial Registration' icon={<UserAddOutlined style={{ fontSize: 80 }} />} description='We registered our company in 1912' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Director Appointment' icon={<UserSwitchOutlined style={{ fontSize: 80 }} />} description='Our first director was appointed through a non-official way' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Board of Directors' icon={<SearchOutlined style={{ fontSize: 80 }} />} description='Company board of directory and management was formed to streamline operations' />
                            </Col>
                            <Col span={6}>
                                <FeaturedCard title='Ariticial Intelligence' icon={<DatabaseOutlined style={{ fontSize: 80 }} />} description='We made Ariticial Intelligence our main product to capture the market' />
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
                                <img src='/images/fashion-face-mask-mockup.png' alt='' />
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
