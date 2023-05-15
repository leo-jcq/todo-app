import { FC } from 'react';
import './Header.scss';
import { isLightTeme, useTheme, useThemeUpdate } from '../../contexts/ThemeContext';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';

const Header: FC = () => {
    const theme = useTheme();
    const themeUpdate = useThemeUpdate();

    return (
        <header className='header'>
            <span className="name">Todo</span>
            <button className="themeSwitch" onClick={themeUpdate}>
                <img src={isLightTeme(theme) ? iconSun : iconMoon} alt="" />
            </button>
        </header>
    );
};

export default Header;
