import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main/Main';
import ThemeProvider from './contexts/ThemeContext';
import './index.scss';

const Index: FC = () => {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
};

createRoot(document.getElementById('root') as HTMLDivElement).render(<Index />);
