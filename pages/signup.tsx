import { AccountBookOutlined, FacebookFilled, GoogleOutlined, LockOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Layout, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import { ThemeContext, UserContext } from 'store';

const formParentStyle = {
    border: '0.1px solid rgba(0,0,0,0.1)',
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
};

const infoBlockStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
};

export default () => {
    const [FormInstance] = Form.useForm();

    return (
        <ThemeContext.Consumer>
            {(themeContext) => (
                <UserContext.Consumer>
                    {(userContext) => (
                        <Fragment>
                            <Head>
                                <title>Sign up to create your account</title>
                            </Head>
                            {/* <Header page={1} /> */}
                            <Layout.Content
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Row justify='space-around' align='middle' style={{ minHeight: '80vh' }}>
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <section>
                                            <Link href='/'>
                                                <a>Product</a>
                                            </Link>
                                        </section>
                                    </Col>
                                    <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 14 }}>
                                        <Row style={formParentStyle} className='hoverable'>
                                            <Col xs={{ span: 0 }} md={{ span: 12 }} className='brown-linear-bg'>
                                                <section style={{ ...infoBlockStyle, flexDirection: 'column' }}>
                                                    <Title level={1} className='text-white'>
                                                        Welcome Back!
                                                    </Title>
                                                    <p>To keep connected with us, sign in with your personal info</p>
                                                    <Button type='ghost' shape='round' size='large'>
                                                        <Link href='/signin' passHref>
                                                            <a> Sign In</a>
                                                        </Link>
                                                    </Button>
                                                </section>
                                            </Col>
                                            <Col xs={{ span: 20 }} md={{ span: 12 }} style={{ minHeight: '60vh' }}>
                                                <section style={{ padding: 60 }}>
                                                    <Divider orientation='left'>Sign Up to create your Account</Divider>
                                                    <section style={{ padding: '40px 0px', display: 'flex', justifyContent: 'space-around' }}>
                                                        <Button shape='circle' icon={<FacebookFilled />} type='ghost' size='large'></Button>
                                                        <Button shape='circle' icon={<GoogleOutlined />} type='ghost' size='large'></Button>
                                                        <Button shape='circle' icon={<TwitterOutlined />} type='ghost' size='large'></Button>
                                                    </section>
                                                    <Form form={FormInstance} layout='vertical' name='signupform'>
                                                        <Form.Item
                                                            name='fullname'
                                                            rules={[
                                                                {
                                                                    type: 'string',
                                                                    message: 'Name is required',
                                                                    required: true,
                                                                },
                                                            ]}
                                                        >
                                                            <Input type='text' autoCapitalize='words' placeholder='Jane Doe' prefix={<AccountBookOutlined />} />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name='phone'
                                                            rules={[
                                                                {
                                                                    type: 'number',
                                                                    message: 'Phone is required',
                                                                    required: true,
                                                                },
                                                            ]}
                                                        >
                                                            <Input type='tel' placeholder='254 700 000 000' prefix={<PhoneOutlined />} />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name='email'
                                                            rules={[
                                                                {
                                                                    type: 'email',
                                                                    message: 'Email is required',
                                                                    required: true,
                                                                },
                                                            ]}
                                                        >
                                                            <Input type='email' placeholder='someone@example.com' prefix={<MailOutlined />} />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name='password'
                                                            rules={[
                                                                {
                                                                    type: 'string',
                                                                    message: 'Password is required',
                                                                    required: true,
                                                                },
                                                            ]}
                                                        >
                                                            <Input type='password' placeholder='*********' prefix={<LockOutlined />} />
                                                        </Form.Item>
                                                        <Row>
                                                            <Col sm={{ span: 24 }} md={{ span: 19 }}>
                                                                Already have an account? &nbsp;
                                                                <Link href='/signin' passHref>
                                                                    <a>Sign In</a>
                                                                </Link>
                                                            </Col>
                                                            <Col sm={{ span: 24 }} md={{ span: 5 }}>
                                                                <Form.Item>
                                                                    <Button htmlType='submit' size='large' type='ghost' shape='round' className='brown-linear-bg'>
                                                                        Sign Up
                                                                    </Button>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </section>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Layout.Content>
                        </Fragment>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
};
