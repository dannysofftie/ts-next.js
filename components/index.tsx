import { useRouter } from 'next/router';
import { Fragment, useContext, useEffect } from 'react';
import { IUser, UserContext } from 'store';

export default function RequiresAuth({ children }) {
    const router = useRouter();

    const userContext = useContext(UserContext);

    // we use useEffect here to run execute this logic only when the component mounts,
    // this is to prevent ssr since localStorage is only defined in browsers
    useEffect(() => {
        ensureAuth();
    });

    const ensureAuth = () => {
        const user = localStorage.getItem('account');

        // if there is no user, redirect to sign in
        if (!user) {
            return router.push('/signin?error=Missing credentials&message=Authentication required');
        }

        let currentUser: IUser = JSON.parse(user);

        // if there's a user but missing id, redirect to login
        if (!currentUser?.id) {
            return router.push('/signin?error=Missing credentials&message=Authentication required');
        }

        // set this user to context, with persistence enabled
        // it's good to note that this component wraps all components that requires users to be authenticated,
        // and logic in here runs for every page reload or every page navigation
        // it will only update the context if no user exists
        if (!userContext.state?.user?.id)
            return userContext.dispatch({
                type: 'SIGNIN_USER',
                payload: {
                    authenticated: true,
                    token: localStorage.getItem('token'),
                    user: currentUser,
                },
            });
    };

    return <Fragment>{children}</Fragment>;
}
