import { createContext, FC, Reducer, useReducer } from 'react';
import { IThemeActions } from './actions';

export type Theme = 'dark' | 'light';

export interface IThemeValues {
    text: string;
    body: string;
    background: string;
}

export interface IThemeState {
    theme: Theme;
    values?: IThemeValues;
}

const darkState = {
    text: 'black',
    body: 'white',
    background: 'gray',
};

const lightState = {
    text: 'white',
    body: 'lightgray',
    background: 'gray',
};

export const ThemeInitialState: IThemeState = {
    theme: 'light',
};

export interface IThemeProps {
    state: IThemeState;
    dispatch(type: IThemeActions): void;
}

export const ThemeContext = createContext<Partial<IThemeProps>>({
    state: ThemeInitialState,
});

export const ThemeReducer = (state: IThemeState, actions: IThemeActions): IThemeState => {
    switch (actions.type) {
        case 'TO_LIGHT_THEME':
            return { theme: 'light', values: lightState };

        case 'TO_DARK_THEME':
            return { theme: 'dark', values: darkState };

        default:
            return state;
    }
};

export const ThemeContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IThemeState, IThemeActions>>(ThemeReducer, ThemeInitialState);

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
