import { MailOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Layout, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

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

const ResetPassword = () => {
    const [FormInstance] = Form.useForm();

    return (
        <Fragment>
            <Head>
                <title>Reset your password</title>
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
                                    <Button type='primary'>
                                        <Link href='/signin' passHref>
                                            <a> Sign In</a>
                                        </Link>
                                    </Button>
                                </section>
                            </Col>
                            <Col xs={{ span: 20 }} md={{ span: 12 }} style={{ minHeight: '60vh' }}>
                                <section style={{ padding: 60 }}>
                                    <Divider orientation='left'>Request a password reset</Divider>
                                    <p>We will send you an email with a password reset link. Check your email in 5 minutes</p>
                                    <Form form={FormInstance} layout='vertical' name='signupform'>
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

                                        <Row>
                                            <Col sm={{ span: 24 }} md={{ span: 14 }}>
                                                Encountered error? &nbsp;
                                                <Link href='/signin' passHref>
                                                    <a>Help</a>
                                                </Link>
                                            </Col>
                                            <Col sm={{ span: 24 }} md={{ span: 10 }}>
                                                <Form.Item>
                                                    <Button htmlType='submit' size='middle' type='primary'>
                                                        Reset Password
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
    );
};

export default ResetPassword;
