import {createContext, useState} from 'react';
import {getCookie} from '../../utilities/cookies';
import {Theme} from './themeTypes';
import {palette as DarkModeColors} from './colors';

const detectDarkMode = () => {
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    const _lightModeCookie = getCookie("useLightMode");
    if (preferDarkMode) { // if OS set to dark mode
        if (_lightModeCookie === "true") { // but they have a light mode cookie set to true
            return false; // respect cookie - use light mode
        }
    }
    if (preferLightMode) { // if OS is set to light mode
        if (_lightModeCookie === "false") { // but they have a light mode cookie set to false
            return true; // return dark mode
        }
        else return false; // respect OS setting - use light mode
    }
    else return true; // otherwise, use dark mode
}

const createStartingTheme = () => {
    const isDarkMode = detectDarkMode();
    const _colors = DarkModeColors;
    const emptyFunction = () => {};

    return {useDarkMode: isDarkMode, colors: _colors, setTheme: emptyFunction};
}

export const ThemeContext = createContext<Theme>(createStartingTheme());

export const ThemeProvider = ThemeContext.Provider;

export const ThemeWrapper = (props: any) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(detectDarkMode());

    const setTheme = (newTheme: "dark" | "light") => {
        if (newTheme === "dark") {
            setIsDarkMode(true);
            document.cookie = 'useLightMode=false';
        }
        else {
            setIsDarkMode(false);
            document.cookie = 'useLightMode=true';
        }
    }

    return (
        <ThemeProvider value={{
            useDarkMode: isDarkMode,
            colors: DarkModeColors,
            setTheme: setTheme }}>{props.children}</ThemeProvider>
    )

}