import { Layout } from 'antd';
import { Fragment } from 'react';
import Header from '../../components/Navbar/Website';
import { ThemeContext, UserContext } from '../../store';

export default () => {
    return (
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
                                User dashboard
                            </Layout.Content>
                        </Fragment>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
};
