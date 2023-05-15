import { CSSProperties, FC, ReactNode, createContext, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemesInterface {
    light: ThemeType;
    dark: ThemeType;
}

export const THEMES: ThemesInterface = {
    light: 'light',
    dark: 'dark'
};

const ThemeContext = createContext<ThemeType>(THEMES.light);
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
    const [theme, setTheme] = useState<ThemeType>(THEMES.light);

    const toggleTheme: () => void = () => {
        setTheme(isLightTeme(theme) ? THEMES.dark : THEMES.light);
    };

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    <div className="app" style={COLORS[theme] as CSSProperties}>
                        {children}
                    </div>
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    );
};

export default ThemeProvider;

export const COLORS = {
    light: {
        '--bright-blue': 'hsl(220, 98%, 61%)',
        '--check-background': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        '--main-bg': 'hsl(0, 0%, 98%)',
        '--card-bg': 'hsl(0, 0%, 100%)',
        '--text-primary': 'hsl(235, 19%, 35%)',
        '--text-secondary': 'hsl(236, 9%, 61%)',
        '--text-hover': 'hsl(235, 21%, 11%)'
    },
    dark: {
        '--bright-blue': 'hsl(235, 21%, 11%)',
        '--check-background': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        '--main-bg': 'hsl(0, 0%, 98%)',
        '--card-bg': 'hsl(235, 24%, 19%)',
        '--text-primary': 'hsl(234, 39%, 85%)',
        '--text-secondary': 'hsl(236, 9%, 61%)',
        '--text-hover': 'hsl(0, 0%, 100%)'
    }
};
