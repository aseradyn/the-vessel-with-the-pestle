
export type Palette = {
    primary: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
    },
    secondary: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
    },
    accent: {
        500: string
        600: string
        700: string
    },
    gray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }
}

export type Theme = {
    useDarkMode: boolean,
    colors: Palette;
    setTheme: (newTheme: "light" | "dark") => void;
}