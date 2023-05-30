import { CSSProperties, FC, ReactNode, createContext, useContext, useState } from 'react';

export const THEMES: ThemesInterface = {
    light: 'light',
    dark: 'dark'
};

const USER_PREFER_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemeContext = createContext<ThemeType>(USER_PREFER_DARK ? THEMES.dark : THEMES.light);
const ThemeUpdateContext = createContext<() => void>(() => {});

export function useTheme(): ThemeType {
    return useContext(ThemeContext);
}

export function useThemeUpdate(): () => void {
    return useContext(ThemeUpdateContext);
}

export function isLightTeme(theme: ThemeType): boolean {
    return theme === THEMES.light;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>(USER_PREFER_DARK ? THEMES.dark : THEMES.light);

    const toggleTheme: () => void = () => {
        setTheme(isLightTeme(theme) ? THEMES.dark : THEMES.light);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                <div className={'app ' + theme} style={COLORS[theme] as CSSProperties}>
                    {children}
                </div>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const COLORS = {
    light: {
        '--bright-blue': 'hsl(220, 98%, 61%)',
        '--check-background': 'linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        '--main-bg': 'hsl(0, 0%, 98%)',
        '--card-bg': 'hsl(0, 0%, 100%)',
        '--text-primary': 'hsl(235, 19%, 35%)',
        '--text-secondary': 'hsl(236, 9%, 61%)',
        '--text-hover': 'hsl(235, 21%, 11%)',
        '--light-grayish-blue': 'hsl(236, 33%, 92%)'
    },
    dark: {
        '--bright-blue': 'hsl(220, 98%, 61%)',
        '--check-background': 'linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        '--main-bg': 'hsl(240, 20%, 12%)',
        '--card-bg': 'hsl(235, 24%, 19%)',
        '--text-primary': 'hsl(234, 39%, 85%)',
        '--text-secondary': 'hsl(236, 9%, 61%)',
        '--text-hover': 'hsl(0, 0%, 100%)',
        '--light-grayish-blue': 'hsl(235, 19%, 35%)'
    }
};
