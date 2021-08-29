import styled from '@emotion/styled';
import {useContext} from 'react';
import {ThemeContext} from './themeContext';
import {Tooltip} from '@material-ui/core';
import DarkModeTwoToneIcon from '@material-ui/icons/DarkModeTwoTone';
import LightModeTwoToneIcon from '@material-ui/icons/LightModeTwoTone';

export const ColorModeControl = () => {

    const {colors, useDarkMode, setTheme} = useContext(ThemeContext);

    const StyledDiv = styled.div`
        justify-self: end;
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;

        svg {
            border: 1px solid ${useDarkMode ? colors.gray[700] : colors.primary[100]};
            border-radius: 20px;
            padding: 5px;
        }

        svg:hover {
            background-color: ${useDarkMode ? "rgb(255, 255, 255, 0.1)" : colors.primary[200] + "80"};
        }

        & svg.selected {
            border: 1px solid ${useDarkMode ? colors.primary[300] : colors.primary[500]};
        }
    `

    const switchDarkMode = () => {
        setTheme("dark");
    }

    const switchLightMode = () => {
        setTheme("light");
    }
    
    return (
        <StyledDiv>
            <Tooltip title={useDarkMode ? "Switch to light mode" : "Using light mode"}>
                <LightModeTwoToneIcon onClick={switchLightMode} className={useDarkMode ? "" : "selected"}/>
            </Tooltip>
            <Tooltip title={useDarkMode ? "Using dark mode" : "Switch to dark mode"}>
                <DarkModeTwoToneIcon onClick={switchDarkMode} className={useDarkMode ? "selected" : ""} />
            </Tooltip>
          </StyledDiv>
    )
}