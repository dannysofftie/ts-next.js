import { FacebookFilled, GoogleOutlined, LockOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Layout, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    const router = useRouter();

    const [FormInstance] = Form.useForm();

    const signinUser = async (values) => {
        // make API request to sign in user
        const user = {
            id: '518yr8hu94hgng438juji4ijf32',
            email: values['email'],
            password: values['password'],
            name: 'Jessica Pearson',
            avatar: '/images/icons8-user-80.png',
            token: '55236667980032ih4unr08uhyfrmkvfoijuhinjml3908rhunviki39058uhyi4ki.98y438f9ruey7huji0uyhnfir8g.u7y6537ur9878gyhbiu3ghybnjf2',
        };

        return user;
    };

    const onFinishFailed = (error) => {
        console.log(error);
    };

    return (
        <ThemeContext.Consumer>
            {(themeContext) => (
                <UserContext.Consumer>
                    {(userContext) => (
                        <Fragment>
                            <Head>
                                <title>Sign in to your account</title>
                            </Head>
                            {/* <Header page={1} /> */}
                            <Layout.Content
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Row justify='center' align='middle' style={{ minHeight: '80vh' }}>
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <section>
                                            <Link href='/'>
                                                <a>Product</a>
                                            </Link>
                                        </section>
                                    </Col>
                                    <Col sm={{ span: 22 }} md={{ span: 18 }} lg={{ span: 14 }}>
                                        <Row style={formParentStyle} className='hoverable'>
                                            <Col xs={{ span: 0 }} md={{ span: 12 }} className='brown-linear-bg' order={2}>
                                                <section style={{ ...infoBlockStyle, flexDirection: 'column' }}>
                                                    <Title level={1} className='text-white'>
                                                        Hello friend!
                                                    </Title>
                                                    <p>To keep connected with us, create an account to get started</p>
                                                    <Button type='ghost' shape='round' size='large'>
                                                        <Link href='/signup' passHref>
                                                            <a>Sign Up</a>
                                                        </Link>
                                                    </Button>
                                                </section>
                                            </Col>
                                            <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ minHeight: '60vh' }} order={1}>
                                                <section style={{ padding: 20 }}>
                                                    <Divider orientation='left'>Sign In to your Account</Divider>
                                                    <section style={{ padding: '40px 0px', display: 'flex', justifyContent: 'space-around' }}>
                                                        <Button shape='circle' icon={<FacebookFilled />} type='ghost' size='large'></Button>
                                                        <Button shape='circle' icon={<GoogleOutlined />} type='ghost' size='large'></Button>
                                                        <Button shape='circle' icon={<TwitterOutlined />} type='ghost' size='large'></Button>
                                                    </section>
                                                    <Form
                                                        form={FormInstance}
                                                        layout='vertical'
                                                        name='signinform'
                                                        initialValues={{ remember: true }}
                                                        onFinish={async (values) => {
                                                            const response = await signinUser(values);
                                                            // on successfull sign in, we receive user details and an auth token

                                                            if (!response.token) {
                                                                // throw an error message, user does not exist, or wrong password
                                                                return false;
                                                            }

                                                            localStorage.setItem('token', response.token);

                                                            // remove token from response
                                                            delete response.token;

                                                            // write user account details to localStorage for persistence
                                                            localStorage.setItem('account', JSON.stringify(response, null, 2));

                                                            // update context
                                                            userContext.dispatch({
                                                                type: 'SIGNIN_USER',
                                                                payload: {
                                                                    authenticated: true,
                                                                    token: localStorage.getItem('token'),
                                                                    user: response,
                                                                },
                                                            });

                                                            // redirect to dashboard
                                                            return router.push('/account');
                                                        }}
                                                        onFinishFailed={onFinishFailed}
                                                    >
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
                                                            <Col xs={{ span: 24 }} md={{ span: 19 }}>
                                                                Forgot password? &nbsp;
                                                                <Link href='/reset-password' passHref>
                                                                    <a>Reset</a>
                                                                </Link>
                                                            </Col>
                                                            <Col xs={{ span: 24 }} md={{ span: 5 }}>
                                                                <Form.Item>
                                                                    <Button htmlType='submit' size='middle' shape='round' className='brown-linear-bg'>
                                                                        Sign In
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
