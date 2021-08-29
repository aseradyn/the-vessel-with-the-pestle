import styled from "@emotion/styled"
import { ThemeContext } from "../theme/themeContext";
import { useContext } from "react";

export const Card = (props: any) => {

    const {colors, useDarkMode} = useContext(ThemeContext);

    const StyledDiv = styled.div`
        padding: 10px;
        background-color: ${useDarkMode ? "inherit" : colors.primary[100]};
        border: 1px solid ${useDarkMode ? colors.primary[400] : colors.primary[300]};
        max-width: 50em;
    `

    return (
        <StyledDiv {...props}>{props.children}</StyledDiv>
    )

}