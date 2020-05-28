import { createContext, FC, Reducer, useReducer } from 'react';
import { IThemeActions } from './actions';

export type Theme = 'dark' | 'light';

export interface Dark {
    text: string;
    body: string;
    background: string;
}

export interface Light {
    text: string;
    body: string;
    background: string;
}

export interface IThemeState {
    theme: Theme;
    dark: Dark;
    light: Light;
}

export const ThemeInitialState: IThemeState = {
    theme: 'light',
    dark: {
        text: 'black',
        body: 'white',
        background: 'gray',
    },
    light: {
        text: 'white',
        body: 'lightgray',
        background: 'gray',
    },
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
            return { ...state, ...actions.payload };

        case 'TO_DARK_THEME':
            return { ...state, ...actions.payload };

        default:
            return state;
    }
};

export const ThemeContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer<Reducer<IThemeState, IThemeActions>>(ThemeReducer, ThemeInitialState);

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
