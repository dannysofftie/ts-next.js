import { Layout } from 'antd';
import { Fragment } from 'react';
import Header from '../components/Navbar/Website';
import { UserContext } from '../store';
import { ThemeContext } from '../store/theme.context.';

export default () => (
    <ThemeContext.Consumer>
        {(themeContext) => (
            <UserContext.Consumer>
                {(userContext) => (
                    <Fragment>
                        <Header page={1} />
                        <Layout.Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Businesses trust us
                        </Layout.Content>
                    </Fragment>
                )}
            </UserContext.Consumer>
        )}
    </ThemeContext.Consumer>
);
