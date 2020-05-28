import { createContext, FC, Reducer, useReducer } from 'react';
import { IUserActions } from './actions';

export type IUserRoles = 'admin' | 'client' | 'merchant';

export interface IUser {
    id?: string;
    name?: string;
    avatar?: string;
    role?: IUserRoles;
}

export interface IUserState {
    authenticated: boolean;
    token: string;
    user: IUser;
}

export interface IUserProps {
    state: IUserState;
    dispatch(type: IUserActions, payload?: IUser): void;
}

export const UserInitialState: IUserState = {
    authenticated: false,
    token: null,
    user: {},
};

export const UserContext = createContext<Partial<IUserProps>>({
    state: UserInitialState,
});

export const UserReducer = (state: IUserState, action: IUserActions): IUserState => {
    switch (action.type) {
        case 'ADD_USER':
            // send user to api, and update local state
            return { ...state, user: { ...action.payload } };

        default:
            return state;
    }
};

export const UserContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IUserState, IUserActions>>(UserReducer, UserInitialState);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
