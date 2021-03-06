import styled from '@emotion/styled';
import { ThemeContext } from '../theme/themeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const BottomBar = () => {

    const {colors, useDarkMode} = useContext(ThemeContext);

    const Container = styled.div`
        border-top: 1px solid ${useDarkMode ? colors.primary[500] : colors.primary[400]};
        background-color: ${useDarkMode ? colors.primary[600] : colors.primary[500]};
        padding: 5px 10px 10px 15px;
        align-self: end;
        font-size: 0.8em;
        display: grid;
        grid-template-columns: auto auto;
        color: ${useDarkMode ? "inherit" : "white"};

        a, a:active, a:visited {
            color: ${useDarkMode ? colors.secondary[300] : colors.secondary[200]};
        }
    `

    return (
        <Container>
            <div style={{justifySelf: "start"}}>Want to talk? <a href="mailto:jill@jmenning.com">We are go for email!</a></div>
            <Link style={{justifySelf: "end"}}to="/credits">Credits</Link>
        </Container>
    )
}