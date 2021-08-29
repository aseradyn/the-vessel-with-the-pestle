import { Global, css } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from './components/theme/themeContext';

const GlobalStyles = () => {
    
    const {colors, useDarkMode} = useContext(ThemeContext);

    return (
        <Global styles={css`
            body {
                color: ${useDarkMode ? colors.gray[200] : colors.gray[900]};
                background-color: ${useDarkMode ? colors.gray[700] : colors.primary[200]};
                padding: 0px;
                margin: 0px;
                font-family: Inter, Arial, sans-serif;
                font-size: 14px;
            }
            a, a:active, a:visited {
                color: ${useDarkMode ? colors.secondary[500] : colors.secondary[700]};
                text-underline-position: under;
            }
            h1 {
                font-size: 1.4em;
                font-variant: small-caps;
            }
            h2 {
                font-size: 1.15em;
                font-variant: small-caps;
                margin-top: 30px;
            }
            `} 
        />
    )
}

export default GlobalStyles;