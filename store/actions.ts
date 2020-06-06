import { IThemeState } from './theme.context';
import { IUser } from './users.context';

export type ThemeActions = 'TO_LIGHT_THEME' | 'TO_DARK_THEME';

export type UserActions = 'ADD_USER' | 'UPDATE_USER' | 'DELETE_USER';

export interface IThemeActions {
    type: ThemeActions;
    payload: IThemeState;
}

export interface IUserActions {
    type: UserActions;
    payload: IUser;
}
