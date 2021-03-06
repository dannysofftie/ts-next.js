import { IThemeState } from 'store/theme.context';
import { IUserState } from 'store/users.context';

export const sharedValues = {
    userToken: '__tk__',
    userAccount: '__us__',
    lastViewed: '__lv__',
    cartItems: '__cr__',
};

export type ThemeActions = 'TO_LIGHT_THEME' | 'TO_DARK_THEME';

export type UserActions = 'SIGNIN_USER' | 'UPDATE_USER' | 'SIGNOUT_USER';

export interface IThemeActions {
    type: ThemeActions;
    payload: IThemeState;
}

export interface IUserActions {
    type: UserActions;
    payload?: IUserState;
}
